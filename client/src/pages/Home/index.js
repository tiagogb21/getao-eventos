import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../../MyContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Destaque, BoxEv } from './styles';

import seminario from '../../assets/seminario.jpg';
import palestra from '../../assets/palestra.jpg';
import curso from '../../assets/curso.jpg';

const imagemEventos = [
  {
    id: 1,
    name: 'Seminário',
    img: seminario
  },
  {
    id: 2,
    name: 'Palestra',
    img: palestra
  },
  {
    id: 3,
    name: 'Curso',
    img: curso
  }
];

function Home() {
  const { setEvent, getEventsInfo } = useContext(MyContext);

  const navigate = useNavigate();

  const handleClick = (name) => {
    setEvent(name);
    getEventsInfo(name);
    localStorage.setItem('evento', name);
    navigate(`/events/${name}`);
  };

  return (
    <Container>
      {/* Onde deseja buscar por eventos */}
      <Header />
      {/* Eventos em destaque */}
      <h2 className="dest-ttl">Eventos</h2>
      <Destaque>
        {imagemEventos.map((evento) => (
          <BoxEv key={evento.id} onClick={() => handleClick(evento.name)}>
            <img src={evento.img} alt={evento.name} />
            <p>{evento.name}</p>
          </BoxEv>
        ))}
      </Destaque>
      {/* Todos os eventos */}
      <Footer />
    </Container>
  );
}

export default Home;
