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
import EXIF from "exif-js";
import { ListGroup } from "react-bootstrap";

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
  z-index: -1000;
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

const InfoOffIcon = styled(Info)`
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

const InfoOnIcon = styled(Info)`
  position: absolute;
  right: 6rem;
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

const ListWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.6);
`;

const List = styled(ListGroup)`
  width: 100%;
  max-width: 800px;
  border-top: 1px solid white;
  border-radius: 0;
`;

const ListItem = styled(({ children, ...props }) => (
  <ListGroup.Item {...props}>{children}</ListGroup.Item>
))`
  padding: 0.8rem;
  background: transparent;
  border-bottom: 1px solid white;
  border-radius: 0;
  color: white;
`;

const Gallery = ({ images, children }) => {
  const [current, setCurrent] = useState(-1);
  const [next, setNext] = useState(-1);
  const [animationCurrent, setAnimationCurrent] = useState("");
  const [animationNext, setAnimationNext] = useState("");
  const [original, setOriginal] = useState(false);
  const [information, setInformation] = useState([]);

  const frames = images.map((src, index) => {
    if (Array.isArray(src)) {
      src = src[0];
    }

    const onClick = () => {
      setCurrent(index);
      setOriginal(false);
      setInformation([]);
    };

    return <Frame key={index} src={src} onClick={onClick} />;
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
    setOriginal(false);
    setInformation([]);

    if (step > 0) {
      setAnimationCurrent("slideOutLeft");
      setAnimationNext("slideInRight");
    } else {
      setAnimationCurrent("slideOutRight");
      setAnimationNext("slideInLeft");
    }
  };

  const getFilter = () => {
    const onClick = () => setOriginal(!original);

    return original ? (
      <FilterOnIcon onClick={onClick} />
    ) : (
      <FilterOffIcon onClick={onClick} />
    );
  };

  const getInfo = () => {
    return information.length > 0 ? (
      <InfoOnIcon onClick={() => setInformation([])} />
    ) : (
      <InfoOffIcon onClick={showInformation} />
    );
  };

  const showInformation = () => {
    const img = document.getElementById("currentImage");

    EXIF.getData(img, () => {
      setInformation(["lol"]);
    });
  };

  return (
    <>
      <Grid>
        {frames}
        {children}
      </Grid>
      {current >= 0 && (
        <Modal>
          {getInfo()}
          {Array.isArray(images[current]) && getFilter()}
          <CloseIcon onClick={() => setCurrent(-1)} />
          {current > 0 && <ArrowLeftIcon onClick={() => switchSlide(-1)} />}
          {information.length > 0 && (
            <ListWrapper>
              <List>
                {information.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </ListWrapper>
          )}
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
              <Img src={getCorrectImage(current)} id="currentImage" />
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
