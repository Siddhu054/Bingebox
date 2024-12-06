import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieRow from "../../components/MovieRow";
import { getMovies } from "../../services/api";

const BrowseContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const FeaturedHero = styled.div`
  height: 80vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      ${({ theme }) => theme.colors.background}
    ),
    url(${({ bgImage }) => bgImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 0 40px;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const BrowseContent = styled.div`
  margin-top: -150px;
  position: relative;
  z-index: 2;
`;

function Browse() {
  const [movies, setMovies] = useState(null);
  const [featuredContent, setFeaturedContent] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      console.log("Fetched movies:", data);
      setMovies(data);
      setFeaturedContent(data.trending[0]);
    };

    fetchMovies();
  }, []);

  console.log("Current state:", { movies, featuredContent });

  if (!movies || !featuredContent) {
    return null;
  }

  return (
    <BrowseContainer>
      <FeaturedHero bgImage={featuredContent.posterUrl}>
        <HeroContent>
          <Title>{featuredContent.title}</Title>
          <Description>
            Experience the thrill of {featuredContent.title}. Watch now and join
            millions of viewers who have made this their favorite show.
          </Description>
        </HeroContent>
      </FeaturedHero>
      <BrowseContent>
        <MovieRow title="Trending Now" movies={movies.trending} />
        <MovieRow title="Popular on BingeBox" movies={movies.popular} />
        <MovieRow title="New Releases" movies={movies.newReleases} />
      </BrowseContent>
    </BrowseContainer>
  );
}

export default Browse;
