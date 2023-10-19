using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mime;
using Npgsql;

namespace conference_planner.Controllers;

[ApiController]
[Route("/api/[controller]")] 
public class TestController : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<string>> Get()
    {
        string connString = "Host=conferenceplanner_database;Username=postgres;Password=postgres;Database=conferenceplanner;Port=5432;";
        await using var dataSource = NpgsqlDataSource.Create(connString);
        
        await using var command = dataSource.CreateCommand("SELECT * FROM attendee_types");
        await using var reader = await command.ExecuteReaderAsync();

        var results = new List<string>();
        while (await reader.ReadAsync())
        {
            results.Add(reader.GetString(1));
        }

        return results;
    }
}
