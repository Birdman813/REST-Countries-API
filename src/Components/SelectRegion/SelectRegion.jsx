import React, { useState } from "react";
import "./SelectRegion.css";
import downArrow from "../../assets/down-arrow.svg";

function SelectRegion({ region, setRegion, darkMode }) {
  const [filterClicked, setFilterClicked] = useState(false);
  return (
    <div>
      <div
        className="filter-region-container"
        onClick={() => setFilterClicked(!filterClicked)}
      >
        <button
          className={`filter-button ${
            darkMode ? "dark-mode-input" : "light-mode"
          }`}
        >
          Filter by Region
        </button>
        <img src={downArrow} alt="DownArrow" />
      </div>
      {filterClicked ? (
        <ul
          className={`regions-container ${
            darkMode ? "dark-mode-input" : "light-mode"
          }`}
        >
          <li
            onClick={() => {
              setRegion("All"), setFilterClicked(false);
            }}
            style={{ fontWeight: region === "All" ? "bold" : null }}
          >
            All
          </li>
          <li
            onClick={() => {
              setRegion("Asia"), setFilterClicked(false);
            }}
            style={{ fontWeight: region === "Asia" ? "bold" : null }}
          >
            Asia
          </li>
          <li
            onClick={() => {
              setRegion("Africa"), setFilterClicked(false);
            }}
            style={{ fontWeight: region === "Africa" ? "bold" : null }}
          >
            Africa
          </li>
          <li
            onClick={() => {
              setRegion("America"), setFilterClicked(false);
            }}
            style={{ fontWeight: region === "America" ? "bold" : null }}
          >
            America
          </li>
          <li
            onClick={() => {
              setRegion("Europe"), setFilterClicked(false);
            }}
            style={{ fontWeight: region === "Europe" ? "bold" : null }}
          >
            Europe
          </li>
          <li
            onClick={() => {
              setRegion("Oceania"), setFilterClicked(false);
            }}
            style={{ fontWeight: region === "Oceania" ? "bold" : null }}
          >
            Oceania
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default SelectRegion;
