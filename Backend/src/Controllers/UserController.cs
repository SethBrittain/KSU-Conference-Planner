using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mime;
using Npgsql;
using Microsoft.VisualBasic;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using ConferencePlanner.services;
using System.Security;
using ConferencePlanner.Identity;
using ConferencePlanner.Exceptions;
using System.Text;
using System.Runtime.InteropServices;

/// <summary>
/// Handles the HTTP POST request to create a new user.
/// </summary>
/// <returns>An IActionResult representing the HTTP response.</returns>
namespace ConferencePlanner.Controllers;

[ApiController]
[Route("/api/[controller]")] 
public class UserController : ControllerBase
{
    private IUserService _userService;
    private IPermissionService _permissionService;
    
	/// <summary>
	/// Initializes a new instance of the <see cref="UserController"/> class.
	/// </summary>
	/// <param name="userService"> The user service is injected into the controller. </param>
	/// <param name="permissionService"> 
	/// The permission servvice is injected into the controller. Not currently used. 
	/// </param>
    public UserController(IUserService userService, IPermissionService permissionService)
    {
        _userService = userService;
        _permissionService = permissionService;
    }

	/// <summary>
	/// Handles the HTTP POST request. Requires authentication.
	/// </summary>
	/// <returns> The current user object. </returns>
	/// <exception cref="UserNotFoundException"> Throws exception if user is not found. </exception>
    [HttpPost, Produces(MediaTypeNames.Application.Json)]
    [Authorize(AuthenticationSchemes = "Cookies")]
    public async Task<IActionResult> Post()
    {
        if (HttpContext.User.Identity is not ClaimsIdentity identity) return StatusCode(400);
		Console.WriteLine("Is Admin" + HttpContext.User.IsInRole("admin"));

		var val = identity.FindFirst("uid") ?? throw new UserNotFoundException("User not found");
		long uid = long.Parse(val.Value);
        User currentUser = await _userService.GetUserById(uid);
        return Ok(currentUser);
    }

	[HttpGet, Produces(MediaTypeNames.Application.Json)]
	public async Task<IActionResult> Get(string id)
	{
		long uid;
		try { uid = long.Parse(id); } catch { return BadRequest();}

		var user = await this._userService.GetUserById(uid);
		
		OkObjectResult result = new OkObjectResult(user);
		result.ContentTypes.Add(MediaTypeNames.Application.Json);

		return result;
	}
}
