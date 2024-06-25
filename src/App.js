import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import LoginPage from "./container/login/LoginPage";
import Home from "./assets/pages/Home";
import PotholePage from "./assets/pages/PotholePage";
export default function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/potholes" element={<PotholePage />} />
        </Routes>
      </Router>
    </div>
  );
}
