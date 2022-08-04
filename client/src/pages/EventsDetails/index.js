import React, { useContext } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../MyContext';

import { Container, EventTargetBox } from './styles';

function EventsDetails() {
  const { eventTarget, setShoppingCart } = useContext(MyContext);

  return (
    <Container>
      <Header />
      {eventTarget !== undefined && (
        <EventTargetBox>
          <img src={eventTarget.imagem} alt="" />
          <article>
            <h3>{eventTarget.nome}</h3>
            <p>
              <span>cidade</span>: {eventTarget.cidade}
            </p>
            <p>
              <span>estado</span>: {eventTarget.estado}
            </p>
            <p>
              <span>preço</span>: R${' '}
              {(+eventTarget.preco).toFixed(2).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </p>
            <button
              type="button"
              onClick={() => {
                setShoppingCart((prevState) => {
                  let t1 = prevState.find((i) => i.nome === eventTarget.nome);
                  if (!t1) {
                    prevState.push({
                      nome: eventTarget.nome,
                      preco: eventTarget.preco,
                      quantidade: 1
                    });
                  } else {
                    prevState = prevState.reduce((acc, curr) => {
                      if (curr.nome === eventTarget.nome) {
                        acc.push({
                          nome: eventTarget.nome,
                          preco: eventTarget.preco,
                          quantidade: curr.quantidade + 1
                        });
                      } else {
                        acc.push(curr);
                      }
                      return acc;
                    }, []);
                  }
                  console.log(prevState);
                  return prevState;
                });
              }}
            >
              Comprar
            </button>
          </article>
        </EventTargetBox>
      )}
      <Footer />
    </Container>
  );
}

export default EventsDetails;
