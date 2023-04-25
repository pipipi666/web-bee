import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;

