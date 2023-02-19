using System;
using System.Threading.Tasks;

namespace Meshi.IOTDevice
{
    public interface IReadsService
    {
        Task ReportRead(DateTime timeStamp, int value, FunctionType type);
    }
}