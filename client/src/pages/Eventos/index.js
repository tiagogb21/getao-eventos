import React, { useContext } from 'react';
import MyContext from '../../MyContext';

import { Container } from './styles';

function Eventos() {
  const { event } = useContext(MyContext);
  return (
    <Container>
      <h1>{event}</h1>
    </Container>
  );
}

export default Eventos;
