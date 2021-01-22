import React, { useEffect } from "react";
import "./App.css";
import NavbarContainer from "./components/NavbarContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from 'react-router-dom';
import Axios from "axios";

function App() {

  useEffect(() => {
    async function fetchData() {
      const reqBody = { project: "test-project" };
      await Axios.post("http://localhost:9000/projects/connect", reqBody);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <NavbarContainer> </NavbarContainer>
    </BrowserRouter>

  );
}

export default App;
