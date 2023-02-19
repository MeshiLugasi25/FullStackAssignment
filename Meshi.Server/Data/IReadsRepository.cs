using Meshi.Server.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meshi.Server.Data
{
    public interface IReadsRepository
    {
        Task<Read> Get(string id);
        Task<IEnumerable<Read>> Get();
        Task Add(Read read);

    }
}
