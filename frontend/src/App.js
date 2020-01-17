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
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

 
  // Busca dos Devs deve acontecer apenas uma vez no ciclo de renderização da página

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  // Função que será disparada quando o usuário clicar no submit do formulário.
  // EVENTO ---> e
  // submit do formulário tem o comportamento padrão de enviar o usuário para outra tela.
  // Evitar isso na função que "salva" o formulário
  async function handleAddDev(data) {
    //e.preventDefault();
    // Fazer a primeira chamada a API para adicionar o DEV a listagem.
    const response = await api.post('/devs', data)

    //setLatitude('');
    //setLongitude('');
    // É assim que se adiciona um novo usuário ao array com react, imutabilidade.
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
