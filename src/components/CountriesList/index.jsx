// File to provide a countries list component

// React hooks
import { useContext } from "react";

// Component
import CountryCard from "../CountryCard";

// Contexts
import CountriesContext from "../../contexts/CountriesContext";
import SearchContext from "../../contexts/SearchContext";

// Styles
import styles from "./style.module.scss";

export default function CountriesList() {
  const { filteredCountries } = useContext(CountriesContext);
  const { countriesSearched } = useContext(SearchContext);

  // Variable to store countries to render. They can be the filtered or the searched.
  const countriesToRender =
    countriesSearched.length === 0 ? filteredCountries : countriesSearched;

  return (
    <div>
      <ul>
        {/* Ternary operator to verify if the countries to render aren't empty. If empty, it shows an error message. */}
        {countriesToRender == 0 ? (
          <div className={styles.noneCountry}>
            <h1>Ops... </h1>
            <h1>No country found. Try again.</h1>
            <h1>:(</h1>
          </div>
        ) : (
          <div className={styles.countriesList}>
            {countriesToRender.map((country) => (
              <CountryCard
                key={country.name.common}
                commonName={country.name.common}
                officialName={country.name.official}
                flags={country.flags.svg}
                capital={country.capital}
                area={country.area}
                population={country.population}
                continents={country.continents}
                coatOfArms={country.coatOfArms.svg}
              />
            ))}
          </div>
        )}
      </ul>
      <a href="#top" className={styles.fixedAnchor}>
        <img src="\geography-with-rest-countries-api\images\favicon\icons8-globe-showing-americas-32.png" />
      </a>
    </div>
  );
}
