import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTag,
  faStar,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

const Pothole = () => (
  <div className="flex flex-col lg:flex-row p-6 bg-gray-100 min-h-screen">
    <aside className="w-full lg:w-1/4 bg-white shadow-md p-4 rounded-lg mb-6 lg:mb-0">
      <h2 className="font-bold text-xl mb-4">Challenges</h2>
      <div className="mb-4">
        <select className="w-full bg-gray-200 rounded px-3 py-2">
          <option>Category</option>
        </select>
      </div>
      <div className="mb-4">
        <div className="relative">
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
      </div>
      <div className="text-gray-600 mb-4">
        13 unresolved issues out of 40 reported challenges
      </div>
      <div className="space-y-4">
        {["Anonymous", "Michelle", "Anonymous", "Anonymous", "Sara"].map(
          (name, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt={name}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-gray-600 text-sm">shared challenges</p>
                </div>
              </div>
              <div>
                <button className="ml-4 bg-yellow-400 text-white px-2 py-1 rounded text-xs">
                  Join the effort
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </aside>
    <main className="flex-1 bg-white shadow-md p-4 rounded-lg lg:ml-6">
      <h2 className="font-bold text-xl mb-4">Anonymous</h2>
      <p className="mb-4">
        Join the community in addressing common challenges and finding solutions
        collaboratively. Let's work together to make our neighborhood a better
        place for everyone.
      </p>
      <p className="text-gray-600 mb-6">
        Thank you for raising awareness about the challenges faced in our
        community. We value your input and are dedicated to working with you to
        address these issues effectively. Let's create a positive impact
        together.
      </p>
      <div className="flex items-center mb-4 space-x-4">
        <button className="bg-gray-200 p-2 rounded">
          <FontAwesomeIcon icon={faShareSquare} />
        </button>
        <button className="bg-gray-200 p-2 rounded">
          <FontAwesomeIcon icon={faTag} />
        </button>
        <button className="bg-gray-200 p-2 rounded">
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button className="bg-gray-200 p-2 rounded">Categorize</button>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Describe the issue..."
          className="w-full bg-gray-200 rounded px-3 py-2"
        />
        <button className="ml-4 bg-blue-500 text-white px-3 py-2 rounded">
          <FontAwesomeIcon icon={faShareSquare} />
        </button>
      </div>
    </main>
  </div>
);

export default Pothole;
