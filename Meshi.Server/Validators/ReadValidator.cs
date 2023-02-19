using FluentValidation;
using Meshi.Server.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meshi.Server.Validators
{
    public class ReadValidator : AbstractValidator<ReadDTO>
    {
        public ReadValidator()
        {
            RuleFor(r=>r.Timestamp).NotEmpty();
            RuleFor(r => r.Value).NotEmpty();

        }
    }
}
