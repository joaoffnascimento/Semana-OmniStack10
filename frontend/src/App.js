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
import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
