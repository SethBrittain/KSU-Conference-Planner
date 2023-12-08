using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Reroutes to the index.html file if no other route is matched.
/// </summary>
/// <returns>The index.html file as a response.</returns>
namespace conference_planner.Controllers;

[Route("/**")]
public class IndexController : ControllerBase {
    [HttpGet] 
    public IActionResult Index() {
        return File("~/index.html", "text/html"); 
    }
}



