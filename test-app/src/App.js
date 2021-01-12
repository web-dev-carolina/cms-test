// import React, { useState, useEffect } from "react";
import "./App.css";
import NavbarContainer from "./components/NavbarContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from 'react-router-dom';
// import UserContext from "./context/UserContext.js";
// import Axios from "axios";

function App() {
  return (
      <BrowserRouter>
        <NavbarContainer> </NavbarContainer>
      </BrowserRouter>

  );
}

export default App;
