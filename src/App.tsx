import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile/profile";
import MapPage from "./pages/map/map";
import TimePage from "./pages/time/time";
import NotFoundPage from "./pages/not-found/not-found";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/time" element={<TimePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

