import React from "react";
import styled from "styled-components";

const BannerContainer = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  background-position: center center;
`;

const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

function Banner() {
  const movie = {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    backdrop:
      "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
  };

  return (
    <BannerContainer backgroundImage={movie.backdrop}>
      <BannerContents>
        <BannerTitle>{movie.title}</BannerTitle>
        <div>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </div>
        <BannerDescription>{movie.description}</BannerDescription>
      </BannerContents>
      <BannerFadeBottom />
    </BannerContainer>
  );
}

export default Banner;
