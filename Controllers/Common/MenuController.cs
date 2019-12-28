using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Forge.Models.Common;
using Newtonsoft.Json;
using System.IO;

namespace Forge.Controllers.Common
{
    public class MenuController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}
        public string GetMenuJson()
        {
            using (StreamReader r = new StreamReader("ClientApp/assets/Data/tblmenu.json"))
            {
                return r.ReadToEnd();

            }
        }
    }
}
