"use client";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToogle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="relative w-16 h-8 flex items-center
        dark:bg-gray-500 bg-gray-500 cursor-pointer rounded-full p-1
       "
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={18} />
      <div className={`absolute ${darkMode?'left-[2px]':'right-[2px]'} bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-500`}></div>
      <BsSunFill className="ml-auto text-yellow-400" />
    </div>
  );
};

export default ThemeToogle;
