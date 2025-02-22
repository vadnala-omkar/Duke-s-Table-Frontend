import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { phone, otp });
  };

  const handleSendOtp = () => {
    console.log("OTP sent to:", phone);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin} 
        className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded mt-1 transition-colors duration-300 ease-in-out focus:border-blue-500"
              required
            />
            <button 
              type="button" 
              onClick={handleSendOtp} 
              className="bg-green-500 text-white px-3 py-1 rounded mt-1 transition-transform duration-300 ease-in-out hover:bg-green-600 hover:scale-105">
              Send OTP
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border rounded mt-1 transition-colors duration-300 ease-in-out focus:border-blue-500"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
          Login
        </button>
        <p 
          className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
          onClick={() => navigate("/register")}>
          Don't have an account? Create a new account
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
