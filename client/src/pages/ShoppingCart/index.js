import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';

import {
  ClosePage,
  HeaderBox,
  Container,
  DeleteBtn,
  SelectProducts,
  BoxEmptyCart,
  BoxPostCart,
  EmptyCart,
  ConfirmBtn,
  BoxBtnCart
} from './styles';

function ShoppingCart() {
  const { shoppingCart, setShoppingCart } = useContext(MyContext);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

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
    return;
  };

  const addProductToBack = (e) => {
    e.preventDefault();
    try {
      let headers = {
        headers: {
          Accept: 'application/json'
        }
      };

      shoppingCart.map((item) =>
        Axios.post('http://localhost:8080/pagamentos', item, headers).then(
          (response) => response
        )
      );
    } catch (error) {
      console.log('error = ' + error);
      console.log(error.response.data.errors);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [shoppingCart]);

  useEffect(() => {
    shoppingCart.length > 0 && localStorage.setItem('cart', JSON.stringify(shoppingCart));
    const a =
      shoppingCart.length > 0
        ? shoppingCart
        : localStorage.getItem('cart') !== null
        ? JSON.parse(localStorage.getItem('cart'))
        : [];
    setShoppingCart(a);
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
              shoppingCart !== null &&
              shoppingCart.map((item) => (
                <tr>
                  <td>{item.nome}</td>
                  <td>
                    {(+item.preco).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </td>
                  <td>
                    <button className="btn-qty" onClick={() => decreaseQuantity(item.nome)}>
                      -
                    </button>
                    <span className="sp-qtd"> {item.quantidade} </span>
                    <button className="btn-qty" onClick={() => increaseQuantity(item.nome)}>
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      className="dlt-btn"
                      type="button"
                      onClick={() => deleteOne(item.nome)}
                    >
                      <DeleteBtn /> delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Total */}
        <p>
          Total:
          {` `}
          {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        {/* Limpar Carrinho */}
        <article>
          <BoxBtnCart>
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
            <BoxPostCart
              type="button"
              onClick={(e) => {
                addProductToBack(e);
                alert('Compra realizada com sucesso!');
                setTotal(0);
                setShoppingCart([]);
                localStorage.setItem('cart', JSON.stringify([]));
                navigate('/');
              }}
            >
              confirmar
              <ConfirmBtn />
            </BoxPostCart>
          </BoxBtnCart>
        </article>
      </SelectProducts>
      {/* Finalizar Compra */}
    </Container>
  );
}

export default ShoppingCart;
