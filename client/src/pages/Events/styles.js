import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: bolder;
    margin-top: 50px;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    border: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    height: 900px;
  }
`;

export const BoxEvent = styled.div`
  width: 70%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  -moz-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  margin: 50px 0;
  padding: 20px;

  img {
    width: 60%;
    border-radius: 20px;
    margin: 30px 0;
  }

  p {
    font-size: 20px;
  }

  p > span {
    font-weight: bolder;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid var(--gr-font);
    border-radius: 10px;
    background: var(--gr-bg);
    z-index: 1;
    color: var(--prp-btn);
  }

  @media (min-width: 768px) {
    width: 300px;
  }
`;
