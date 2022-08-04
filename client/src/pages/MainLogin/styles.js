import styled from 'styled-components';
import city from '../../assets/city.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(145deg, var(--prp-btn), blue);
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  padding: 30px 0;
  background: #f5f5f5;

  @media (min-width: 768px) {
    width: 50vw;
    height: 80vh;
    border: 1px solid black;
  }
`;
export const BoxButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > button {
    width: 40%;
    background: var(--bl-btn);
    border: none;
    border-radius: 6px;
    color: var(--white);
    padding: 10px;
    font-weight: bolder;
  }

  >button: hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    > button {
      opacity: 0.7;
    }

    >button: hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
