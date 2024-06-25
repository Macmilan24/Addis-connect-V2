import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CalendarComponent = () => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="font-bold mb-4">Community Challenges</h2>
    <div className="flex justify-between items-center mb-2">
      <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer" />
      <span className="text-xl font-bold">June 2024</span>
      <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
    </div>
    <div className="grid grid-cols-7 gap-1 text-center font-bold">
      {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
        <div key={index}>{day}</div>
      ))}
      {Array.from({ length: 30 }, (_, index) => (
        <div
          key={index}
          className={`p-2 ${index === 5 ? "bg-yellow-400 rounded-full" : ""}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  </div>
);

export default CalendarComponent;
