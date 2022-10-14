using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoIntegrador.Models
{
    public class Listapedidos
    {
        private static List<Carrinhodecompras> produtos = new List<Carrinhodecompras>();

        public void Contar(){

                
        }

        public void Esvaziar(){

                
        }
        public List<Carrinhodecompras> Listar(){


            return produtos;
        }
    }
}