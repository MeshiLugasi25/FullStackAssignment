using System;
using System.Runtime.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Meshi.Server.Controllers
{
    [Serializable]
    internal class ValidationException : Exception
    {
        private FluentValidation.Results.ValidationResult validationResult;

        public ValidationException()
        {
        }

        public ValidationException(FluentValidation.Results.ValidationResult validationResult)
        {
            this.validationResult = validationResult;
        }

        public ValidationException(string message) : base(message)
        {
        }

        public ValidationException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected ValidationException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
