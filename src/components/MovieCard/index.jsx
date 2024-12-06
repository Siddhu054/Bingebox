import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";

const Card = styled.div`
  position: relative;
  min-width: 200px;
  width: 200px;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
  background-color: #333;
  border: 1px solid yellow;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 20px;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const IconButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Rating = styled.span`
  color: #46d369;
  font-size: 0.9rem;
  margin-right: 10px;
`;

const Duration = styled.span`
  color: white;
  font-size: 0.9rem;
`;

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("MovieCard rendering:", {
    movieTitle: movie?.title,
    posterUrl: movie?.posterUrl,
    hasMovie: !!movie,
    hasPosterUrl: !!movie?.posterUrl,
  });

  if (!movie || !movie.posterUrl) {
    return <Card>No movie data</Card>;
  }

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        onError={(e) => {
          console.error("Image failed to load:", movie.posterUrl);
          e.target.src = "https://via.placeholder.com/200x300?text=No+Image";
        }}
      />
      <Overlay $isHovered={isHovered}>
        <Title>{movie.title}</Title>
        <div>
          <Rating>{movie.rating}% Match</Rating>
          <Duration>{movie.duration}</Duration>
        </div>
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
      </Overlay>
    </Card>
  );
}

export default MovieCard;
