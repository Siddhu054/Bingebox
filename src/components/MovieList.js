import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieRow from "./MovieRow";
import movieData from "../data/movies.json";

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

function MovieList() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setGenres(movieData.genres);
    setMovies(movieData.movies);
  }, []);

  const getMoviesByGenre = (genreId) => {
    return movies.filter((movie) => movie.genre_ids.includes(genreId));
  };

  return (
    <Container>
      {genres.map((genre) => (
        <MovieRow
          key={genre.id}
          title={genre.name}
          movies={getMoviesByGenre(genre.id)}
        />
      ))}
    </Container>
  );
}

export default MovieList;
