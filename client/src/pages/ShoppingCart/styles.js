import styled from 'styled-components';

import { BsFillCartXFill, BsCartCheck } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';

export const Container = styled.div`
  background: var(--wht-bg);
  @media (min-width: 768px) {
  }
`;

export const HeaderBox = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--prp-bg);
  color: white;
  padding: 0 20px;

  h2 {
    text-transform: uppercase;
  }
`;

export const SelectProducts = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  table {
    width: 90vw;
    border: 1px solid black;
  }

  th {
    color: var(--white);
    background: var(--prp-bg);
    width: 20%;
  }

  th,
  td {
    padding-top: 5px;
    height: 40px;
    text-align: center;
  }

  .btn-qty {
    background: var(--gr-font);
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: var(--white);
    font-weight: bolder;
    font-size: 15px;
  }

  .dlt-btn {
    padding: 7px;
    border: none;
    border-radius: 5px;
    background: var(--br-red);
    color: var(--white);
  }

  p {
    color: var(--prp-btn);
    border: 3px solid var(--prp-btn);
    padding: 20px;
    border-radius: 10px;
    font-weight: bolder;
  }
`;

export const BoxBtnCart = styled.div`
  display: flex;
  width: 60vw;
  justify-content: space-around;
`;

export const BoxPostCart = styled.button`
  height: 10vh;
  border: none;
  width: 20vw;
  color: white;
  background: green;
  border-radius: 6px;
  font-size: 20px;
`;

export const BoxEmptyCart = styled.button`
  height: 10vh;
  border: none;
  width: 20vw;
  color: white;
  background: red;
  border-radius: 6px;
  font-size: 20px;
`;

export const ClosePage = styled(RiCloseCircleLine)`
  width: 30px;
  height: 30px;
  color: var(--white);

  &:hover {
    background: red;
    border-radius: 50%;
  }
`;

export const ConfirmBtn = styled(BsCartCheck)`
  margin-left: 10px;
`;

export const DeleteBtn = styled(MdDelete)``;

export const EmptyCart = styled(BsFillCartXFill)`
  margin-left: 10px;
`;
