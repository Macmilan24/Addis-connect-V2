import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-black">Welcome, Community!</h1>
    <div className="relative w-5/12">
      <input
        type="text"
        className="w-full bg-gray-200 rounded px-3 py-2"
        placeholder="Search"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
      />
    </div>
    <img
      src="https://via.placeholder.com/40"
      alt="dfd"
      className="rounded-full mr-4"
    />
  </header>
);

export default Header;
