import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { TreeFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const Div = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
`;

const TreeFillIcon = styled(TreeFill)`
  width: 25px;
  height: 25px;
  color: ${({ foregroundColor }) => foregroundColor};
`;

const StyledNav = styled(Nav)`
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 1rem;
  font-weight: bold;
  color: ${({ foregroundColor }) => foregroundColor};
`;

const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [foregroundColor, setForegroundColor] = useState("white");

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setBackgroundColor("white");
      setForegroundColor("black");
    } else {
      setBackgroundColor("transparent");
      setForegroundColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledNavbar backgroundColor={backgroundColor}>
      <Div>
        <TreeFillIcon foregroundColor={foregroundColor} />
        <StyledNav>
          <StyledNavLink to="/" foregroundColor={foregroundColor}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/doc" foregroundColor={foregroundColor}>
            Dokumentation
          </StyledNavLink>
        </StyledNav>
      </Div>
    </StyledNavbar>
  );
};

export default Header;
