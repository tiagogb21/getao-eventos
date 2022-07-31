import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  padding: 30px 0;

  @media (min-width: 768px) {
    width: 50vw;
    height: 80vh;
    border: 1px solid black;
  }
`
export const BoxButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > button {
    width: 40%;
    background: var(--bl-btn);
    border: none;
    border-radius: 6px;
    color: var(--gr-font);
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
`
