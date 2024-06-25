import React from "react";
import CalendarComponent from "../CalenderComponet";
import Issues from "../Issues/Issues";
import Solutions from "../Solutions/Solutions";
import Discussions from "../Discussions/Discussions";
import Directory from "../Directory/Directory";

const Dashboard = () => (
  <div className="p-6 bg-white min-h-screen">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <CalendarComponent />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Issues />
        <Solutions />
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <Discussions />
      <Directory />
    </div>
  </div>
);

export default Dashboard;
