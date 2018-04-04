using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        [HttpGet("[action]/{refName}")]
        public IEnumerable<BlogPost> Article(string refName)
        {
            List<BlogPost> ls = new List<BlogPost>();

            if (refName == "test")
            {
                ls.Add(new BlogPost() { Id = 1, Title = "Test blog 1", Body = "This is the body", Published = DateTime.Now });
            }
            else
            {
                ls.Add(new BlogPost() { Id = 2, Title = "Test blog 2", Body = "This is the body 2", Published = DateTime.Now });
            }

            return ls;
        }

        public class BlogPost
        {
            public string Title { get; set; }
            public string Body { get; set; }
            public DateTime Published { get; set; }
            public int Id { get; set; }
        }
    }
}