using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mime;
using Npgsql;
using Microsoft.VisualBasic;
using System.Security.Claims;

namespace conference_planner.Controllers;

[ApiController]
[Route("/api/[controller]")] 
public class TestController : ControllerBase
{
	/// <summary>
	/// Handles the HTTP POST request.
	/// </summary>
	/// <returns>The IActionResult representing the HTTP response.</returns>
	[HttpPost]
	public IActionResult Post()
	{
		IEnumerable<Claim> a = HttpContext.User.Claims;
		string result = a.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value ?? "N/A";
		return Ok(a);
	}
	
	/// <summary>
	/// Handles the HTTP GET request based on the specified 'which' parameter.
	/// </summary>
	/// <param name="which">The value indicating which data to retrieve.</param>
	/// <returns>A Task representing the asynchronous operation that returns the retrieved data.</returns>
	[HttpGet]
	public async Task<IEnumerable<IEnumerable<string>>> Get(int which)
	{
		string connString = Environment.GetEnvironmentVariable("ASPNETCORE_CONNECTION_STRING") ?? throw new Exception("Invalid Connection String");
		await using var dataSource = NpgsqlDataSource.Create(connString);
		
		await using var command = which switch 
		{
			0 => GetAttendeeTypes(dataSource),
			1 => GetEventRegistrations(dataSource),
			2 => GetEvents(dataSource),
			3 => GetPeople(dataSource),
			4 => GetPresentationAssignments(dataSource),
			5 => GetPresentations(dataSource),
			6 => GetSessions(dataSource),
			_ => throw new NotImplementedException()
		};
		await using var reader = await command.ExecuteReaderAsync();

		var results = new List<List<string>>();
		while (await reader.ReadAsync())
		{
			List<string> row = new();
			for (var i = 1; i < reader.FieldCount; i++)
			{
				row.Add(reader.GetValue(i).ToString() ?? "");
			}
			results.Add(row);
		}

		return results;
	}

	/// <summary>
	/// Retrieves the attendee types from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the attendee types from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the attendee types.</returns>
	private NpgsqlCommand GetAttendeeTypes(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM attendee_types LIMIT 10");
	}

	/// <summary>
	/// Retrieves the event registrations from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the event registrations from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the event registrations.</returns>
	private NpgsqlCommand GetEventRegistrations(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM event_registrations LIMIT 10");
	}

	/// <summary>
	/// Retrieves the events from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the events from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the events.</returns>
	private NpgsqlCommand GetEvents(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM events LIMIT 10");
	}

	/// <summary>
	/// Retrieves the people from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the people from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the people.</returns>
	private NpgsqlCommand GetPeople(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM people LIMIT 10");
	}

	/// <summary>
	/// Retrieves the presentation assignments from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the presentation assignments from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the presentation assignments.</returns>
	private NpgsqlCommand GetPresentationAssignments(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM presentation_assignments LIMIT 10");
	}
	
	/// <summary>
	/// Retrieves the presentations from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the presentations from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the presentations.</returns>
	private NpgsqlCommand GetPresentations(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM presentations LIMIT 10");
	}

	/// <summary>
	/// Retrieves the sessions from the data source.
	/// </summary>
	/// <param name="dataSource">The data source to retrieve the sessions from.</param>
	/// <returns>The NpgsqlCommand representing the SQL query to retrieve the sessions.</returns>
	private NpgsqlCommand GetSessions(NpgsqlDataSource dataSource)
	{
		return dataSource.CreateCommand("SELECT * FROM sessions LIMIT 10");
	}
}
