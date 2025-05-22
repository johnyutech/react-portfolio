import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Headermain from "../header";
import SinglePage from "../pages/SinglePage";
import "./App.css";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Headermain />
      <SinglePage />
    </Router>
  );
}
