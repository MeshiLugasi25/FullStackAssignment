using AutoMapper;
using Meshi.Server.Core;
using Meshi.Server.DTOs;

namespace Meshi.Server.Mapping
{
    public class ReadMappingProfile : Profile
    {
        public ReadMappingProfile()
        {
            CreateMap<Read, ReadDTO>();
        }
    }
}
