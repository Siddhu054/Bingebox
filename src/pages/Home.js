import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

const HomeContainer = styled.div`
  background-color: #111;
`;

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Banner />
      <MovieList />
    </HomeContainer>
  );
}

export default Home;
