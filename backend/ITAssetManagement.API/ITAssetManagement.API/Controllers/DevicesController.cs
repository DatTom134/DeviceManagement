using Microsoft.AspNetCore.Mvc;

namespace ITAssetManagement.API.Controllers;


[ApiController]
[Route("api/[controller]")]
public class DevicesController : Controller
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        { 
            Message = "Devices API Running"
        });
    }
}
