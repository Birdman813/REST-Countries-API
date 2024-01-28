import React from "react";
import data from "../../../data.json";
import CountryCard from "../../Components/CountryCard/CountryCard";

function CountriesInAsia({ setCountry }) {
  const countries = data;
  const countriesInAsia = countries.filter(
    (country) => country.region === "Asia"
  );
  console.log(countriesInAsia);
  return (
    <>
      <div className="country-cards-container">
        {countriesInAsia.map((country, index) => {
          return (
            <CountryCard
              key={index}
              country={country}
              setCountry={setCountry}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountriesInAsia;
