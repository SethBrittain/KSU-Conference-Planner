using Microsoft.VisualStudio.TestPlatform.TestHost;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using System.Net.Mime;
using ConferencePlanner.Identity;
namespace ConferencePlanner.Tests.IntegrationTests.Controllers;

public class AuthenticationControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
	private readonly WebApplicationFactory<Program> _factory;
	
	public AuthenticationControllerIntegrationTests(WebApplicationFactory<Program> factory)
	{
		_factory = factory;
	}

	[Fact]
	public async void LoginRouteShouldRedirectToExternalAuth()
	{
		var client = _factory.CreateClient();
		var response = await client.GetAsync("/login");
		Console.WriteLine(response.StatusCode);
		Assert.True(false);		
	}
}
