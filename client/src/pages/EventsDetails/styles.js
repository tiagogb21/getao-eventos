import styled from 'styled-components';

export const Container = styled.div`
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    height: 650px;
  }
`;

export const EventTargetBox = styled.div`
  height: 545px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
    width: 240px;
    border-radius: 20px;
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    -moz-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
  }

  article {
    width: 90%;
    height: 150px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    -moz-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
  }

  h3 {
    font-size: 24px;
    font-weight: bolder;
  }

  span {
    font-weight: bolder;
    text-transform: capitalize;
  }

  button {
    height: 30px;
    width: 100px;
    border: none;
    border-radius: 6px;
    background: var(--prp-btn);
    color: var(--white);
    opacity: 0.7;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: 768px) {
    height: 450px;
    flex-direction: row;

    article {
      height: 250px;
    }

    article {
      width: 50%;
    }

    img {
      width: 30%;
    }
  }
`;
