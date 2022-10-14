using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoIntegrador.Models
{
    public class Dados
    {

        public static ListaFaleConosco Mensagem { get; set;}
        public static Listapedidos Carrinho {get;set;}
        
        static Dados()
        {
            Mensagem = new ListaFaleConosco();
            Carrinho = new Listapedidos();

        }   
        
    }
}