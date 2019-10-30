import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 25px auto;

  img {
    width: 900px;
    height: 300px;
    margin: 20px 0;
  }
  p {
    font-size: 18px;
    color: #fff;

    line-height: 30px;
  }
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const EditButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
  height: 42px;
  color: #fff;
  border: 0;
  border-radius: 4px;
  background: #4dbaf9;
  margin-right: 20px;
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
    background: ${darken(0.05, '#4DBAF9')};
  }
`;

export const CancelButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 42px;
  color: #fff;
  border: 0;
  border-radius: 4px;
  background: #d44059;
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
    background: ${darken(0.05, '#D44059')};
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.3);
  span {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 18px;
    svg {
      margin-right: 5px;
    }
  }
`;
