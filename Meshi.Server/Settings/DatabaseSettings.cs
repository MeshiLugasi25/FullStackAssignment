using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meshi.Server.Settings
{
    public class DatabaseSettings
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }

    }
}
