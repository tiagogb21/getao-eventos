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

  .btn-cart {
    background: inherit;
    border: none;
    color: var(--white);
  }

  .btn-cart:hover {
    cursor: pointer;
  }

  .btn-cart > span {
    height: 20px;
    width: 20px;
    background: var(--white);
    border-radius: 50%;
    color: black;
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
    padding: 10px;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: 768px) {
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
