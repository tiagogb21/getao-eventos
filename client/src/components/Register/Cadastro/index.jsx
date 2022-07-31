import React, { useState } from 'react';

import axios from 'axios';

import { Container, GeneralInfo } from './styles';

function Cadastro({ setLogin }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const userData = {
        fullname: `${name} ${lastName}`.trim(),
        email: email.trim(),
        password: password.trim()
      };

      axios
        .post('https://localhost:3001/user', JSON.stringify(userData))
        .then((response) => {
          console.log(response);
          console.log(response.status);
        });
    } catch (error) {
      console.log('error = ' + JSON.stringify(error.response));
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <GeneralInfo>
          {/* Cadastro */}
          <h2>Cadastro</h2>
          {/* nome */}
          <input
            type="text"
            placeholder="Primeiro nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          {/* sobrenome */}
          <input
            type="text"
            placeholder="Sobrenome"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
          {/* e-mail */}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          {/* senha */}
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {/* Cadastro */}
          <p>
            Ao me cadastrar concordo com os <span>Termos de Uso</span>
          </p>
          <button type="submit">cadastrar</button>
        </GeneralInfo>
        <p>
          Já possui uma conta? <span onClick={() => setLogin(true)}>Faça Login</span>
        </p>
      </form>
    </Container>
  );
}

export default Cadastro;
