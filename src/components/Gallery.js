import React, { useState } from "react";
import styled from "styled-components";
import {
  ArrowLeft,
  ArrowRight,
  Eraser,
  EraserFill,
  Info,
  X,
} from "react-bootstrap-icons";
import "./animations.css";

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

  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  z-index: 1000;
`;

const SlidesWrapper = styled.div`
  position: relative;
  z-index: -100;
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: black;
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

const FilterOffIcon = styled(Eraser)`
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

const FilterOnIcon = styled(EraserFill)`
  position: absolute;
  right: 10rem;
  top: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: white;
  color: rgb(0, 0, 0, 0.5);
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
  const [current, setCurrent] = useState(-1);
  const [next, setNext] = useState(-1);
  const [animationCurrent, setAnimationCurrent] = useState("");
  const [animationNext, setAnimationNext] = useState("");
  const [original, setOriginal] = useState(false);

  const frames = images.map((src, index) => {
    if (Array.isArray(src)) {
      src = src[0];
    }

    return <Frame key={index} src={src} onClick={() => setCurrent(index)} />;
  });

  const getCorrectImage = (open) => {
    let image = images[open];

    if (Array.isArray(image)) {
      image = image[original ? 1 : 0];
    }

    return image;
  };

  const switchSlide = (step) => {
    setNext(current + step);

    if (step > 0) {
      setAnimationCurrent("slideOutLeft");
      setAnimationNext("slideInRight");
    } else {
      setAnimationCurrent("slideOutRight");
      setAnimationNext("slideInLeft");
    }
  };

  const getFilter = () => {
    return original ? (
      <FilterOnIcon onClick={() => setOriginal(!original)} />
    ) : (
      <FilterOffIcon onClick={() => setOriginal(!original)} />
    );
  };

  return (
    <>
      <Grid>
        {frames}
        {children}
      </Grid>
      {current >= 0 && (
        <Modal>
          <InfoIcon onClick={() => setCurrent(-1)} />
          {Array.isArray(images[current]) && getFilter()}
          <CloseIcon onClick={() => setCurrent(-1)} />
          {current > 0 && <ArrowLeftIcon onClick={() => switchSlide(-1)} />}
          <SlidesWrapper>
            <ImgWrapper
              className={animationNext}
              onAnimationEnd={() => setAnimationNext("")}
            >
              <Img src={getCorrectImage(next)} />
            </ImgWrapper>
            <ImgWrapper
              className={animationCurrent}
              onAnimationEnd={() => {
                setAnimationCurrent("");
                setCurrent(next);
              }}
            >
              <Img src={getCorrectImage(current)} />
            </ImgWrapper>
          </SlidesWrapper>
          {current < images.length - 1 && (
            <ArrowRightIcon onClick={() => switchSlide(1)} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Gallery;
