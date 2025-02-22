import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white text-black py-2 px-4 flex justify-between items-center shadow-md">
      {/* Left Side - Company Name */}
      <div className="text-xl font-bold">Duke's Table</div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Right Side - Navigation Links */}
      <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-2 md:p-0`}>
        <button onClick={() => navigate("/")} className="block md:inline hover:text-orange-600 p-1 md:p-0">Home</button>
        <button onClick={() => navigate("/vendor/dashboard")} className="block md:inline hover:text-orange-600 p-1 md:p-0">Admin</button>
        <button onClick={() => navigate("/login")} className="block md:inline hover:text-orange-600 p-1 md:p-0">Login/Register</button>        
      </div>
    </nav>
  );
};

export default Navbar;
