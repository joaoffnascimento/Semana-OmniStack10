import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
    //Manter acesso real ao que o usuário digitou no input

    //const [counter, setCounter] = useState(0);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGitHubUsername] = useState('');
    const [techs, setTechs] = useState('');

    /* 
    O que eu vou fazer para controlar quando a função irá executar?

	React oferece uma função chamada useEffect, ele serve para dispararmos uma função toda vez que uma informação alterar, ou uma única vez durante a renderizaçao do componente.
	Ele recebe dois parâmetros; Qual função e quando.
	useEffect(() => {} ,[]);
    Se o vetor estiver vazio vai executar apenas uma vez.
    --> Dependências do useEffect.
	navigator.geolocation.getCurrentPosition();
  */

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            //Retorna a posição do usuário, se deu tudo certo.
            (position) => {
                const { latitude, longitude } = position.coords;
                // React segue um padrão de programação imperativa.
                // Criar um estado e o componente precisa saber se comportar com base nesse estado.
                setLatitude(latitude);
                setLongitude(longitude);
            },
            //Caso aconteça algum erro, chamar essa função.
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        //Limpar os campos do formulário após o cadastro.
        setGitHubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    name="github_username"
                    id="github_username"
                    value={github_username}
                    required
                    onChange={e => setGitHubUsername(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    value={techs}
                    required
                    onChange={e => setTechs(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        /*Armazernar o valor de um input dentro de um valor estado*/
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;