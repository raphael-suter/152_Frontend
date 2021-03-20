import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
  border-${({ toLeft }) => (toLeft ? "left" : "right")}: 100vw solid ${({
  color1,
}) => color1};
  border-bottom: 40px solid ${({ color2 }) => color2};
`;

const Container = ({ color1, color2, toLeft, toRight }) => {
  return (
    <Triangle
      color1={color1}
      color2={color2}
      toLeft={toLeft}
      toRight={toRight}
    />
  );
};

export default Container;
