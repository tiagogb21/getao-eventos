import styled from 'styled-components';

import { BsFillCartXFill, BsCartCheck } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';

export const Container = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  article {
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    article {
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

export const HeaderBox = styled.div`
  width: 100vw;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: purple;

  > h2 {
    font-size: 24px;
    font-weight: bolder;
    color: white;
  }

  > a {
    width: 50px;
    height: 50px;
    border: none;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
  }

  > a:hover {
    cursor: pointer;
    background: red;
  }
`;

export const SelectProducts = styled.div`
  width: 100vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;

  > table {
    width: 90%;
  }

  > th,
  td {
    text-align: center;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #04aa6d;
    color: white;
  }

  .dlt-btn {
    background: blue;
    color: white;
    width: 20%;
  }

  .dlt-btn > button {
    background: inherit;
    border: none;
  }

  .dlt-btn:hover {
    background: red;
  }

  .p-ttl {
    margin: 40px 0;
  }

  .sp-qtd {
    margin: 0 10px;
  }
`;

export const BoxPostCart = styled.button`
  width: 50%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 6px;
  text-transform: uppercase;
  background: green;
  color: var(--white);
  border: none;

  &:hover {
    cursor: pointer;
    color: white;
    background: green;
    border: 1px solid white;
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const BoxEmptyCart = styled.button`
  width: 50%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 6px;
  text-transform: uppercase;
  background: red;
  color: var(--white);
  border: none;

  justify-content: space-between;

  &:hover {
    cursor: pointer;
    color: white;
    background: red;
    border: 1px solid white;
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ClosePage = styled(RiCloseCircleLine)`
  width: 30px;
  height: 30px;
`;

export const ConfirmBtn = styled(BsCartCheck)`
  margin-left: 10px;
`;

export const DeleteBtn = styled(MdDelete)``;

export const EmptyCart = styled(BsFillCartXFill)`
  margin-left: 10px;
`;
