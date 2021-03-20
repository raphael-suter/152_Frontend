import React from "react";
import { ArrowDown } from "react-bootstrap-icons";
import styled, { keyframes } from "styled-components";

const Article = styled.article`
  width: 100%;
  height: 100vh;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: no-repeat center center / cover;
  background-image: url(${({ image }) => image});
  overflow: hidden;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const jump = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
`;

const ArrowDownIcon = styled(ArrowDown)`
  position: absolute;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 100%;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  animation: ${jump} 2s linear infinite;
`;

const Header = ({ image, children }) => (
  <Article image={image}>
    <Div>{children}</Div>
    <ArrowDownIcon />
  </Article>
);

export default Header;
