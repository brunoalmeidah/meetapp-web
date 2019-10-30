import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 25px auto;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
    color: #fff;
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 172px;
    height: 42px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    background: #f94d6a;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    span {
      font-weight: bold;
      font-size: 16px;
    }

    &:hover {
      background: ${darken(0.05, '#F94D6A')};
    }
  }
`;

export const MeetupList = styled.ul`
  margin-top: 50px;
  li {
    & + li {
      margin-top: 10px;
    }
    button {
      display: flex;
      border: 0;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
      padding: 20px;
      border-radius: 4px;
      width: 100%;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }
      strong {
        font-size: 18px;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 25px;
        }

        span {
          font-size: 16px;
          margin-right: 30px;
          color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
`;
