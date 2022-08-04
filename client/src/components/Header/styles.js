import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Container = styled.div`
  height: 200px;
  width: 100vw;
  background: var(--prp-bg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  input {
    width: 80vw;
    padding: 10px;
    background: var(--wht-bg);
    border: none;
    border-radius: 5px;
  }

  input::placeholder {
    color: var(--gr-font);
  }

  article {
    width: 34%;
    display: flex;
  }

  .btn-cart {
    background: inherit;
    border: none;
    color: var(--white);
  }

  .btn-cart:hover {
    cursor: pointer;
  }

  .btn-cart > span {
    display: inline-block;
    height: 15px;
    width: 15px;
    background: var(--white);
    border-radius: 50%;
    color: var(--prp-bg);
    position: relative;
    bottom: 38px;
    left: 10px;
  }

  @media (min-width: 768px) {
    padding-top: 45px;

    height: 150px;

    input {
      width: 40vw;
      position: relative;
      bottom: 50px;
      left: -20px;
    }

    article {
      justify-content: flex-end;
    }

    .btn-cart > span {
      bottom: 23px;
      left: -10px;
    }
  }
`;

export const Head = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  .G {
    color: red;
    font-weight: bolder;
  }

  .E {
    color: green;
    font-weight: bolder;
  }

  > h2 {
    font-weight: bolder;
    font-size: 25px;
  }

  button {
    width: 150px;
    border: none;
    background: var(--white);
    color: var(--prp-btn);
    opacity: 0.7;
    border-radius: 5px;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 93vw;

    h2 {
      font-size: 35px;
    }

    input {
      width: 50vw;
    }

    button {
      width: 100px;
    }
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  width: 30px;
  height: 30px;
`;
