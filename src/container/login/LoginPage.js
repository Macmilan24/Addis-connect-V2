import React from "react";
import LoginForm from "./LoginForm";
import LoginImageSection from "./LoginImageSection";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-beige p-10">
        <LoginImageSection />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
