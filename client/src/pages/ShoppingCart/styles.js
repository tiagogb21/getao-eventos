import styled from 'styled-components';

import { BsFillCartXFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  > th, td {
    text-align: center;
  }

  > tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  > tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #04AA6D;
    color: white;
  }

  .dlt-btn {
    background: green;
    color: white;
    width: 20%;
  }

  .dlt-btn:hover {
    background: red;
  }
`;

export const BoxEmptyCart = styled.div`
  display: flex;
  width: 40%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 6px;

  justify-content: space-between;

  &:hover {
    cursor: pointer;
    color: white;
    background: red;
    border: 1px solid white;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const ClosePage = styled(RiCloseCircleLine)`
  width: 30px;
  height: 30px;
`;

export const DeleteBtn = styled(MdDelete)``;

export const EmptyCart = styled(BsFillCartXFill)``;
