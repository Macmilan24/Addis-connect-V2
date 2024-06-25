// src/login/LoginImageSection.js
import React from "react";

const LoginImageSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        Ready to report a challenge?
      </h2>
      <p className="my-4 text-lg md:text-xl">
        Join the community to make a change!
      </p>
      <div className="flex justify-center my-6">
        <img
          src="/img/logo.jpg"
          alt="Challenge"
          className="w-58 h-58 rounded-full object-cover"
        />
      </div>
      <p className="mt-4 text-lg">Share your challenges with others!</p>
    </div>
  );
};

export default LoginImageSection;
