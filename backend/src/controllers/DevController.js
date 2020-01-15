/* O Controller tem 5 funções:
	Index, Show, Store, Update, Destroy -> Programador implementa !
*/
const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        //Buscar no github, consumindo a api dele
        //Corpo da requisição
        const { github_username, techs, latitude, longitude } = request.body;
        //yarn add axios
        //Antes de buscar na api do github, verificar se o dev já está cadastrado no mongoDB.
        //Consulta
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            //Cria 3 variáveis, e as preenche de acordo com a resposta do github.
            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = techs.split(',').map(tech => tech.trim());

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            /*Persistir as informações em um banco de dados -> MongoDB (Não Relacional)
	          Muito performático, banco hospedado na nuvem (MongoDB Atlas)
            */
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        };

        return response.json(dev);
    }
};