import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile/profile";
import MapPage from "./pages/map/map";
import TimePage from "./pages/time/time";
import NotFoundPage from "./pages/not-found/not-found";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import { ROUTES } from "./consts/routes";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.MAP} element={<MapPage />} />
        <Route path={ROUTES.TIME} element={<TimePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

