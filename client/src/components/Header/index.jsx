import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Head } from './styles';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      {/* Logo */}
      <Head>
        <h2>
          <span className="G">G</span>
          <span className="E">E</span>
          Eventos
        </h2>
        <button type="button" onClick={() => handleClick()}>
          Login
        </button>
      </Head>
      {/* Input */}
      <label htmlFor="">
        <input type="text" placeholder="Pesquise um evento" />
      </label>
      {/* Indicação */}

      {/* Login */}
    </Container>
  );
}

export default Header;
