import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Issues = () => (
  <div className="bg-gray-200 p-4 rounded-lg w-full shadow-md">
    <h2 className="font-bold mb-4">Unresolved Issues</h2>
    {["Pothole Reporting", "Infrastructure Damage", "Community Engagement"].map(
      (issue, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{issue}</span>
          <FontAwesomeIcon icon={faCircle} className="text-yellow-500" />
          <span className="text-gray-600">Today</span>
        </div>
      )
    )}
  </div>
);

export default Issues;
