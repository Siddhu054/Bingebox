import React from "react";
import styled from "styled-components";
import { FaDesktop, FaMobileAlt, FaDownload, FaFilm } from "react-icons/fa";

const FeaturesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 70px 40px;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 20px;
`;

const FeatureCard = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
`;

const features = [
  {
    icon: <FaDesktop />,
    title: "Watch on TV",
    description:
      "Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Watch Anywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
  },
  {
    icon: <FaDownload />,
    title: "Download & Go",
    description:
      "Save your favorites easily and always have something to watch offline.",
  },
  {
    icon: <FaFilm />,
    title: "Unlimited Entertainment",
    description:
      "Stream exclusive originals, movies, TV shows, and more from our vast library.",
  },
];

function Features() {
  return (
    <FeaturesSection>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
}

export default Features;
