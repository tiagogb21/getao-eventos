import React, { useContext } from 'react';
import MyContext from '../../MyContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, BoxEvent, BoxContainer } from './styles';
import { useNavigate } from 'react-router-dom';

function Eventos() {
  const { event, eventsInfo, setEventTarget } = useContext(MyContext);

  const navigate = useNavigate();

  const handleClick = (nome) => {
    navigate(`/events/details/${nome}`);
  };

  return (
    <Container>
      <Header />
      <h1>{event}</h1>
      <BoxContainer>
        {eventsInfo !== undefined &&
          eventsInfo.map((evt) => (
            <BoxEvent onClick={() => handleClick(evt.nome)}>
              <button type="button" onClick={() => setEventTarget(evt)}>
                <p>
                  <span>{evt.nome}</span>
                </p>
                <img src={evt.imagem} alt={evt.tipo} />
              </button>
            </BoxEvent>
          ))}
      </BoxContainer>
      <Footer />
    </Container>
  );
}

export default Eventos;
