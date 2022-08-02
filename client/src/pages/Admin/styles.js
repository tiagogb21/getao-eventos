import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    form {
      width: 60%;
      height: 70%;
      border: 1px solid black;
      border-radius: 10px;
    }
  }
`;
