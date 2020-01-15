const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        //Busca
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        //Buscar Devs com filtros

        const devs = await Dev.find({
            //LEIA A DOCUMENTAÇÃO https://docs.mongodb.com/manual/reference/operator/
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        return response.json({ devs });
    }
};