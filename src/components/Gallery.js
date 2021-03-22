import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const Frame = styled.div`
  height: 250px;
  background: no-repeat center center / cover;
  background-image: url(${({ src }) => src});
  border-radius: 0.25rem;
`;

const Gallery = ({ images }) => {
  const frames = images.map((src, index) => <Frame key={index} src={src} />);
  return <Grid>{frames}</Grid>;
};

export default Gallery;
