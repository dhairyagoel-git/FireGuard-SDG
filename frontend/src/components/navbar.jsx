import React from "react";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [isdark, setisdark] = useState(false);
  const [themeMode, setthemeMode] = useState("light");
  const onChangeButton = (e) => {
    if (isdark == false) {
      darktheme();
    } else {
      lighttheme();
    }
    setisdark(!isdark);
  };
  const lighttheme = () => {
    setthemeMode("light");
    console.log(themeMode);
  };
  const darktheme = () => {
    setthemeMode("dark");
    console.log(themeMode);
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <header className="flex sticky top-0 z-30 justify-between items-center px-6 py-4 bg-white shadow-md dark:bg-[#161616] dark:shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 text-red-600 font-bold text-xl dark:text-[#D1BFA7]">
          <span>🔥</span>
          <span>FIREGUARD</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium dark:text-[#D1BFA7]">
          {["/home", "/maps", , "/dashboard"].map((path) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-red-500 dark:hover:text-[#E56A1E] ${
                location.pathname === path
                  ? "text-red-500 font-semibold dark:text-[#8B5E3C]" // Brown for selected tab
                  : "text-gray-700 dark:text-[#D1BFA7]"
              }`}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            className="text-gray-600 hover:text-gray-800 dark:text-[#D1BFA7] dark:hover:text-white cursor-pointer"
            onClick={onChangeButton}
          >
            {isdark == false ? "☀️" : "🌙"}
          </button>

          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-gray-800 dark:text-[#D1BFA7] dark:hover:text-white">
            🔔
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full dark:bg-[#E56A1E]">
              3
            </span>
          </button>

          {/* Profile/Login */}
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 dark:bg-[#6D0F1C] dark:hover:bg-[#8B5E3C]">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </header>
    </>
  );
}
export default Navbar;
