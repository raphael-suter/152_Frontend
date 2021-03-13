import React from "react";
import Jumbo from "../components/Jumbo";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
`;

const P = styled.p`
  color: white;
`;

const Home = () => (
  <>
    <Header />
    <Jumbo image="img/Menschen_im_Wald_2000x.png">
      <H1>Forest Adventures</H1>
      <P>Modul 152, Raphael Suter</P>
      <Button>Dokumentation</Button>
    </Jumbo>
    <H1>Forest Adventures</H1>
    <P>Modul 152, Raphael Suter</P>
    <Button>Dokumentation</Button>
  </>
);

export default Home;
