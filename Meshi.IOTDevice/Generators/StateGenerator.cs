using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Meshi.IOTDevice
{
    public class StateGenerator : GeneratorBase
    {
        private Random rnd;

        public StateGenerator(ulong delay = 2)
        {
            _delay = delay;
            _value = 0;
            _minRange = 256;
            _maxRange = 4095;
            rnd = new Random();
        }

        protected override async IAsyncEnumerable<int> Generate(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _value = rnd.Next(_minRange, _maxRange + 1);
                await Task.Delay((int)_delay, stoppingToken);
                yield return (int)_value;
            }
        }
    }
}
