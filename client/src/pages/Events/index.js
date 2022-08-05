import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../MyContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, BoxEvent, BoxContainer } from './styles';
import { useNavigate } from 'react-router-dom';

function Eventos() {
  const { event, eventsInfo, setEventsInfoStore, setEventTarget } = useContext(MyContext);
  const [a, setA] = useState([]);

  const navigate = useNavigate();

  const handleClick = (nome) => {
    navigate(`/events/details/${nome}`);
  };

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('eventos'));
    setEventsInfoStore(events);
    const verifyInfo = eventsInfo.length > 0 ? eventsInfo : events;
    setA(verifyInfo);
  }, [eventsInfo]);

  return (
    <Container>
      <Header />
      <h1>{event}</h1>
      <BoxContainer>
        {a !== undefined &&
          a.map((evt) => (
            <BoxEvent key={evt.id} onClick={() => handleClick(evt.nome)}>
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
