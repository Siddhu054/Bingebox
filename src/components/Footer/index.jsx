import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 70px 40px;
  color: #757575;
`;

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  color: #757575;
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterLink = styled(Link)`
  color: #757575;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-top: 20px;
`;

function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <SocialLinks>
          <SocialIcon href="https://facebook.com" target="_blank">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://youtube.com" target="_blank">
            <FaYoutube />
          </SocialIcon>
        </SocialLinks>

        <LinksGrid>
          <LinkColumn>
            <FooterLink to="/help">Help Center</FooterLink>
            <FooterLink to="/account">Account</FooterLink>
            <FooterLink to="/media">Media Center</FooterLink>
          </LinkColumn>
          <LinkColumn>
            <FooterLink to="/investor">Investor Relations</FooterLink>
            <FooterLink to="/jobs">Jobs</FooterLink>
            <FooterLink to="/redeem">Redeem Gift Cards</FooterLink>
          </LinkColumn>
          <LinkColumn>
            <FooterLink to="/buy-gift-cards">Buy Gift Cards</FooterLink>
            <FooterLink to="/ways-to-watch">Ways to Watch</FooterLink>
            <FooterLink to="/terms">Terms of Use</FooterLink>
          </LinkColumn>
          <LinkColumn>
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/cookie-preferences">Cookie Preferences</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </LinkColumn>
        </LinksGrid>

        <Copyright>© 2024 BingeBox. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer;
