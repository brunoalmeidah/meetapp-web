import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 900px;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  &:hover {
    opacity: 0.7;
  }
  label {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.3);
      svg {
        width: 50px;
        height: 50px;
      }
    }

    img {
      height: 100%;
      width: 100%;
    }
    input {
      display: none;
    }
  }
`;
