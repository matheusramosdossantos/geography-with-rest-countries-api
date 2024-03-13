// File to provide a header component.

// React hooks
import { useContext, useState } from "react";

// Components
import Input from "../authentication/Input";
import Label from "../authentication/Label";
import FilterToggleBtn from "../FilterToggleBtn";
import Button from "../authentication/Button";

// Contexts
import SearchContext from "../../contexts/SearchContext";
import CountriesContext from "../../contexts/CountriesContext";

// React Router import
import { Link } from "react-router-dom";

// Styles
import styles from "./style.module.scss";

export default function Header({ text2, imgSrc, imgAlt }) {
  // State to store the searched country.
  const [searchTerm, setSearchTerm] = useState("");

  const { setCountriesSearched } = useContext(SearchContext);

  const { handleFilter } = useContext(CountriesContext);

  // Function to provide the searched country on API.
  // If the country doesn't exist it returns a simple alert.
  const fetchCountry = async (name) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );

      if (!response.ok) {
        alert("Country not found.");
        throw new Error(`Requisition error: ${response.status}`);
      }

      const data = await response.json();
      setCountriesSearched(data);
    } catch (error) {
      console.error("Error searching for country:", error);
    }
  };

  return (
    <header className={styles.header}>
      <div>
        <FilterToggleBtn />
        <img src={imgSrc} alt={imgAlt} className={styles.earthGif} />
      </div>
      <div className={styles.searchItem}>
        <Input
          className={styles.searchInput}
          type="search"
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <Label
          className={`${styles.searchLabel} ${searchTerm && styles.hasValue}`}
          text="Country name"
        />
        <br />
        <Link to={"/"}>
          <Button
            className={styles.searchButton}
            onClick={() => fetchCountry(searchTerm)}
            text="Find"
          />
        </Link>
        <Link to={"/"}>
          <Button
            className={styles.resetButton}
            onClick={() => {
              setCountriesSearched([]);
              setSearchTerm("");
              handleFilter();
            }}
            text="Reset"
          />
        </Link>
      </div>
      <a href="#about" className={styles.about}>
        <h3>{text2}</h3>
      </a>
    </header>
  );
}
