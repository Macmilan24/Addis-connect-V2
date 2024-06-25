import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Get started for free
      </h2>
      <p className="mb-6">Experience ad-free collaboration. Cancel anytime.</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your full name"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Your unique username"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Create a password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Repeat password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <Link to="/home">
          <button className="w-full bg-orange-500 text-white py-3 rounded">
            Sign up
          </button>
        </Link>
      </form>
      <p className="text-center my-4">or join with</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-gray-100 py-2 px-4 rounded">Google</button>
        <button className="bg-gray-100 py-2 px-4 rounded">Facebook</button>
      </div>
      <p className="text-right mt-4">
        <a href="#ss" className="text-sm text-gray-500">
          New here? Sign up now!
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
