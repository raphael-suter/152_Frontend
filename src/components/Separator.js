import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
  border-left: 100vw solid ${({ color1 }) => color1};
  border-bottom: 40px solid ${({ color2 }) => color2};

  @media (min-width: 414px) {
    border-bottom: 60px solid ${({ color2 }) => color2};
  }

  @media (min-width: 768px) {
    border-bottom: 80px solid ${({ color2 }) => color2};
  }
`;

const Container = ({ color1, color2 }) => (
  <Triangle color1={color1} color2={color2} />
);

export default Container;
