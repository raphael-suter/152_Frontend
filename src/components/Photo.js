import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  margin: 1.5rem 0;
`;

const Photo = ({ src }) => <Img src={src} />;
export default Photo;
