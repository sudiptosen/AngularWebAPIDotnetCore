using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace angularWebAPIDotnetCoreSeed.Controllers{
  [ApiController]
  [Route("api/v1")]
  public class GreetingsController: ControllerBase {
    [HttpGet] 
    [Route("greetings")]
    public IActionResult ListProducts()
    {
      var data = new {result = "Good Morning"};
      return Ok(data);
    }
  }
}