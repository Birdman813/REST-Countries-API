import React, { useState } from "react";
import UserInput from "../Components/UserInput/UserInput";
import SelectRegion from "../Components/SelectRegion/SelectRegion";
import CountryCard from "../Components/CountryCard/CountryCard";
import data from "../../data.json";

function HomePage({ setCountry, darkMode }) {
  const countries = data;
  const [region, setRegion] = useState("All");
  const [userInput, setUserInput] = useState();
  const countriesInAsia = countries.filter(
    (country) => country.region === "Asia"
  );
  const countriesInAfrica = countries.filter(
    (country) => country.region === "Africa"
  );
  const countriesInEurope = countries.filter(
    (country) => country.region === "Europe"
  );
  const countriesInAmerica = countries.filter(
    (country) => country.region === "Americas"
  );
  const countriesInOceania = countries.filter(
    (country) => country.region === "Oceania"
  );
  const filteredCountries = countries.filter((country) =>
    country.name.includes(userInput)
  );
  return (
    <>
      <div className="input-region-container">
        <UserInput darkMode={darkMode} setUserInput={setUserInput} />
        <SelectRegion
          region={region}
          setRegion={setRegion}
          darkMode={darkMode}
        />
      </div>
      {userInput ? (
        <div className="country-cards-container">
          {filteredCountries.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : region === "Asia" ? (
        <div className="country-cards-container">
          {countriesInAsia.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : region === "Europe" ? (
        <div className="country-cards-container">
          {countriesInEurope.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : region === "America" ? (
        <div className="country-cards-container">
          {countriesInAmerica.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : region === "Africa" ? (
        <div className="country-cards-container">
          {countriesInAfrica.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : region === "Oceania" ? (
        <div className="country-cards-container">
          {countriesInOceania.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      ) : (
        <div className="country-cards-container">
          {countries.map((country, index) => {
            return (
              <CountryCard
                key={index}
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default HomePage;
