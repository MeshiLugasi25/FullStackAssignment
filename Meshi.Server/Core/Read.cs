using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meshi.Server.Core
{
    public class Read
    {
        public Read(DateTime timeStamp, int value , TypeCore type)
        {
            Id = Guid.NewGuid().ToString("N");
            Timestamp = timeStamp;
            Value = value;
            Type = type;
            if (type is TypeCore.Sine)
            {
               CalculateSineAnomaly();
            }
            if (type is TypeCore.State)
            {
                 CalculateStateAnomaly();
            }

        }
        [BsonId] 
        public string Id { get; set; }
        public DateTime Timestamp { get; set; }

        public int Value { get; set; }
        public TypeCore Type { get; set; }

        public bool Anomaly { get; set; }
        private void CalculateSineAnomaly()
        {
            if (Value < 0 || Value > 32)
            {
                Anomaly = true;
            }
            else
            {
                Anomaly = false;
            }
        }
        private void CalculateStateAnomaly()
        {
            if (Value < 256 || Value > 4095)
            {
                Anomaly = true;
            }
            else
            {
                Anomaly = false;
            }
        }
    }


  
 
    public enum TypeCore
    {
        Sine,
        State
    }
}
