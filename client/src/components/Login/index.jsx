import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { Container, GeneralInfo } from './styles';

function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (a) => {
    if (a.target.checked) {
      localStorage.setItem('email', email);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('a');

    try {
      let headers = {
        headers: {
          Accept: 'application/json'
        }
      };

      Axios.get('http://localhost:8080/users', headers).then((response) =>
        console.log(response)
      );
    } catch (error) {
      console.log('error = ' + error);
      console.log(error.response.data.errors);
    }
  };

  useEffect(() => {
    const verifyEmailInLocal = localStorage.getItem('email');
    if (verifyEmailInLocal) return setEmail(verifyEmailInLocal);
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <GeneralInfo>
          {/* Login */}
          <h2>Login</h2>
          {/* Email */}
          <input
            type="email"
            id="input-email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          {/* Password */}
          <input
            type="password"
            id="input-password"
            placeholder="Senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {/* Conectar */}
          <label htmlFor="input-connect">
            <input type="checkbox" id="input-connect" onClick={(e) => handleClick(e)} />
            Manenha-me conectado
          </label>
          {/* Login */}
          <button type="submit">Login</button>
        </GeneralInfo>
        <p>
          Não possui uma conta? <span onClick={() => setLogin(false)}>Cadastre-se</span>
        </p>
      </form>
    </Container>
  );
}

export default Login;
