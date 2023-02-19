using Meshi.Server.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Meshi.Server.DTOs
{
    public class ReadDTO
    {
        public DateTime Timestamp { get; set; }

        public int Value { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public TypeDTO Type {get; set;}
        public bool Anomaly { get; set; }

        public TypeCore GetTypeCore()
        {
            return (TypeCore)Enum.Parse(typeof(TypeCore), Type.ToString());
        }
    }

    public enum TypeDTO
    {
        Sine,
        State
    }
}
