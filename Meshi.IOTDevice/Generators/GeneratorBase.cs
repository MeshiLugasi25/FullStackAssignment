using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;

namespace Meshi.IOTDevice
{
    public abstract class GeneratorBase
    {
        protected ulong _tick;
        protected ulong _delay;
        protected double _value;
        protected int _minRange;
        protected int _maxRange;


        protected abstract IAsyncEnumerable<int> Generate(CancellationToken stoppingToken);
        
        public async IAsyncEnumerable<int> Start(CancellationToken stoppingToken)
        {
            Random rnd = new Random();
            var stopwatch = Stopwatch.StartNew();
            var randTime = rnd.Next(2, 6);
            await foreach (var number in Generate(stoppingToken))
            {
                if(stopwatch.Elapsed.TotalSeconds >= randTime)
                {
                    stopwatch.Restart();
                    randTime = rnd.Next(2, 6);
                    yield return GenerateOutOfBound();
                }
                else
                {
                    yield return number;
                }
            }
        }
        private int GenerateOutOfBound()
        {
            Random rnd = new Random();
            var above = rnd.Next(_maxRange, (int)(1.5*_maxRange));
            var below = rnd.Next(_minRange - (int)(0.5* _maxRange), _minRange);
            return rnd.Next(0, 2) == 0 ? above : below; 
        }
    }
}