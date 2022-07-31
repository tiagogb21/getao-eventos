import React from 'react'

import { Container, GeneralInfo } from './styles'

function Login({ setLogin }) {
  return (
    <Container>
      <GeneralInfo>
        {/* Login */}
        <h2>Login</h2>
        {/* Email */}
        <input type="email" id="input-email" placeholder="E-mail" />
        {/* Password */}
        <input type="password" id="input-password" placeholder="Senha" />
        {/* Conectar */}
        <label htmlFor="input-connect">
          <input type="checkbox" id="input-connect" />
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
