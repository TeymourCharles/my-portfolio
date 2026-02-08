
import { useEffect, useState } from "react";

import SunIcon from "../assets/icon_components/SunIcon";
import MoonIcon from "../assets/icon_components/MoonIcon";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme to <html> whenever it changes
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-3 lg:w-full lg:dark:bg-neutral-700 lg:bg-neutral-100 rounded-2xl">
      <h6 className="w-full text-center lg:block hidden">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </h6>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative p-3 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
      >
        <div className="w-5 h-5 relative">
          {/* Moon Icon */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
          }`}>
            <MoonIcon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          </div>
          
          {/* Sun Icon */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
          }`}>
            <SunIcon className="w-5 h-5 text-amber-500" />
          </div>
        </div>
      </button>
    </div>
   
    
  );
}

export default ThemeToggle;
