import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 0;
  margin: auto;
  padding-bottom: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Video = () => {
  return (
    <Container>
      <Iframe
        src="https://www.youtube.com/embed/fm5kiVEklGA"
        title="YouTube video player"
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

export default Video;
