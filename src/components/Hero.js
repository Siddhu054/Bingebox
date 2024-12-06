import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/US-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  max-width: 800px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
`;

const GetStartedButton = styled.button`
  background-color: #e50914;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f40612;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const SignInButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 12px 24px;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function Hero() {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <Title>Unlimited movies, TV shows, and more</Title>
      <Subtitle>
        Watch anywhere. Cancel anytime. Ready to watch? Start your free trial
        today.
      </Subtitle>
      <ButtonGroup>
        <GetStartedButton onClick={() => navigate("/signup")}>
          Get Started
        </GetStartedButton>
        <SignInButton onClick={() => navigate("/login")}>Sign In</SignInButton>
      </ButtonGroup>
    </HeroContainer>
  );
}

export default Hero;
