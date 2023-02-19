using Meshi.Server.Core;
using Meshi.Server.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meshi.Server.Data
{
    public class ReadsRepository : IReadsRepository
    {
        private readonly IMongoCollection<Read> _collection;
        public ReadsRepository(IOptions<DatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _collection = database.GetCollection<Read>(settings.Value.CollectionName);
        }
        public async Task<IEnumerable<Read>> Get() =>
            await _collection.Find(c => true).SortByDescending(r=>r.Timestamp).ToListAsync();

        public async Task<Read> Get(string id) =>
            await _collection.Find<Read>(c => c.Id == id).FirstOrDefaultAsync();
        public async Task Add(Read read)
        {
            await _collection.InsertOneAsync(read);
        }

    }
}

    

 

        
      
 
