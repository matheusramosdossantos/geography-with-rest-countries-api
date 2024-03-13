// File to provide a country card component.

// React Router import
import { Link } from "react-router-dom";

// Styles
import styles from "./style.module.scss";

// React hooks
import { useEffect } from "react";

export default function CountryCard({
  flags,
  commonName,
  officialName,
  capital,
  area,
  population,
  continents,
  coatOfArms,
}) {
  // This useEffect ensures that the scroll position when the user gets back from Country page will be the same when he entered.
  // On localStorage is saved the scroll position.
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem("scroll");

    if (savedScrollPosition) {
      window.scrollTo({
        top: parseInt(savedScrollPosition, 10),
        behavior: "instant",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const saveScrollPosition = () => {
    const scrollPosition = window.scrollY.toString();
    localStorage.setItem("scroll", scrollPosition);
  };

  return (
    <div className={styles.card} key={commonName}>
      <Link
        to={`geography-with-rest-countries-api/${commonName}`}
        location={location}
      >
        <img src={flags} className={styles.flag} onClick={saveScrollPosition} />
      </Link>
      <h1 className={styles.commonName}>{commonName}</h1>
      <h5 className={styles.officialName}>{officialName}</h5>
      <hr />
      <div className={styles.countryInfo}>
        <div>
          <h6 className={styles.capital}>
            Capital:
            <p>{capital}</p>
          </h6>
          <h6 className={styles.area}>
            Geographical size: <p>{area} km²</p>
          </h6>
        </div>
        <div>
          <h6 className={styles.population}>
            Population: <p>{population}</p>
          </h6>
          <h6 className={styles.continents}>
            Continent: <p>{continents}</p>
          </h6>
        </div>
      </div>
      <hr />
      <Link
        to={`geography-with-rest-countries-api/${commonName}`}
        className={styles.link}
      >
        <div className={styles.coatOfArmsDiv}>
          <img
            src={coatOfArms}
            className={styles.coatOfArms}
            onClick={saveScrollPosition}
          />
          {/* Ternary operator to verify if there is a coat of arms. If not, it returns a simple text. */}
          {coatOfArms ? (
            <h6 className={styles.coatOfArmsText}>Coat of arms</h6>
          ) : (
            <h6 className={styles.coatOfArmsText}>None coat of arms.</h6>
          )}
        </div>
      </Link>
    </div>
  );
}
