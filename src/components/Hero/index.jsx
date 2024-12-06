import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroContainer = styled.div`
  height: 95vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: normal;
`;

const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f40612;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <Title>Unlimited movies, TV shows, and more</Title>
        <Subtitle>
          Watch anywhere. Cancel anytime. Ready to watch? Start your free trial
          today.
        </Subtitle>
        <CTAButton to="/signup">Get Started</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
