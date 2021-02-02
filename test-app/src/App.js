import React, { useContext, useEffect } from "react";
import "./App.css";
import NavbarContainer from "./components/NavbarContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from 'react-router-dom';
import Axios from "axios";

function App() {

  useEffect(() => {
    async function fetchData() {
      const reqBody = { "project": "test-project" };
      // await Axios.post("http://localhost:5000/cms-readonly/us-central1/app/projects/connect", reqBody);
      // ^ this should eventually connect to (only) the correct project so permissions are appropriate
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <NavbarContainer/>
    </BrowserRouter>

  );
}

export default App;
