import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "pages/profile/profile";
import MapPage from "pages/map-location/map-location";
import TimePage from "pages/time/time";
import NotFoundPage from "pages/not-found/not-found";
import Header from "components/header/header";
import Navigation from "components/navigation/navigation";
import Layout from "components/layout/layout";
import { ROUTES } from "utils/routes";

function App() {
  const [start, setStart] = useState<Date>(new Date());

  const onRefresh = () => {
    setStart(new Date());
  };

  return (
    <Router>
      <Header />
      <Navigation />
      <Layout>
        <Routes>
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.MAP} element={<MapPage />} />
          <Route
            path={ROUTES.TIME}
            element={<TimePage start={start} onRefresh={onRefresh} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
