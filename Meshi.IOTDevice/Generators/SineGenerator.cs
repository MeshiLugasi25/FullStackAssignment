using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Meshi.IOTDevice
{
    public class SineGenerator : GeneratorBase
    {
        public SineGenerator(ulong delay = 2)
        {
            _tick = 0;
            _delay = delay;
            _value = 0;
            _minRange = 0;
            _maxRange = 32;
        }

        protected override async IAsyncEnumerable<int> Generate(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _value = 16 * Math.Sin((180 * _tick) / 5) + 16;
                _tick = _tick + _delay;
                await Task.Delay((int)_delay, stoppingToken);
                yield return (int)_value;
            }
        }
    }
}
