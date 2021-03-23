import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${({ color }) => color};
`;

const Title = ({ color, children }) => <P color={color}>{children}</P>;
export default Title;
