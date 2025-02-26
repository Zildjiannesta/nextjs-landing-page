"use client";

import { useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react"; // Menggunakan ikon dari lucide-react

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="header-main">
      <div className="top-line" />
      <div className="header-container">
        <div className="header-logo-box">
          <div className="logo-container">
            <a href="#"><Image src="https://davidhaz.com/assets/david-logo-black-BZZMoFau.svg" alt="Logo" fill className="object-contain" /></a>
          </div>
        </div>

        <div>
          <nav className="navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a target="_blank" href="https://davidhaz.blog/">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* <nav className="flex items-center space-x-6 bg-white shadow-lg rounded-full px-6 py-2">
          <a href="#" className="text-black">Projects</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Blog</a>
          <a href="#" className="text-black">Contact</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav> */}

      </div>
    </header>
  );
};

export default Header;
