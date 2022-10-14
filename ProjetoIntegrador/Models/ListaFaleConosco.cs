using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySqlConnector;

namespace ProjetoIntegrador.Models
{
    public class ListaFaleConosco
    {
        


        public void Adicionar(Faleconosco fale){

                
            string endereco = "Database=ProjetoIntegrador;Data Source = localhost;User Id =root";

            MySqlConnection conexao = new MySqlConnection(endereco);

            conexao.Open();

            string fale2 = "Insert into FaleConosco(nome,email,menssagem)"+ " values('" + fale.nome + "','" + fale.email + "', '" + fale.mensagem +"' )";
            MySqlCommand comando = new MySqlCommand(fale2, conexao);
            comando.ExecuteNonQuery();
            conexao.Close();
            
        } 

        public List<Faleconosco>  Mensagensrecebidas() {

            string endereco = "Database=ProjetoIntegrador;Data source=localhost;User Id=root";
            
            MySqlConnection conexao = new MySqlConnection(endereco);
            
            conexao.Open();

            string message = "Select * from FaleConosco";
            
            MySqlCommand comando = new MySqlCommand(message, conexao);

            MySqlDataReader resultado = comando.ExecuteReader();

            List<Faleconosco>  aviso =   new  List<Faleconosco>();

            while(resultado.Read()){

                Faleconosco item = new Faleconosco();   
                item.ID = resultado.GetInt32("id");
                item.nome = resultado.GetString("nome");
                item.email = resultado.GetString("email");
                item.mensagem = resultado.GetString("menssagem");
                aviso.Add(item);
            }

            resultado.Close();
            conexao.Close();
            return aviso;
         }

    }
}