import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';

import { Container, Head, CartIcon } from './styles';

function Header() {
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState('');

  const handleClick = (path) => {
    navigate(path);
  };

  const { filterByEvents, shoppingCart } = useContext(MyContext);

  const handleChange = (value) => {
    setInputSearch(value);
    return filterByEvents(value);
  };

  useEffect(() => {
    handleChange(inputSearch);
  }, [inputSearch]);

  return (
    <Container>
      {/* Logo */}
      <Head>
        <h2 onClick={() => handleClick('/')}>
          <span className="G">G</span>
          <span className="E">E</span>
          Eventos
        </h2>
        <article>
          <button type="button" onClick={() => handleClick('/login')}>
            Login
          </button>
          <button className="btn-cart" type="button" onClick={() => handleClick('/cart')}>
            <CartIcon />
            <span>{shoppingCart.length}</span>
          </button>
        </article>
      </Head>
      {/* Input */}
      <label htmlFor="">
        <input
          type="text"
          placeholder="Pesquise um evento"
          value={inputSearch}
          onChange={({ target }) => {
            setInputSearch(target.value);
          }}
        />
      </label>
      {/* Indicação */}

      {/* Login */}
    </Container>
  );
}

export default Header;
