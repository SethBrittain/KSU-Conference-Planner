using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mime;
using Npgsql;
using Microsoft.VisualBasic;

namespace conference_planner.Controllers;

[ApiController]
[Route("/api/[controller]")] 
public class TestController : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<IEnumerable<string>>> Get(int which)
    {
        string connString = Environment.GetEnvironmentVariable("ASPNETCORE_CONNECTION_STRING") ?? throw new Exception("Invalid Connection String");
        await using var dataSource = NpgsqlDataSource.Create(connString);
        
        //dataSource.CreateCommand("SELECT * FROM attendee_types");
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

    private NpgsqlCommand GetAttendeeTypes(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM attendee_types LIMIT 10");
    }

    private NpgsqlCommand GetEventRegistrations(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM event_registrations LIMIT 10");
    }

    private NpgsqlCommand GetEvents(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM events LIMIT 10");
    }

    private NpgsqlCommand GetPeople(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM people LIMIT 10");
    }

    private NpgsqlCommand GetPresentationAssignments(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM presentation_assignments LIMIT 10");
    }
    
    private NpgsqlCommand GetPresentations(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM presentations LIMIT 10");
    }

    private NpgsqlCommand GetSessions(NpgsqlDataSource dataSource)
    {
        return dataSource.CreateCommand("SELECT * FROM sessions LIMIT 10");
    }
}
