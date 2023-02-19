using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Meshi.IOTDevice
{
    public class StateWorker : BackgroundService
    {
        private readonly ILogger<StateWorker> _logger;
        private readonly StateGenerator _stateGenerator;
        private readonly IReadsService _readsService;

        public StateWorker(ILogger<StateWorker> logger, StateGenerator stateGenerator, IReadsService readsService)
        {
            _logger = logger;
            _stateGenerator = stateGenerator;
            _readsService = readsService;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var start = _stateGenerator.Start(stoppingToken);
            await foreach (var number in start)
            {
                _logger.LogInformation("Sine running at: {number}", number);
                await _readsService.ReportRead(DateTime.Now, number, FunctionType.State);
            }
        }
    }
}
