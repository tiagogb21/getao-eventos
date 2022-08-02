import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dest-ttl {
    font-size: 25px;
    font-weight: bolder;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .dest-ttl {
      margin-top: 20px;
      font-size: 50px;
    }
  }
`;

export const Destaque = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 400px;
  }
`;

export const BoxEv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  > img {
    width: 150px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  p {
    font-weight: bolder;
    text-transform: uppercase;
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
    img {
      width: 300px;
    }
  }
`;
