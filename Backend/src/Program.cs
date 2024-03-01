/* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

using ConferencePlanner.services;
using ConferencePlanner;
using Microsoft.AspNetCore.Authentication.Cookies;
using ConferencePlanner.Identity;
using Microsoft.AspNetCore.Identity;
using Npgsql;

namespace ConferencePlanner;

// App builder for adding services
// var builder = WebApplication.CreateBuilder(args);

// Add controllers as services
// builder.Services.AddControllers();

// Add Swagger/OpenAPI for documentation
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// Add custom services

// string connString = Environment.GetEnvironmentVariable("ASPNETCORE_CONNECTION_STRING") 
// 	?? "Host=localhost;Port=5432;Username=postgres;Password=postgres;Database=conference_planner";
// NpgsqlDataSource conn = NpgsqlDataSource.Create(connString);
// builder.Services.AddSingleton(conn);

// builder.Services.AddScoped<IPermissionService, PermissionService>();
// builder.Services.AddScoped<IUserService, UserService>();

// // Add identity roles
// // builder.Services.AddIdentity<User, AdminRole>();

// // Configure password requirements and options
// builder.Services.Configure<IdentityOptions>(options =>
// {
//     // Password settings.
//     options.Password.RequireDigit = true;
//     options.Password.RequireLowercase = true;
//     options.Password.RequireNonAlphanumeric = true;
//     options.Password.RequireUppercase = true;
//     options.Password.RequiredLength = 8;
//     options.Password.RequiredUniqueChars = 1;

//     // Lockout settings.
//     options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
//     options.Lockout.MaxFailedAccessAttempts = 5;
//     options.Lockout.AllowedForNewUsers = true;

//     // User settings.
//     options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
//     options.User.RequireUniqueEmail = true;
// });

// // Configure cookie settings for tracking authentication between requests
// builder.Services.ConfigureApplicationCookie(options =>
// {
//     // Cookie settings
//     options.Cookie.HttpOnly = true;
//     options.ExpireTimeSpan = TimeSpan.FromMinutes(30);

//     options.LoginPath = "/authcas/login";
//     options.AccessDeniedPath = "/error";
//     options.SlidingExpiration = true;
// });

// // Add the configured application cookie as an authentication scheme
// builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie("Cookies");

// // Build the app with the services
// var app = builder.Build();

// // Allow serving static files from wwwroot
// app.UseStaticFiles();
// // Enables routing for controllers
// app.UseRouting();

// // Enables secure pages and authentication
// app.UseAuthentication();
// app.UseAuthorization();

// // Maps controllers to routes from attributes on the controller classes and methods
// app.MapControllers();

// // If no routes match, serve index.html. Necessary for SPA routing to work.
// app.MapFallbackToFile("index.html");

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
// 	// Serve generated Swagger docs
//     app.UseSwagger();
//     app.UseSwaggerUI();
// 	// Show all routes in development
// 	app.MapGet("/debug/routes", (IEnumerable<EndpointDataSource> endpointSources) =>
// 		string.Join("\n", endpointSources.SelectMany(source => source.Endpoints)));
// }
// if (app.Environment.EnvironmentName == "Testing")
// {
// 	// Run tests
// 	// app.Run();
// }

// // Run the app
// app.Run();



public class Program
{
	public static async Task Main(string[] args)
	{
		await Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder => {
			webBuilder.UseStartup<Startup>();
			webBuilder.UseUrls("http://localhost:5000", "https://localhost:5001");
		}).Build().RunAsync();
	}
}