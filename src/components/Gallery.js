import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

const Frame = styled.div`
  flex: ${({ flex }) => flex};
  height: 250px;
  min-width: 250px;
  margin: 0.5rem;
  background: no-repeat center center / cover;
  background-image: url(${({ src }) => src});
  border-radius: 0.25rem;
`;

const Gallery = ({ images }) => {
  const { floor, random } = Math;

  const frames = images.map((src, index) => (
    <Frame key={index} src={src} flex={floor(random() * 3 + 1)} />
  ));

  return <Grid>{frames}</Grid>;
};

export default Gallery;
