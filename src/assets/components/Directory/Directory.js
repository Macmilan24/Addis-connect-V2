import React from "react";

const Directory = () => (
  <div className="bg-gray-200 p-4 rounded shadow mt-4">
    <h2 className="font-bold mb-4">Community Directory</h2>
    {["John D.", "Jane P.", "Mark L.", "Sarah K."].map((name, index) => (
      <div key={index} className="flex items-center mb-4">
        <img
          src={`https://i.pravatar.cc/${48 + Math.floor(Math.random() * 10)}/`}
          alt={name}
          className="rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-600">Community Member</p>
        </div>
      </div>
    ))}
  </div>
);

export default Directory;
