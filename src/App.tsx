import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import TopNavigation from "./components/navigation/TopNavigation";
import Home from "./pages/home/Home";

const BodyContainer = styled.div`
  max-width: 1024px;
  margin: 70px auto 0;
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
