/* ---> Dúvidas? Olhe a documentação [https://expressjs.com/pt-br/api.html#app]*/
const { Router } = require('express');
const routes = Router();

//Verbos utilizados (Métodos HTTP) -> Get, Post, Put e Delete

//Primeira rota da aplicação, "Default", retorna um objeto com uma mensagem.
//Resposta dada pela função, o segundo parâmetro do método get da aplicação (promisse).

/*Anotações do instrutor: 
	Tipos de parâmetros
	Query Params: 99% utilizados no método GET (request.query), ex.: Filtros, Ordenação, Paginação, ...)
	Route Params: (request.params) (Identificar um recurso na alteração ou remoção)
	Body Params: (request.body) Escrever com a estrutura, JSON, (Dados para criação ou alteração de um registro)	
	Falar para o express que estamos trabalhando com JSON -> app.use(express.json());
*/

routes.post('/devs', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World !' });
});

//Exportar as rotas para que fiquem visiveis ao arquivo principal da aplicação
module.exports = routes;
