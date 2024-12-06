import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";

const RowContainer = styled.div`
  margin: 3vw 0;
  color: white;
`;

const Title = styled.h2`
  margin: 0 4% 0.5em;
  font-size: 1.4vw;
`;

const MoviesContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 0 4%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MovieCard = styled.div`
  position: relative;
  width: 240px;
  height: 135px;
  margin-right: 5px;
  background-image: ${(props) => `url(${props.backdrop})`};
  background-size: cover;
  background-position: top center;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 4px;
  background-color: #141414;

  &:hover {
    transform: scale(1.35);
    z-index: 10;
  }

  &:hover ~ & {
    transform: translateX(25%);
  }
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(0, 0, 0, 0.95)
  );
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 0 0 4px 4px;

  ${MovieCard}:hover & {
    opacity: 1;
  }
`;

const MovieTitle = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
  padding: 0;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
`;

function MovieRow({ title, movies }) {
  return (
    <RowContainer>
      <Title>{title}</Title>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.id} backdrop={movie.backdrop}>
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <ButtonGroup>
                <IconButton>
                  <FaPlay />
                </IconButton>
                <IconButton>
                  <FaPlus />
                </IconButton>
                <IconButton>
                  <FaThumbsUp />
                </IconButton>
              </ButtonGroup>
            </MovieInfo>
          </MovieCard>
        ))}
      </MoviesContainer>
    </RowContainer>
  );
}

export default MovieRow;
