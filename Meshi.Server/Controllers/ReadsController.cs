using AutoMapper;
using Meshi.Server.Core;
using Meshi.Server.Data;
using Meshi.Server.DTOs;
using Meshi.Server.Validators;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Meshi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReadsController : ControllerBase
    {
        private readonly ReadValidator _readValidator;
        private readonly IReadsRepository _readsRepository;
        private readonly IMapper _mapper;

        public ReadsController(ReadValidator readValidator, IReadsRepository readsRepository, IMapper mapper)
        {
            _readValidator = readValidator;
            _readsRepository = readsRepository;
            _mapper = mapper;
        }
        // GET: api/<ReadsController>
        [HttpGet]
        public async Task<IEnumerable<ReadDTO>> GetAsync()
        {
            var reads = await _readsRepository.Get();
            return _mapper.Map<IEnumerable<ReadDTO>>(reads);
        }

        // GET api/<ReadsController>/5
        [HttpGet("{id}")]
        public async Task<ReadDTO> GetAsync(string id)
        {
            var read = await _readsRepository.Get(id);
            return _mapper.Map<ReadDTO>(read);
        }

        // POST api/<ReadsController>
        [HttpPost]
        public async Task PostAsync([FromBody] ReadDTO read)
        {
            var validationResult =_readValidator.Validate(read);
            if(!validationResult.IsValid)
            {
                throw new ValidationException(validationResult);
            }
            Read r = new Read(read.Timestamp, read.Value, read.GetTypeCore());
            //WRITE TO DB (r)
            await _readsRepository.Add(r);
        }

     
   
    }
}
