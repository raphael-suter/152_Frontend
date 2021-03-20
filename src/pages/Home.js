import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Container from "../components/Container";
import Separator from "../components/Separator";
import Footer from "../components/Footer";

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
    <Separator color1="#ffc107" color2="black" toLeft />
    <Container color="black">
      <h1>Forest Adventures</h1>
      <p>Modul 152, Raphael Suter</p>
      <Button variant="outline-light">Dokumentation</Button>
    </Container>
    <Separator color1="black" color2="white" toRight />
    <Footer />
  </>
);

export default Home;
