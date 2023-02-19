using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Meshi.IOTDevice
{
    public class SineWorker : BackgroundService
    {
        private readonly ILogger<SineWorker> _logger;
        private readonly SineGenerator _sineGenerator;
        private readonly IReadsService _readsService;

        public SineWorker(ILogger<SineWorker> logger, SineGenerator sineGenerator, IReadsService readsService)
        {
            _logger = logger;
            _sineGenerator = sineGenerator;
            _readsService = readsService;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var start = _sineGenerator.Start(stoppingToken);
            await foreach(var number in start)
            {
                _logger.LogInformation("Sine running at: {number}", number);
                await _readsService.ReportRead(DateTime.Now, number, FunctionType.Sine);
            }


        }
    }
}
