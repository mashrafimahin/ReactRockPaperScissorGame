import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 2px 0 rgb(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const TitleText = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 28px;
`;

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  transition: 60ms ease-out;

  &:active {
    scale: ${(props) => (props ? props.activeStyle : 1)};
  }
`;

export const Button = styled.button`
  padding: 14px 40px;
  font-size: 18px;
  color: #fff;
  border: none;
  background: crimson;
  border-radius: 8px;
  box-shadow: 0 6px 2px 0 rgb(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 60ms ease-out;

  &:active {
    box-shadow: 0 2px 0 0 rgb(0, 0, 0, 0.2);
    transform: translateY(6px);
  }
`;
