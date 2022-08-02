import React from 'react';

import { Container, Destaque, BoxEv } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import seminario from '../../assets/seminario.jpg';
import palestra from '../../assets/palestra.jpg';
import curso from '../../assets/curso.jpg';

const imagemEventos = [
  {
    id: 1,
    name: 'seminario',
    img: seminario
  },
  {
    id: 2,
    name: 'palestra',
    img: palestra
  },
  {
    id: 3,
    name: 'curso',
    img: curso
  }
];

function Home() {
  return (
    <Container>
      {/* Onde deseja buscar por eventos */}
      <Header />
      {/* Eventos em destaque */}
      <h2 className="dest-ttl">Destaque</h2>
      <Destaque>
        {imagemEventos.map((evento) => (
          <BoxEv key={evento.id}>
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
