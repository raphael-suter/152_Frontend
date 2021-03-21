import React from "react";
import styled from "styled-components";

const MyContainer = styled.div`
  padding: 2rem 1.5rem;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
`;

const Container = ({ color, children }) => {
  return (
    <MyContainer backgroundColor={color}>
      <Content>{children}</Content>
    </MyContainer>
  );
};

export default Container;
