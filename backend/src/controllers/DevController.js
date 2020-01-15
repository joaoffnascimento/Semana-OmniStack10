const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
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