import React from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Container from "../components/Container";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Video from "../components/Video";
import Upload from "../components/Upload";

const Home = () => (
  <>
    <Header />
    <Jumbo
      video="vid/BackgroundVideo.mp4"
      title="Forest Adventures"
      subtitle="Modul 152, Raphael Suter"
      link="/docs"
      linkText="Dokumentation"
    />
    <Separator color1="#ffc107" color2="black" />
    <Separator color1="black" color2="white" />
    <Container color="white">
      <Gallery
        images={[
          ["img/background1edit.jpg", "img/background1.jpg"],
          ["img/background2edit.jpg", "img/background2.jpg"],
          ["img/photo14edit.jpg", "img/photo14.jpg"],
          ["img/photo18edit.jpg", "img/photo18.jpg"],
          ["img/photo22edit.jpg", "img/photo22.jpg"],
          ["img/photo45edit.jpg", "img/photo45.jpg"],
          ["img/photo28.jpg", "img/photo28edit.jpg"],
          "img/photo1.jpg",
          "img/photo2.jpg",
          "img/photo3.jpg",
          "img/photo48.jpg",
        ]}
      >
        <Upload />
      </Gallery>
    </Container>
    <Separator color1="white" color2="black" />
    <Container color="black">
      <Video />
    </Container>
    <Separator color1="black" color2="#ffc107" />
    <Footer />
  </>
);

export default Home;
