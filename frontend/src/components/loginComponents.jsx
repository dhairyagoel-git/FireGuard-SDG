export  function AuthForm({ isLogin }) {
    return (
      <></>
    );
  }

  import React from "react";
import { useState } from "react";

export  function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <div className=" flex flex-col items-center justify-center w-full h-screen  bg-gray-100">
      <div className="bg-white p-8 rounded-lg  w-100">
        {/* 🔥 Welcome Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Welcome Back!" : "Join FireGuard"}
        </h2>
        <p className="text-sm text-gray-600 text-center mt-2">
          {isLogin ? "Log in to continue" : "Create an account to get started"}
        </p>

        {/* 🔄 Toggle between Login & Signup */}
        <div className="flex justify-center mt-4">
          <button
            className={`px-4 py-2 font-medium ${
              isLogin ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              !isLogin ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>



    <form className="mt-6 space-y-4 ">
        {/* 📩 Email Input */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
            required
            />
        </div>
  
        {/* 🔒 Password Input */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-md focus:ring focus:ring-red-300"
            required
            />
        </div>
  
        {/* 🔄 Remember Me & Forgot Password */}
        {isLogin && (
          <div className="flex justify-between items-center text-sm text-gray-600">
            {/* <label className="flex items-center ">
              <input type="checkbox" className="" />
              Forgot Password?
              </label> */}
            <a href="#" className="text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        )}
  
        {/* 🔘 Login / Signup Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition">
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>
        </div>
        </div>
    </>
  );
}

  