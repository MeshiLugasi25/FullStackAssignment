using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Meshi.IOTDevice
{
    public class ReadsService : IReadsService
    {
        private readonly HttpClient _client;

        public ReadsService(HttpClient httpClient)
        {
            _client = httpClient;
        }

        public async Task ReportRead(DateTime timeStamp, int value, FunctionType type)
        {
            var json = JsonSerializer.Serialize(new Read() { TimeStamp = timeStamp, Value = value, Type = type });
            var httpContent = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            await _client.PostAsync("http://localhost:5000/api/Reads", httpContent);
        }

    }

    class Read
    {
        public DateTime TimeStamp { get; set; }
        public int Value { get; set; }
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public FunctionType Type { get; set; }
    }

    public enum FunctionType
    {
        Sine,
        State
    }
}
