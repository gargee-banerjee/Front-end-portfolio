import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {LandingPage} from "./pages/index";
function App() {
  //Change for test4
  //New changes added from local
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
