import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import blog from "./Blog";
import About from './About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <nav className="bg-white text-gray-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4" >
        {/* Company Name */}
        <div className="text-2xl font-bold cursor-pointer flex items-center space-x-2">
  <span>
    <img
      src="https://res.cloudinary.com/drekpzxw7/image/upload/v1741512093/DALL_E_2025-03-09_14.47.20_-_A_stylish_and_modern_logo_icon_for_Duke_s_Table_._The_design_should_feature_a_combination_of_a_royal_crown_and_a_dining_table_symbolizing_elegance_a_teebhr.webp"
      alt="Duke's Table Logo"
      className="w-10 h-10 object-contain rounded-full border-2 border-gray-300 shadow-lg shadow-orange-500/50"
    />
  </span>
  <span className="text-orange-500 drop-shadow-lg">Duke's Table</span>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => navigate("/")} className="hover:text-orange-500 cursor-pointer">Home</button>
          <button onClick={() => navigate("/cart")} className="hover:text-orange-500 flex items-center cursor-pointer">
            <ShoppingCart className="mr-1" size={20} /> Cart
          </button>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 cursor-pointer">Admin</a>

          <button  onClick={() => navigate("/login")} className="hover:text-orange-500 cursor-pointer">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white text-gray-700">
          <div className="hover:text-orange-500 cursor-pointer" onClick={() => {navigate("/"); setIsOpen(false);}}>Home</div>
          <div  className="hover:text-orange-500 flex items-center cursor-pointer"  onClick={() => {navigate("/cart"); setIsOpen(false); }}   > 
            <ShoppingCart className="mr-1" size={20} /> Cart
          </div>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 cursor-pointer">Admin</a>
          <div className="hover:text-orange-500 cursor-pointer" onClick={() => {navigate("/login"); setIsOpen(false);}}>Login</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
