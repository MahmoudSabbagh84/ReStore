using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("bad-request")]
        public ActionResult GetBadRequest(){
            return BadRequest("This is a bad request.");
        }
        [HttpGet("not-found")]
        public ActionResult GetNotFound(){
            return NotFound();
        }
        [HttpGet("unauthorized")]
        public ActionResult GetUnuthorized(){
            return Unauthorized();
        }
        [HttpGet("validation-error")]
        public ActionResult GetValidationError(){
            ModelState.AddModelError("Problem 1" , "This is the first error");
            ModelState.AddModelError("Problem 2" , "This is the second error");
            return ValidationProblem();
        }
        [HttpGet("server-error")]
        public ActionResult GetServerError(){
            throw new Exception("This is a server error");
        }
        
    }
}