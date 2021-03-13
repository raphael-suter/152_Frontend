import React from "react";
import { Mouse } from "react-bootstrap-icons";
import styled from "styled-components";

const Article = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: no-repeat center center / cover;
  background-image: url(${({ image }) => image});
  overflow: hidden;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 2rem;
`;

const MouseIcon = styled(Mouse)`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 2rem;
  padding: 10px;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  border-radius: 50px;
`;

const Header = ({ image, children }) => {
  return (
    <Article image={image}>
      <Div>{children}</Div>
      <MouseIcon />
    </Article>
  );
};

export default Header;
