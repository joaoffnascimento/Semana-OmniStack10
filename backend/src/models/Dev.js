//Lembrar sempre de "chamar"
const moongose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//Schema do model "acessível" ao mongoDB

const DevSchema = new moongose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location:{
        type: PointSchema,
        index: '2dsphere'
    }
});

//Exportarr

module.exports = moongose.model('Dev', DevSchema);