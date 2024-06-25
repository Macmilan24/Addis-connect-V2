import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const Solutions = () => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="font-bold mb-4">Community Solutions</h2>
    {[
      "Infrastructure Repair",
      "Report issues",
      "Collaborative problem-solving",
      "Community involvement",
      "Community feedback",
    ].map((solution, index) => (
      <div key={index} className="flex justify-between items-center mb-2">
        <span>{solution}</span>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faTools} />
          <div className="flex -space-x-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <img
                key={i}
                src="https://via.placeholder.com/24"
                alt="User"
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>
      </div>
    ))}
    <button className="bg-orange-400 text-white rounded px-4 py-2 mt-4">
      Submit issue
    </button>
  </div>
);

export default Solutions;
