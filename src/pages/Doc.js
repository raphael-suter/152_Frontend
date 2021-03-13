import React from "react";
import Jumbo from "../components/Jumbo";
import Header from "../components/Header";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
`;

const P = styled.p`
  color: white;
`;

const Doc = () => (
  <>
    <Header />
    <Jumbo image="img/785471584-fruehlingslicht-im-wald-2uOMxFGQ4pea.jpg">
      <H1>Dokumentation</H1>
      <P>Modul 152, Raphael Suter</P>
    </Jumbo>
  </>
);

export default Doc;
