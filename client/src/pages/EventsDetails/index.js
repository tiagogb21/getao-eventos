import React, { useState, useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../MyContext';

import { Container, EventTargetBox } from './styles';

function EventsDetails() {
  const { eventTarget, shoppingCart, setShoppingCart } = useContext(MyContext);
  const [target, setTarget] = useState([]);

  useEffect(() => {
    const getDataFromLocal = JSON.parse(localStorage.getItem('eventTarget'));
    const targetVerify = eventTarget.length > 0 || getDataFromLocal;
    setTarget(targetVerify);
    console.log(shoppingCart);
  }, []);

  return (
    <Container>
      <Header />
      {target !== undefined && target !== null && (
        <EventTargetBox>
          <img src={target.imagem} alt="" />
          <article>
            <h3>{target.nome}</h3>
            <p>
              <span>cidade</span>: {target.cidade}
            </p>
            <p>
              <span>estado</span>: {target.estado}
            </p>
            <p>
              <span>preço</span>: R${' '}
              {(+target.preco).toFixed(2).toLocaleString('pt-BR', {
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
