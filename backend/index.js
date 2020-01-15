//De onde será "chamada" a biblioteca express -< MiniFramework
//Leve e simples, a preparação do ambiente para desenvolvimento é descomplicada.

const express = require('express');

const app = express();

//Verbos utilizados -> Get, Post, Put e Delete

//Primeira rota da aplicação, "Default", retorna um objeto com uma mensagem.
//Resposta dada pela função, o segundo parâmetro do método get da aplicação (promisse).
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World !' });
});

app.listen(3333);