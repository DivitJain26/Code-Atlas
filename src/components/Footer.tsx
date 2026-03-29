import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Code-Atlas — Academic Coding Platform
      </footer>
    );  
};

export default Footer;