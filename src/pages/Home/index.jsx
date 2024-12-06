import React from "react";
import styled from "styled-components";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

const HomeContainer = styled.div`
  min-height: 100vh;
`;

function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </HomeContainer>
  );
}

export default Home;
