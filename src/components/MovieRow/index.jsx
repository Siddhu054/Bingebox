import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard";

const RowContainer = styled.div`
  margin: 3vw 0;
  padding: 0 4vw;
  border: 1px solid red;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const MoviesSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 20px 0;
  scroll-behavior: smooth;
  min-height: 300px;
  border: 1px solid blue;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

function MovieRow({ title, movies }) {
  console.log(`MovieRow "${title}"`, {
    moviesReceived: movies,
    moviesLength: movies?.length,
    firstMovie: movies?.[0],
  });

  if (!movies || movies.length === 0) {
    return (
      <RowContainer>
        <Title>No movies found for {title}</Title>
      </RowContainer>
    );
  }

  return (
    <RowContainer>
      <Title>{title}</Title>
      <MoviesSlider>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesSlider>
    </RowContainer>
  );
}

export default MovieRow;
