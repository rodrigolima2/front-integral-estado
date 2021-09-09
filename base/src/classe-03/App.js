import { useState } from 'react';

import hamburguer from './assets/hamburguer.png';

function Card({ foto, nome, descricao }) {
  const [qtd, setQtd] = useState(0);

  function remover() {
    if (qtd <= 0) {
      return;
    }

    setQtd(qtd - 1);
  }

  function adicionar() {
    setQtd(qtd + 1);
  }

  return (
    <div className="card">
      <img className="card__img" src={foto} alt="Imagem" />
      <h1 className="card__nome-lanche">{nome}</h1>
      <p className="card__descricao-lanche">{descricao}</p>
      <div className="card__qtd-lanches">
        <button className="card__btn-menos" onClick={remover}>-</button>
        <h2 className="card__qtd">{qtd}</h2>
        <button className="card__btn-mais" onClick={adicionar}>+</button>
      </div>
    </div>
  );
}

function App() {
  const lanche = {
    foto: hamburguer,
    nome: 'Hamburguer',
    descricao: 'Arcu, sagittis, ut lectus congue dapibus semper odio a, lobortis. '
  };

  return (
    <div className="App">
      <Card foto={lanche.foto} nome={lanche.nome} descricao={lanche.descricao} />
    </div>
  );
}

export default App;
