import React, { useState } from 'react'

import { Container, BoxButton, Main } from './styles'

import Cadastro from '../../components/Cadastro'
import Login from '../../components/Login'

function MainLogin() {
  const [login, setLogin] = useState(true)
  return (
    <Container>
      <Main>
      <BoxButton>
        <button type="button" onClick={() => setLogin(true)}>
          Login
        </button>

        <button type="button" onClick={() => setLogin(false)}>
          Cadastro
        </button>
      </BoxButton>
      <div>{login ? <Login setLogin={setLogin} /> : <Cadastro setLogin={setLogin} />}</div>
      </Main>
    </Container>
  )
}

export default MainLogin;
