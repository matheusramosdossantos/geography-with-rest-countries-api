// Country informations page

// React hooks
import { useContext } from "react";

// React Router import
import { Link, ScrollRestoration, useParams } from "react-router-dom";

// Context
import CountriesContext from "../contexts/CountriesContext";

// Components
import Container from "../components/Container";
import Button from "../components/authentication/Button";

// Styles
import styles from "../components/Container/style.module.scss";

// Framer-motion import
import { motion } from "framer-motion";

export default function Country() {
  // React Router hook
  const { commonName } = useParams();

  // Countries context
  const { countries } = useContext(CountriesContext);

  // Variable to find the country by the name and load it on that page.
  const country = countries.find(
    (country) => country.name.common === commonName
  );

  return (
    <Container className={styles.countryContainer}>
      <ScrollRestoration />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <Link to="/">
              <Button className={styles.backButton} text="↺" />
            </Link>
            <img src={country.flags.svg} className={styles.flag} />
          </div>
          <h1 className={styles.commonName}>{country.name.common}</h1>
          <h2 className={styles.officialName}>{country.name.official}</h2>
          <div className={styles.countryInfo}>
            <h5 className={styles.capital}>Capital:</h5>
            <p className={styles.capital}>{country.capital}</p>
            <h5 className={styles.area}>Geographical size:</h5>
            <p className={styles.area}>{country.area} km²</p>
            <h5 className={styles.population}>Population:</h5>
            <p className={styles.population}>{country.population}</p>
            <h5 className={styles.continents}>Continents:</h5>
            <p className={styles.continents}>{country.continents}</p>
            <h5 className={styles.region}>Region:</h5>
            <p className={styles.region}>{country.region}</p>
            <h5 className={styles.subregion}>Subregion:</h5>
            <p className={styles.subregion}>{country.subregion}</p>
            <h5 className={styles.languagesTitle}>Languages:</h5>
            <div>
              {/* Here languages are rendered with map method. I used "Object.values" because languages
              on Rest Countries are objects. */}
              {Object.values(country.languages).map((languages) => (
                <li
                  className={styles.languageParagraph}
                  key={country.name.common}
                >
                  {languages}
                </li>
              ))}
            </div>
          </div>
          <img className={styles.coatOfArms} src={country.coatOfArms.svg} />
        </section>
      </motion.div>
    </Container>
  );
}
