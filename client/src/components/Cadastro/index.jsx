import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import { Container, GeneralInfo, VerifyBox } from './styles';

function Cadastro({ setLogin }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [verifyUserRegister, setVerifyUserRegister] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        // id: 2,
        full_name: `${name} ${lastName}`,
        user_email: email,
        user_password: password
      };

      let headers = {
        headers: {
          Accept: 'application/json'
        }
      };

      const isUserRegistered = users.data.find((user) => {
        return user.user_email === email;
      });

      !isUserRegistered
        ? Axios.post('http://localhost:8080/users', data, headers).then(
            (response) => response
          )
        : setVerifyUserRegister('E-mail já está cadastrado!');
    } catch (error) {
      console.log('error = ' + error);
      console.log(error.response.data.errors);
    }
  };

  useEffect(() => {
    Axios.get('http://localhost:8080/users').then((response) => setUsers(response));
  });

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
            required
          />
          {/* sobrenome */}
          <input
            type="text"
            placeholder="Sobrenome"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            required
          />
          {/* e-mail */}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          {/* senha */}
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
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
      {verifyUserRegister && (
        <VerifyBox>
          <p>{verifyUserRegister}</p>
          <article>
            <button className="btn-reg-bl" type="button" onClick={() => setLogin(true)}>
              Login
            </button>
            <button
              className="btn-reg-rd"
              type="button"
              onClick={() => setVerifyUserRegister(false)}
            >
              Fechar
            </button>
          </article>
        </VerifyBox>
      )}
    </Container>
  );
}

export default Cadastro;
