import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1px;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 6px rgb(0, 0, 0, 0.4);
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-bottom: 0;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <P>&copy; 2021 Raphael Suter</P>
      </Content>
    </Container>
  );
};

export default Footer;
