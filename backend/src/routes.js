/* ---> Dúvidas? Olhe a documentação [https://expressjs.com/pt-br/api.html#app]*/
const { Router } = require('express');
const routes = Router();
const axios = require('axios');
const Dev = require('./models/Dev');

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

routes.post('/devs', async (request, response) => {
    //Buscar no github, consumindo a api dele
    //Corpo da requisição
    const { github_username, techs, latitude, longitude } = request.body;
    //yarn add axios
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    //Cria 3 variáveis, e as preenche de acordo com a resposta do github.
    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });
    return response.json(dev);
});

//Exportar as rotas para que fiquem visiveis ao arquivo principal da aplicação
module.exports = routes;
