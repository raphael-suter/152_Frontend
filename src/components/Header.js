import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { TreeFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

const TreeFillIcon = styled(TreeFill)`
  width: 25px;
  height: 25px;
  color: white;
`;

const StyledNav = styled(Nav)`
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  color: white;
`;

const Header = () => (
  <StyledNavbar>
    <Div>
      <TreeFillIcon />
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/doc">Dokumentation</StyledNavLink>
      </StyledNav>
    </Div>
  </StyledNavbar>
);

export default Header;
