import React from "react";
import { ArrowDown } from "react-bootstrap-icons";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Article = styled.article`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: no-repeat center center / cover;
  background-image: url(${({ image }) => image});
  overflow: hidden;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  z-index: 100;
`;

const H1 = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-shadow: 0 0 6px rgb(0, 0, 0, 0.4);
  color: white;

  @media (min-width: 375px) {
    font-size: 40px;
  }

  @media (min-width: 414px) {
    font-size: 45px;
  }

  @media (min-width: 768px) {
    font-size: 55px;
  }
`;

const P = styled.p`
  font-size: 16px;
  text-shadow: 0 0 6px rgb(0, 0, 0, 0.4);
  color: white;

  @media (min-width: 375px) {
    font-size: 20px;
  }

  @media (min-width: 414px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  font-weight: bold;
`;

const jump = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
`;

const ArrowDownIcon = styled(ArrowDown)`
  position: absolute;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 100%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  animation: ${jump} 2s linear infinite;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = ({ image, video, title, subtitle, link, linkText }) => (
  <Article image={image}>
    <Video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </Video>
    <Div>
      <H1>{title}</H1>
      <P>{subtitle}</P>
      {link && (
        <StyledLink to={link} className="btn btn-warning">
          {linkText}
        </StyledLink>
      )}
    </Div>
    <ArrowDownIcon />
  </Article>
);

export default Header;
