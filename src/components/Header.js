import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { TreeFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(({ scrolled, ...props }) => <Navbar {...props} />)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 1.5rem;
  background: ${({ scrolled }) => (scrolled ? "white" : "transparent")};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 0 6px rgb(0, 0, 0, 0.4)" : "none"};
  z-index: 100;
`;

const Div = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TreeFillIcon = styled(({ scrolled, ...props }) => (
  <TreeFill {...props} />
))`
  width: 28px;
  height: 28px;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
`;

const StyledNavLink = styled(({ scrolled, ...props }) => (
  <NavLink {...props} />
))`
  margin-left: 1rem;
  padding: 0.4rem 0;
  font-weight: bold;
  text-shadow: ${({ scrolled }) =>
    scrolled ? "none" : "0 0 6px rgb(0, 0, 0, 0.4)"};
  border-radius: 0.25rem;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};

  &:hover {
    text-decoration: none;
    color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  }

  &.active {
    padding: 0.4rem 1rem;
    text-decoration: none;
    text-shadow: none;
    background: ${({ scrolled }) => (scrolled ? "black" : "white")};
    color: ${({ scrolled }) => (scrolled ? "white" : "black")};
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledNavbar scrolled={scrolled}>
      <Div>
        <TreeFillIcon scrolled={scrolled} />
        <Nav>
          <StyledNavLink exact to="/" scrolled={scrolled}>
            Home
          </StyledNavLink>
          <StyledNavLink exact to="/docs" scrolled={scrolled}>
            Docs
          </StyledNavLink>
        </Nav>
      </Div>
    </StyledNavbar>
  );
};

export default Header;
