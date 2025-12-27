
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
    <>
         <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded bg-iceGray dark:bg-neutral-600 cursor-pointer"
        >
          {theme === "dark" ? 
          (
            <MoonIcon/>
          ) 
          : 
          (
            <SunIcon/>
          )
          }
        </button>
        
    </>
   
    
  );
}

export default ThemeToggle;
