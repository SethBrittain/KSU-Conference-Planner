using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using conference_planner.services;
using conference_planner.Identity;
using conference_planner.Exceptions;

namespace conference_planner.Controllers;

/// <summary>
/// This controller handles authentication
/// </summary>
[Route("auth")]
public class AuthenticationController : ControllerBase
{
    string AUTH_SERVICE_HOST = Environment.GetEnvironmentVariable("ASPNETCORE_CAS_SERVICE_HOST")
		?? throw new Exception("ASPNETCORE_CAS_SERVICE_HOST not set");
    string AUTH_CAS_HOST = Environment.GetEnvironmentVariable("ASPNETCORE_AUTH_CAS_HOST")
		?? throw new Exception("ASPNETCORE_AUTH_CAS_HOST not set");

    private IUserService _userService;

    public AuthenticationController(IUserService userService)
    {
        _userService = userService;
    }

    [AllowAnonymous]
	[Route("cas/login")]
    public IActionResult Login(string returnUrl)
    {
        string url = $"{AUTH_CAS_HOST}/login?service={Uri.EscapeDataString(AUTH_SERVICE_HOST)}ticket";
        return Redirect(url);           
    }

    [Route("logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return Redirect("/"); 
    }

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