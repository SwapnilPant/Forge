using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Forge.Models.Common;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;
using System.IO;
using System.Data;
using Nancy.Json;

namespace Forge.Controllers.Common
{
    [ApiController]
    [Route("[controller]")]
    public class MenuController : ControllerBase
    {
        private readonly ILogger<MenuController> _logger;

        public MenuController(ILogger<MenuController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Menu> Get()
        {
            IEnumerable<Menu> MenuList;
            using (StreamReader r = new StreamReader("ClientApp/src/assets/Data/tblmenu.json"))
            {
                string json = r.ReadToEnd();
                MenuList = JsonConvert.DeserializeObject<IEnumerable<Menu>>(json);
                return MenuList;
            }
        }
    }
}
