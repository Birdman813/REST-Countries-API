import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";

function App() {
  const [country, setCountry] = useState();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={darkMode ? "dark-mode" : null}>
        <Routes>
          <Route
            path="/"
            element={<HomePage setCountry={setCountry} darkMode={darkMode} />}
          />
          <Route
            path="/:countryName"
            element={
              <CountryPage
                country={country}
                setCountry={setCountry}
                darkMode={darkMode}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
