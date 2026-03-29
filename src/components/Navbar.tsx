import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
          <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200 backdrop-blur-md bg-white/70 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-700 tracking-tight">
        Code-Atlas
      </h1>
    
      <div className="flex items-center gap-4">
        {/* Login */}
        <Link to="/login">
          <button className="text-sm font-medium text-gray-700 hover:text-indigo-700 transition">
            Login
          </button>
        </Link>
    
        {/* Signup */}
        <Link to="/signup">
          <button className="bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-800 transition shadow-sm">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
    );  
};

export default Navbar;