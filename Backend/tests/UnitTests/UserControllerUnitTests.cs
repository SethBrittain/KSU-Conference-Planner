using System.Net.Mime;
using ConferencePlanner.Controllers;
using ConferencePlanner.Exceptions;
using ConferencePlanner.Identity;
using ConferencePlanner.services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace ConferencePlanner.Tests.UnitTests.Controllers;

public class UserControllerUnitTests
{
	private readonly Mock<IUserService> _mockUserService;
	private readonly Mock<IPermissionService> _mockPermissionService;
	private readonly UserController _controller;

	public UserControllerUnitTests()
	{
		_mockUserService = new Mock<IUserService>();
		_mockUserService.Setup(x => x.GetUserById(It.IsAny<long>())).ReturnsAsync(
			new User(1, "fakeperson@fake.domain", new AnonymousRole(), "Fake", "Person", "None", "None", DateTime.Now, DateTime.Now));

		_mockPermissionService = new Mock<IPermissionService>();
		_controller = new UserController(_mockUserService.Object, _mockPermissionService.Object);
	
	}

	[Fact]
	public async void CanGetUserByUserId()
	{		
		// Act
		// var response = await client.GetAsync("/api/user");
		
		IActionResult response = await _controller.Get("1");
		Assert.IsType<OkObjectResult>(response);

		// Cast to workable object
		OkObjectResult? result = response as OkObjectResult;
		Assert.NotNull(result);
		Assert.NotNull(result?.Value);

		// Require Content-Type header to be application/json
		Assert.Contains(MediaTypeNames.Application.Json, result?.ContentTypes);

		// Deserialize the response
		User? u = result?.Value as User;
		Assert.NotNull(u);
	}

	[Theory]
	[InlineData("")]
	[InlineData("a")]
	[InlineData("*")]
	[InlineData("\n")]
	public async void InvalidIdGivesErrorResponse(string id)
	{
		IActionResult response = await _controller.Get(id);
		
		Assert.IsType<BadRequestResult>(response);
	}
}