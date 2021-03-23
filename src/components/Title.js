import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  color: ${({ color }) => color};

  @media (min-width: 375px) {
    font-size: 35px;
  }

  @media (min-width: 414px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

const Title = ({ color, children }) => <H1 color={color}>{children}</H1>;
export default Title;
