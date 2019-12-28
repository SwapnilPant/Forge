using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forge.Models.Common
{
    public class Menu
    {
        public int MenuId { get; set; }
        public string MenuName { get; set; }
        public int Sort { get; set; }
        public int UserType { get; set; }
        public int Parent { get; set; }
        public int Active { get; set; }
    }
}
