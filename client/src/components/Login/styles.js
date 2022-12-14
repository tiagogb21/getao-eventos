import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    text-align: center;
  }

  .spn-cad {
    font-weight: bolder;
  }

  p .spn-cad:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 50vw;
    height: 60vh;
  }
`;

export const GeneralInfo = styled.div`
  height: 50vh;
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
    height: 40vh;
  }
`;
