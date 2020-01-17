// ** Ver PWA
//3 Conceitos que montam tudo no React
/*
	Componente: Função que retorna algum conteúdo HTML;
		-> Pedaços isolados, {HTML CSS E JS}.
		-> E que não vão afetar outros componentes.
		-> Primeira letra sempre maiúscula.
		-> Criar um componente por arquivo !!
		-> Importar / Exportar.
	-> Bloco isolado de HTML, CSS e JS, o qual não interere no restante da aplicação.

	Estado: Informação que o componente vai manipular.
	-> Informações mantidas pelo componente (Lembrar: imutabilidade)

	Propriedade: "Atributos no HTML, ex id="" "; Passar uma propriedade para o componente.
	-> Informações que um componente PAI passa para o componente filho.
		-> Chamar JS no HTML, entre chaves { }.
		-> Container, no lugar de DIV, para não quebrar o estilo, utilizar <> </> "Fragment".
*/
import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  //Manter acesso real ao que o usuário digitou no input

  const [counter, setCounter] = useState(0);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');


  function increment() {
    setCounter(counter + 1);
  }

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

  // Função que será disparada quando o usuário clicar no submit do formulário.
  // EVENTO ---> e
  // submit do formulário tem o comportamento padrão de enviar o usuário para outra tela.
  // Evitar isso na função que "salva" o formulário
  async function handleAddDev(e){
    e.preventDefault();
    // Fazer a primeira chamada a API para adicionar o DEV a listagem.
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
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
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20630700?s=460&v=4" alt="João Nascimento" />
              <div className="user-info">
                <strong>João Felipe</strong>
                <span>Spring Framework, HTML, CSS e JS</span>
              </div>
            </header>
            <p>Analista de Suporte, apaixonado por infraestrutura</p>
            <a href="https://github.com/thecurrentuser">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20630700?s=460&v=4" alt="João Nascimento" />
              <div className="user-info">
                <strong>João Felipe</strong>
                <span>Spring Framework, HTML, CSS e JS</span>
              </div>
            </header>
            <p>Analista de Suporte, apaixonado por infraestrutura</p>
            <a href="https://github.com/thecurrentuser">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20630700?s=460&v=4" alt="João Nascimento" />
              <div className="user-info">
                <strong>João Felipe</strong>
                <span>Spring Framework, HTML, CSS e JS</span>
              </div>
            </header>
            <p>Analista de Suporte, apaixonado por infraestrutura</p>
            <a href="https://github.com/thecurrentuser">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/20630700?s=460&v=4" alt="João Nascimento" />
              <div className="user-info">
                <strong>João Felipe</strong>
                <span>Spring Framework, HTML, CSS e JS</span>
              </div>
            </header>
            <p>Analista de Suporte, apaixonado por infraestrutura</p>
            <a href="https://github.com/thecurrentuser">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
