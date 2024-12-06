import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: ${({ isScrolled }) => (isScrolled ? "#141414" : "transparent")};
  transition: background 0.3s;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #b3b3b3;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: #b3b3b3;
  }
`;

const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    height: 32px;
    border-radius: 4px;
  }
`;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <NavItems>
        <Logo>BingeBox</Logo>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">TV Shows</NavLink>
          <NavLink href="#">Movies</NavLink>
          <NavLink href="#">New & Popular</NavLink>
          <NavLink href="#">My List</NavLink>
        </NavLinks>
      </NavItems>
      <NavRight>
        <IconButton>
          <FaSearch />
        </IconButton>
        <IconButton>
          <FaBell />
        </IconButton>
        <ProfileMenu>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
          />
          <FaCaretDown />
        </ProfileMenu>
      </NavRight>
    </Nav>
  );
}

export default Navbar;
