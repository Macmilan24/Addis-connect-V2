import React from "react";

const Discussions = () => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="font-bold mb-4">Community Discussions</h2>
    <div className="mb-4">
      <p>User feedback on unresolved issues</p>
      <button className="bg-orange-400 text-white rounded px-4 py-2">
        Share your concerns
      </button>
    </div>
    <div>
      <p>Join the conversation on community topics</p>
      <button className="bg-orange-400 text-white rounded px-4 py-2">
        Share your experiences
      </button>
    </div>
  </div>
);

export default Discussions;
