import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const AuthContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
`;

function Auth() {
  return (
    <AuthContainer>
      <Hero />
    </AuthContainer>
  );
}

export default Auth;
