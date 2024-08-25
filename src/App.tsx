import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import TopNavigation from "./components/navigation/TopNavigation";
import Home from "./pages/home/Home";

const App = () => (
  <>
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
    <Footer />
  </>
);

export default App;
