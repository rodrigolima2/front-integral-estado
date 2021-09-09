import { useState } from 'react';

import close from './assets/close.svg';
import cookie from './assets/cookie.svg';

function Card(props) {
  const [hidden, setHidden] = useState('');

  function fechar() {
    setHidden('hidden');
  }

  return (
    <div className={`card ${hidden}`}>
      <img className="card__close" src={close} alt="fechar" onClick={fechar} />
      <img className="card__img" src={cookie} alt="cookie" />
      <p className="card__text">{props.texto}</p>
      <button className="card__btn" onClick={fechar}>{props.children}</button>
    </div>
  );
}

function App() {
  const cardTexto = 'Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.';

  return (
    <div className="App">
      <Card texto={cardTexto}>Tudo Bem!</Card>
    </div>
  );
}

export default App;
