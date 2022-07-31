import React, { useEffect, useState } from 'react'

import { Container, GeneralInfo } from './styles'

function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (a) => {
    if(a.target.checked) {
      localStorage.setItem('email', email)
    }
  }

  useEffect(() => {
    const verifyEmailInLocal = localStorage.getItem('email');
    if(verifyEmailInLocal) return setEmail(verifyEmailInLocal)
  }, []);

  return (
    <Container>
      <GeneralInfo>
        {/* Login */}
        <h2>Login</h2>
        {/* Email */}
        <input
          type="email"
          id="input-email"
          placeholder="E-mail"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
        {/* Password */}
        <input
          type="password"
          id="input-password"
          placeholder="Senha"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        {/* Conectar */}
        <label htmlFor="input-connect">
          <input type="checkbox" id="input-connect" onClick={(e) => handleClick(e)}/>
          Manenha-me conectado
        </label>
        {/* Login */}
        <button type="button">Login</button>
      </GeneralInfo>
      <p>
        Não possui uma conta? <span onClick={() => setLogin(false)}>Cadastre-se</span>
      </p>
    </Container>
  )
}

export default Login
