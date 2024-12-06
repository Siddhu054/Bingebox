import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

const AppContainer = styled.div`
  background-color: #111;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<Home />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
