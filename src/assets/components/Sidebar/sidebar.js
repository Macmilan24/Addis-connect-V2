import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWrench,
  faUsers,
  faCommentDots,
  faSignOutAlt,
  faCog,
  faShieldAlt,
  faBuilding,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`  p-4 ${
        isHovered ? "w-56" : "w-20"
      } transition-all duration-300 bg-gray-900 text-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-start space-y-6 pl-8">
        <Link
          to="/home"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faHome} />
          {isHovered && <span>Home</span>}
        </Link>
        <Link
          to="/potholes"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faWrench} />
          {isHovered && <span>Potholes</span>}
        </Link>
        <Link
          to="/collaborate"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faUsers} />
          {isHovered && <span>Collaborate</span>}
        </Link>
        <Link
          to="/solutions"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faLightbulb} />
          {isHovered && <span>Solutions</span>}
        </Link>
        <Link
          to="/issues"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faCommentDots} />
          {isHovered && <span>Issues</span>}
        </Link>
        <Link
          to="/transparency"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faShieldAlt} />
          {isHovered && <span>Transparency</span>}
        </Link>
        <Link
          to="/infrastructure"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faBuilding} />
          {isHovered && <span>Infrastructure</span>}
        </Link>
        <Link
          to="/security"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faShieldAlt} />
          {isHovered && <span>Security</span>}
        </Link>
        <Link
          to="/engage"
          className="flex items-center space-x-4 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faUsers} />
          {isHovered && <span>Engage</span>}
        </Link>
        <div className="mt-auto">
          <Link
            to="/settings"
            className="flex items-center space-x-4 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faCog} />
            {isHovered && <span>Settings</span>}
          </Link>
          <Link
            to="/"
            className="flex items-center mt-4 space-x-4 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            {isHovered && <span>Exit</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
