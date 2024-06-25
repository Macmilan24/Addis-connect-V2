import React from "react";

import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar/sidebar";
import Header from "../components/header/Header";

const Home = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <Dashboard />
    </div>
  </div>
);

export default Home;
