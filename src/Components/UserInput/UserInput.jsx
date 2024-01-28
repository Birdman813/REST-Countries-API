import React, { useState } from "react";
import "./UserInput.css";
import iconSearch from "../../assets/search.svg";

function UserInput({ darkMode, setUserInput }) {
  return (
    <div className="input-container">
      <img src={iconSearch} alt="Search" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => {
          setUserInput(
            e.target.value
              ? e.target.value[0].toUpperCase() + e.target.value.slice(1)
              : ""
          );
        }}
        className={darkMode ? "dark-mode-input" : null}
      />
    </div>
  );
}

export default UserInput;
