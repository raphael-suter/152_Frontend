import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";

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
    <h1>Forest Adventures</h1>
    <p>Modul 152, Raphael Suter</p>
    <Button>Dokumentation</Button>
  </>
);

export default Home;
