import React, { useEffect } from 'react';
import { useState } from 'react';
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
  const { shoppingCart, setShoppingCart } = useContext(MyContext);

  const [total, setTotal] = useState(0);

  const increaseQuantity = (name) => {
    const newQuantity = shoppingCart.map((item) => {
      if (item.nome === name) {
        item.quantidade += 1;
      }
      return item;
    });
    calculateTotalPrice();
    return setShoppingCart(newQuantity);
  };

  const decreaseQuantity = (name) => {
    const newQuantity = shoppingCart.map((item) => {
      if (item.nome === name && item.quantidade >= 1) {
        item.quantidade -= 1;
      }
      return item;
    });
    calculateTotalPrice();
    return setShoppingCart(newQuantity);
  };

  const calculateTotalPrice = () => {
    const totalPrice = shoppingCart.reduce((acc, curr) => {
      acc += curr.preco * curr.quantidade;
      return acc;
    }, 0);
    return setTotal(totalPrice);
  };

  const deleteOne = (nome) => {
    const filterAndDelete = shoppingCart.filter((item) => item.nome !== nome);
    setShoppingCart(filterAndDelete);
    calculateTotalPrice();
    return;
  };

  useEffect(() => {
    calculateTotalPrice();
  }, []);

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
                  <td>
                    <button onClick={() => decreaseQuantity(item.nome)}>-</button>
                    {item.quantidade}
                    <button onClick={() => increaseQuantity(item.nome)}>+</button>
                  </td>
                  <td className="dlt-btn">
                    <button type="button" onClick={() => deleteOne(item.nome)}>
                      <DeleteBtn /> delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Total */}
        <p>Total: {total}</p>
        {/* Limpar Carrinho */}
        <BoxEmptyCart
          type="button"
          onClick={() => {
            setTotal(0);
            setShoppingCart([]);
          }}
        >
          Limpar Carrinho
          <EmptyCart />
        </BoxEmptyCart>
      </SelectProducts>
      {/* Finalizar Compra */}
    </Container>
  );
}

export default ShoppingCart;
