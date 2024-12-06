import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.$show ? "rgba(0, 0, 0, 0.9)" : "transparent"};
  transition: all 0.5s ease;
  z-index: 10;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav $show={show}>
      <Link to="/">
        <Logo>BingeBox</Logo>
      </Link>
      <NavLinks>
        <NavLink to="/browse">Browse</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
