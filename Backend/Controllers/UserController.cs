using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mime;
using Npgsql;
using Microsoft.VisualBasic;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using conference_planner.services;
using System.Security;
using conference_planner.Identity;
using conference_planner.Exceptions;

namespace conference_planner.Controllers;

[ApiController]
[Route("/api/[controller]")] 
public class UserController : ControllerBase
{
    private IUserService _userService;
    private IPermissionService _permissionService;
    
    public UserController(IUserService userService, IPermissionService permissionService)
    {
        _userService = userService;
        _permissionService = permissionService;
    }

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

    // [HttpPut, Produces(MediaTypeNames.Application.Json)]
    // [Authorize(AuthenticationSchemes = "Bearer")]
    // public async Task<IActionResult> Put()
    // {
    //     // Required to be authed
    //     if (HttpContext.User.Identity is not ClaimsIdentity identity) return StatusCode(401);
        
    //     _userService.AddUser(u)

    //     return Ok(currentUser);
    // }
}
