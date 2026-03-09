import React from "react";
import { useTheme } from "./ThemeContext";
import "./theme.css";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <div className="theme-toggle-container">
      <button
        className={`theme-toggle-btn ${isLightMode ? "light" : "dark"}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className="theme-toggle-slider">
          <div className="theme-icon sun-icon">
            <BsSunFill />
          </div>
          <div className="theme-icon moon-icon">
            <BsMoonStarsFill />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
