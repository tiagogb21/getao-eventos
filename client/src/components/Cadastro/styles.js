import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    font-weight: bolder;
  }

  span: hover {
    cursor: pointer;
  }

  > p {
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 50vw;
    height: 60vh;
  }
`;

export const GeneralInfo = styled.div`
  height: 70vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 4vh;
    font-weight: bolder;
  }

  > input {
    width: 100%;
    height: 5vh;
    border: none;
    background: var(--gr-bg);
    padding-left: 20px;
  }

  > button {
    width: 100%;
    border: none;
    border-radius: 6px;
    background: var(--prp-btn);
    opacity: 0.7;
    color: var(--white);
    padding: 10px;
  }

  > button:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 45vw;
    height: 50vh;
  }
`;

export const VerifyBox = styled.div`
  width: 270px;
  height: 150px;
  position: absolute;
  background: var(--white);
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  padding: 30px;

  article {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }

  button {
    width: 80px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: var(--white);
    font-weight: bolder;
  }

  .btn-reg-bl {
    background: blue;
  }

  .btn-reg-rd {
    background: red;
  }

  button:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 450px;
  }
`;
