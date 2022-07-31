import React, { useState } from 'react'

import { Container, BoxButton } from './styles'

import Cadastro from './Cadastro'
import Login from './Login'

function Register() {
  const [login, setLogin] = useState(true)
  return (
    <Container>
      <BoxButton>
        <button type="button" onClick={() => setLogin(true)}>
          Login
        </button>

        <button type="button" onClick={() => setLogin(false)}>
          Cadastro
        </button>
      </BoxButton>
      <div>{login ? <Login setLogin={setLogin} /> : <Cadastro setLogin={setLogin} />}</div>
    </Container>
  )
}

export default Register
