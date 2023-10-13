using Microsoft.AspNetCore.Mvc;

namespace conference_planner.Controllers;

[Route("/**")]
public class IndexController : ControllerBase {
    [HttpGet] 
    public IActionResult Index() {
        return File("~/index.html", "text/html"); 
    }
}



