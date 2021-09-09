import { useState } from 'react';

import kelvinCosta from './assets/kelvin-costa.png';

function Card({ foto, nome, insta, seguidores, seguindo }) {
  return (
    <div className="card">
      <img className="card__foto" src={foto} alt="Foto de perfil" />
      <h1 className="card__nome">{nome}</h1>
      <span className="card__insta">{insta}</span>
      <span className="card__seguidores">{seguidores} seguidores</span>
      <span className="card__seguindo">{seguindo} seguindo</span>
    </div>
  );
}

function App() {
  const [seguidores, setSeguidores] = useState(140);
  const [btnSeguir, setBtnSeguir] = useState('btn-seguir--seguir');
  const [textoBtn, setTextoBtn] = useState('Seguir');

  function seguir() {
    const estaSeguindo = btnSeguir === 'btn-seguir--seguir' ? 'btn-seguir--seguindo' : 'btn-seguir--seguir';
    const texto = textoBtn === 'Seguir' ? 'Seguindo' : 'Seguir';
    const numSeguidores = texto === 'Seguindo' ? seguidores + 1 : seguidores - 1;

    setBtnSeguir(estaSeguindo);
    setTextoBtn(texto);
    setSeguidores(numSeguidores);
  }

  const usuario = {
    foto: kelvinCosta,
    nome: 'Kelvin Costa',
    insta: '@costa',
    seguidores: seguidores,
    seguindo: 207
  };

  return (
    <div className="App">
      <Card
        foto={usuario.foto}
        nome={usuario.nome}
        insta={usuario.insta}
        seguidores={usuario.seguidores}
        seguindo={usuario.seguindo}
      />
      <button className={`btn-seguir ${btnSeguir}`} onClick={seguir}>{textoBtn}</button>
    </div>
  );
}

export default App;
