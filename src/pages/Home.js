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
      image="img/background1edit.jpg"
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
          ["img/photo41edit.png", "img/photo41.jpg"],
          ["img/photo45edit.jpg", "img/photo45.jpg"],
          ["img/photo28.jpg", "img/photo28edit.jpg"],
          "img/photo1.jpg",
          "img/photo2.jpg",
          "img/photo3.jpg",
          "img/photo4.jpg",
          "img/photo5.jpg",
          "img/photo6.jpg",
          "img/photo7.jpg",
          "img/photo8.jpg",
          "img/photo9.jpg",
          "img/photo10.jpg",
          "img/photo11.jpg",
          "img/photo12.jpg",
          "img/photo13.jpg",
          "img/photo15.jpg",
          "img/photo16.jpg",
          "img/photo17.jpg",
          "img/photo19.jpg",
          "img/photo20.jpg",
          "img/photo21.jpg",
          "img/photo23.jpg",
          "img/photo24.jpg",
          "img/photo25.jpg",
          "img/photo26.jpg",
          "img/photo27.jpg",
          "img/photo29.jpg",
          "img/photo30.jpg",
          "img/photo31.jpg",
          "img/photo32.jpg",
          "img/photo33.jpg",
          "img/photo34.jpg",
          "img/photo35.jpg",
          "img/photo36.jpg",
          "img/photo37.jpg",
          "img/photo38.jpg",
          "img/photo39.jpg",
          "img/photo40.jpg",
          "img/photo42.jpg",
          "img/photo43.jpg",
          "img/photo44.jpg",
          "img/photo46.jpg",
          "img/photo47.jpg",
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
