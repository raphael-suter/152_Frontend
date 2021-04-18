import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight, Eraser, Info, X } from "react-bootstrap-icons";

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
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 1000;
`;

const Img = styled.img`
  max-height: 100vh;
  max-width: 100vw;
`;

const InfoIcon = styled(Info)`
  position: absolute;
  right: 6rem;
  top: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
`;

const FilterIcon = styled(Eraser)`
  position: absolute;
  right: 10rem;
  top: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
`;

const CloseIcon = styled(X)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
`;

const ArrowLeftIcon = styled(ArrowLeft)`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
`;

const ArrowRightIcon = styled(ArrowRight)`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
`;

const Gallery = ({ images, children }) => {
  const [open, setOpen] = useState(-1);
  const [original, setOriginal] = useState(false);
  const { min, max } = Math;

  const frames = images.map((src, index) => {
    if (Array.isArray(src)) {
      src = src[0];
    }

    return <Frame key={index} src={src} onClick={() => setOpen(index)} />;
  });

  const getCorrectImage = () => {
    let image = images[open];

    if (Array.isArray(image)) {
      image = image[original ? 1 : 0];
    }

    return image;
  };

  return (
    <>
      <Grid>
        {frames}
        {children}
      </Grid>
      {open >= 0 && (
        <Modal>
          <InfoIcon onClick={() => setOpen(-1)} />
          {Array.isArray(images[open]) && (
            <FilterIcon onClick={() => setOriginal(!original)} />
          )}
          <CloseIcon onClick={() => setOpen(-1)} />
          <ArrowLeftIcon
            onClick={() => setOpen(min(max(open - 1, 0), images.length - 1))}
          />
          <Img src={getCorrectImage()} />
          <ArrowRightIcon
            onClick={() => setOpen(min(max(open + 1, 0), images.length - 1))}
          />
        </Modal>
      )}
    </>
  );
};

export default Gallery;
