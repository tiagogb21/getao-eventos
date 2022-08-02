import styled from 'styled-components';

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
    background: var(--bl-btn);
    border: none;
    border-radius: 5px;
  }

  input::placeholder {
    color: var(--gr-font);
  }

  @media (min-width: 768px) {
    padding-top: 45px;

    height: 150px;

    input {
      width: 50vw;
      position: relative;
      bottom: 50px;
      left: 30px;
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
