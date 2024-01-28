import React, { useEffect } from "react";
import "./CountryPage.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../../data.json";

function CountryPage({ country, setCountry, darkMode }) {
  const navigate = useNavigate();
  const countries = data;
  const { countryName } = useParams();
  useEffect(() => {
    if (!country || country.name !== countryName) {
      const foundCountry = data.find((country) => country.name === countryName);

      if (foundCountry) {
        setCountry(foundCountry);
      }
    }
  }, [country, countryName, setCountry]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`country-info-container ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <button
        onClick={() => navigate("/")}
        className={`back-button ${darkMode ? "dark-mode-input" : "ligth-mode"}`}
      >
        ⬅ Back
      </button>
      <div className="country-page-main-container">
        <div>
          <img src={country.flag} alt="Flag" />
        </div>
        <div className="country-data-container">
          <div>
            <h1>{country.name}</h1>
            <div>
              <span>Native Name: </span>
              {country.nativeName}
            </div>
            <div>
              <span>Population: </span>
              {country.population.toLocaleString()}
            </div>
            <div>
              <span>Region: </span>
              {country.region}
            </div>
            <div>
              <span>Sub.Region: </span>
              {country.subregion}
            </div>
            <div>
              <span>Capital: </span>
              {country.capital}
            </div>
          </div>
          <div>
            <div>
              <span>Top Level Domain: </span>
              {country.topLevelDomain}
            </div>
            <div>
              <span>Currencies: </span>
              {country.currencies.map((currency, index) => {
                return (
                  <span key={index} id="span">
                    {currency.name}
                  </span>
                );
              })}
            </div>
            <div>
              <span>Languages: </span>
              {country.languages.map((language, index) => {
                return (
                  <span key={index} id="span">
                    {language.name}
                    {index < country.languages.length - 1 && ","}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <span>Border Countries: </span>
            <div className="border-buttons-container">
              {country.borders
                ? country.borders.map((border, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          countries.map((country) => {
                            if (country.alpha3Code === border) {
                              const newCountry = country;
                              setCountry(newCountry);
                              navigate(`/${country.name}`);
                            }
                          });
                        }}
                        className={darkMode ? "dark-mode-input" : "light-mode"}
                      >
                        {border}
                      </button>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
