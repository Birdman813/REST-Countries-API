import React from "react";
import "./CountryCard.css";
import { useNavigate } from "react-router-dom";

function CountryCard({ country, setCountry, darkMode }) {
  const navigate = useNavigate();
  return (
    <div
      className={`country-container ${darkMode ? "dark-mode" : "light-mode"}`}
      onClick={() => {
        navigate(`/${country.name}`);
        setCountry(country);
      }}
    >
      <img src={country.flag} alt="Flag" />
      <div className="country-info">
        <h2>{country.name}</h2>
        <span>Population: {country.population.toLocaleString()}</span>
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
      </div>
    </div>
  );
}

export default CountryCard;
