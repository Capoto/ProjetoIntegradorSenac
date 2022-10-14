using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetoIntegrador.Models;

namespace ProjetoIntegrador.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

         public IActionResult Pavao()
        {
            return View();
        }


        public IActionResult Ganso()
        {
            return View();
        }

        public IActionResult Garnize()
        {
            return View();
        }

        public IActionResult FaleConosco()
        {
            return View();
        }

        public IActionResult Confirmamessage()
        {
            return View();
        }

        public IActionResult Message()
        {
            List<Faleconosco> x =  Dados.Mensagem.Mensagensrecebidas();
            return View(x);
        }



        [HttpPost]
        public IActionResult FaleConosco(Faleconosco messg)
        {
            Dados.Mensagem.Adicionar(messg);
            return View("Confirmamessage");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
