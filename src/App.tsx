import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import TopNavigation from "./components/navigation/TopNavigation";
import Home from "./pages/home/Home";

const BodyContainer = styled.div`
  max-width: 390px;
  margin: 50px auto 0;

  @media (min-width: 768px) {
    max-width: 768px;
    margin-top: 70px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const App = () => (
  <BodyContainer>
    <TopNavigation />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
    </Routes>
  </BodyContainer>
);

export default App;
