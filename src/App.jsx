// React hooks
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Country from "./pages/Country";

// Contexts
import CountriesContext from "./contexts/CountriesContext";
import SearchContext from "./contexts/SearchContext";

// React Router import
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Framer-motion import
import { AnimatePresence } from "framer-motion";

function App() {
  // State to capture the countries from Rest Countries API
  const [countries, setCountries] = useState([]);

  // State to capture the countries based on filter changes.
  const [filteredCountries, setFilteredCountries] = useState([]);

  // State to capture the continents and apply'em on filter.
  const [selectedContinents, setSelectedContinents] = useState([]);

  // State to capture the countries searched on header search input.
  const [countriesSearched, setCountriesSearched] = useState([]);

  // Getting countries from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Erro ao buscar país:", error);
      }
    };

    fetchCountries();
  }, []);

  // Function to set the changes done on filter.
  // Parameters are empty because when reset button (on Header component) is clicked it ensures that everything was redefined.

  const handleFilter = (
    continents = [],
    geographicalSize = { min: "", max: "" },
    populationSize = { min: "", max: "" }
  ) => {
    // Here are filter configurations to select the countries: continent, geographical size and population size.
    const filtered = countries.filter((country) => {
      const passContinentFilter =
        continents.length === 0 ||
        continents.some((continent) => country.continents?.includes(continent));
      const passGeographicalSizeFilter =
        !geographicalSize.min | (country.area >= geographicalSize.min) &&
        (!geographicalSize.max || country.area <= geographicalSize.max);
      const passPopulationSize =
        (!populationSize.min || country.population >= populationSize.min) &&
        (!populationSize.max || country.population <= populationSize.max);

      return (
        passContinentFilter && passGeographicalSizeFilter && passPopulationSize
      );
    });

    setFilteredCountries(filtered);
    setSelectedContinents(continents);
  };

  return (
    <div className="root">
      <AnimatePresence mode="wait">
        <CountriesContext.Provider
          value={{
            countries,
            setCountries,
            filteredCountries,
            setFilteredCountries,
            selectedContinents,
            setSelectedContinents,
            handleFilter,
          }}
        >
          <SearchContext.Provider
            value={{ countriesSearched, setCountriesSearched }}
          >
            <RouterProvider router={router}>
              <Home />
              <Country />
            </RouterProvider>
          </SearchContext.Provider>
        </CountriesContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default App;
