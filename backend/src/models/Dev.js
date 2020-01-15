//Lembrar sempre de "chamar"
const moongose = require('mongoose');

//Schema do model "acessível" ao mongoDB

const DevSchema = new moongose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});

//Exportarr

module.exports = moongose.model('Dev', DevSchema);