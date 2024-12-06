import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LandingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

const Header = styled.header`
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 950px;
  margin: 150px auto 0;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: normal;
`;

const GetStartedButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f40612;
  }
`;

function Landing() {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Header>
        <Logo>BingeBox</Logo>
      </Header>
      <Content>
        <Title>Unlimited movies, TV shows, and more</Title>
        <Subtitle>
          Watch anywhere. Cancel anytime. Ready to watch? Start your free trial
          today.
        </Subtitle>
        <GetStartedButton onClick={() => navigate("/browse")}>
          Get Started
        </GetStartedButton>
      </Content>
    </LandingContainer>
  );
}

export default Landing;
