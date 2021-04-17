import React from "react";
import Jumbo from "../components/Jumbo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Photo from "../components/Photo";
import Separator from "../components/Separator";
import Container from "../components/Container";
import Title from "../components/Title";
import Text from "../components/Text";

const Docs = () => (
  <>
    <Header />
    <Jumbo
      image="img/background2.jpg"
      title="Dokumentation"
      subtitle="Modul 152, Raphael Suter"
    />
    <Separator color1="#ffc107" color2="black" />
    <Separator color1="black" color2="white" />
    <Container color="white">
      <Title color="black">Entscheidungen</Title>
      <Photo src="img/Styling.png" />
      <Photo src="img/Framework.png" />
      <Photo src="img/IDE.png" />
    </Container>
    <Separator color1="white" color2="black" />
    <Container color="black">
      <Title color="white">Externe Module</Title>
      <Text color="white">
        <li>react-bootstrap-icons</li>
        <li>react-router-dom</li>
        <li>styled-components</li>
        <li>gh-pages</li>
      </Text>
    </Container>
    <Separator color1="black" color2="#ffc107" />
    <Footer />
  </>
);

export default Docs;
