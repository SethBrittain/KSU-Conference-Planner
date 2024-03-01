using Microsoft.VisualStudio.TestPlatform.TestHost;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using System.Net.Mime;
using ConferencePlanner.Identity;
namespace ConferencePlanner.Tests.IntegrationTests.Controllers;

public class TestControllerTests : IClassFixture<WebApplicationFactory<Program>>
{
	private readonly WebApplicationFactory<Program> _factory;
	
	public TestControllerTests(WebApplicationFactory<Program> factory)
	{
		_factory = factory;
	}

	[Fact]
	public async void Test1()
	{
		var client = _factory.CreateClient();
		var response = await client.GetAsync("/api/Test?which=2");
		Assert.Equal(System.Net.HttpStatusCode.OK, response.StatusCode);
		Assert.True(response.Content.Headers.ContentType?.MediaType == MediaTypeNames.Application.Json);
	}
}
