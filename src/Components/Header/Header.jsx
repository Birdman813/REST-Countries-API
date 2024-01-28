import React from "react";
import iconMoon from "../../assets/icon-moon.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  return (
    <div
      className={`header-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <h3 onClick={() => navigate("/")}>Where in the world?</h3>
      <div className="mode-container" onClick={() => setDarkMode(!darkMode)}>
        <img src={iconMoon} alt="Moon" />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
