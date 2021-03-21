import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Container from "../components/Container";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Video from "../components/Video";

const Home = () => (
  <>
    <Header />
    <Jumbo
      image="img/wald-im-herbst.jpg"
      title="Forest Adventures"
      subtitle="Modul 152, Raphael Suter"
      link="/docs"
      linkText="Dokumentation"
    />
    <Container color="#ffc107">
      <h1>Forest Adventures</h1>
      <p>Modul 152, Raphael Suter</p>
      <Button variant="outline-light">Dokumentation</Button>
    </Container>
    <Separator color1="#ffc107" color2="white" toLeft />
    <Container color="white">
      <Gallery
        images={[
          "img/541db11f-97b4-4af8-84ad-e745cab6e99e.jpeg",
          "img/70459ab0-553a-4dbb-bc67-697b55a1f011.jpeg",
          "img/785471584-fruehlingslicht-im-wald-2uOMxFGQ4pea.jpg",
          "img/froschblog_stage_2048x750px_wald.jpg",
          "img/Menschen_im_Wald_2000x.png",
          "img/spaziergang-im-wald-bac8485a-a104-43fc-84cc-06aa0d65e52d.jpg",
          "img/wald-alt.jpg",
          "img/wald-im-herbst.jpg",
          "img/Wald_JohannesPlenio-.jpg",
        ]}
      />
    </Container>
    <Separator color1="white" color2="black" toRight />
    <Container color="black">
      <Video />
    </Container>{" "}
    <Separator color1="black" color2="white" toLeft />
    <Footer />
  </>
);

export default Home;
