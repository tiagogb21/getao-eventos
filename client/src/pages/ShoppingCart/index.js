import React from 'react';

import { Link } from 'react-router-dom';

import {
  ClosePage,
  HeaderBox,
  Container,
  DeleteBtn,
  SelectProducts,
  BoxEmptyCart,
  EmptyCart,
} from './styles';

function ShoppingCart() {
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>1</td>
              <td className="dlt-btn"><DeleteBtn /> delete</td>
            </tr>
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
