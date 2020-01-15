const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        //Busca
        console.log(request.query);

        return response.json({techs: []});
    }
};