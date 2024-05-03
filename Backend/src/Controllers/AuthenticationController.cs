using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using ConferencePlanner.services;
using ConferencePlanner.Identity;
using ConferencePlanner.Exceptions;

namespace ConferencePlanner.Controllers;

/// <summary>
/// This controller handles authentication.
/// </summary>
[Route("auth")]
public class AuthenticationController : ControllerBase
{
	/// <summary>
	/// Our login service URL
	/// </summary>
	string AUTH_SERVICE_HOST = Environment.GetEnvironmentVariable("ASPNETCORE_CAS_SERVICE_HOST")
		?? throw new Exception("ASPNETCORE_CAS_SERVICE_HOST not set");

	/// <summary>
	/// Public CAS host URL
	/// </summary>
	string AUTH_CAS_HOST = Environment.GetEnvironmentVariable("ASPNETCORE_AUTH_CAS_HOST")
		?? throw new Exception("ASPNETCORE_AUTH_CAS_HOST not set");

	private IUserService _userService;

	/// <summary>
	/// Initializes a new instance of the <see cref="AuthenticationController"/> class.
	/// </summary>
	/// <param name="userService">The user service.</param>
	public AuthenticationController(IUserService userService)
	{
		_userService = userService;
	}

	/// <summary>
	/// Handles the login request.
	/// </summary>
	/// <param name="returnUrl">The return URL. Optional </param>
	/// <returns>The redirect result.</returns>
	[AllowAnonymous]
	[Route("cas/login")]
	public IActionResult Login(string returnUrl)
	{
		string url = $"{AUTH_CAS_HOST}/login?service={Uri.EscapeDataString(AUTH_SERVICE_HOST)}ticket";
		return Redirect(url);           
	}

	/// <summary>
	/// Handles the logout request.
	/// </summary>
	/// <returns>The redirect result.</returns>
	[Route("logout")]
	public async Task<IActionResult> Logout()
	{
		await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
		return Redirect("/"); 
	}

	/// <summary>
	/// Handles the ticket validation request.
	/// </summary>
	/// <param name="ticket">The ticket to validate</param>
	/// <returns>A redirect back to the app with the cookie</returns>
	[AllowAnonymous]
	[Route("cas/ticket")]
	public async Task<IActionResult> Ticket(string ticket)
	{
		string url = $"{AUTH_CAS_HOST}serviceValidate?ticket={ticket}&service={Uri.EscapeDataString(AUTH_SERVICE_HOST)}ticket";
		
		HttpClient http = new();
		using (HttpResponseMessage response = await http.GetAsync(url))
		{
			using Stream stream = await response.Content.ReadAsStreamAsync();
			using StreamReader reader = new StreamReader(stream);
			
			string body = await reader.ReadToEndAsync();
			XDocument doc = XDocument.Parse(body);
			var element = doc.Descendants("{http://www.yale.edu/tp/cas}user").FirstOrDefault();

			if (element != null)
			{
				string eid = element.Value;
				string email = $"{eid}@ksu.edu";

				User u;
				try
				{
					u = await this._userService.GetUserByEmail(email);
				}
				catch (UserNotFoundException)
				{
					u = await this._userService.RegisterUser(email, "unknown", "unknown", "", "");
				}

				List<Claim> userClaims = new() {
							new Claim("uid", u.userId.ToString()),
							new Claim(ClaimTypes.Email, email),
							new Claim(ClaimTypes.Name, $"{u.firstName} {u.lastName}"),
							new Claim(ClaimTypes.Role, u.role.Name)
						};

				ClaimsIdentity userIdentity = new ClaimsIdentity(userClaims, "User Identity");
				ClaimsPrincipal userPrinciple = new ClaimsPrincipal(new[] { userIdentity });

				await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, userPrinciple);

				return Redirect("/app");
			}
		}

		return StatusCode(403);
	}
}