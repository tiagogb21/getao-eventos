import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import MyContext from '../../MyContext';

import {
  ClosePage,
  HeaderBox,
  Container,
  DeleteBtn,
  SelectProducts,
  BoxEmptyCart,
  EmptyCart
} from './styles';

function ShoppingCart() {
  const { shoppingCart } = useContext(MyContext);

  return (
    <Container>
      <HeaderBox>
        <h2>Carrinho de Compras</h2>
        <Link to="/">
          <ClosePage />
        </Link>
      </HeaderBox>
      <SelectProducts>
        {/* Produto */}
        {/* Quantidade */}
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart !== undefined &&
              shoppingCart.map((item) => (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.preco}</td>
                  <td>{item.quantidade}</td>
                  <td className="dlt-btn">
                    <DeleteBtn /> delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Total */}
        {/* Limpar Carrinho */}
        <BoxEmptyCart>
          Limpar Carrinho
          <EmptyCart />
        </BoxEmptyCart>
      </SelectProducts>
      {/* Finalizar Compra */}
    </Container>
  );
}

export default ShoppingCart;
