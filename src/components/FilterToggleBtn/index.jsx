// File to provide the filter component.

// React hooks.
import React, { useContext, useState } from "react";

// Components from Reactstrap.
import { OffcanvasHeader, Offcanvas, OffcanvasBody } from "reactstrap";

// Components
import Label from "../authentication/Label";
import Input from "../authentication/Input";
import Button from "../authentication/Button";

// Contexts
import CountriesContext from "../../contexts/CountriesContext";

// Styles
import styles from "./style.module.scss";

export default function FilterToggleBtn() {
  // State to open and close offcanvas.
  const [isOpen, setIsOpen] = useState(false);

  // Variables to store geographical size informations
  const [minGeographicalSizeInput, setMinGeographicalSizeInput] = useState("");
  const [maxGeographicalSizeInput, setMaxGeographicalSizeInput] = useState("");

  // Variables to store population size informations

  const [minPopulationSizeInput, setMinPopulationSizeInput] = useState("");
  const [maxPopulationSizeInput, setMaxPopulationSizeInput] = useState("");

  const { handleFilter, selectedContinents } = useContext(CountriesContext);

  // Function to close offcanvas and clear states.
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
    setMinGeographicalSizeInput("");
    setMaxGeographicalSizeInput("");
  };

  // Obs.: I divided these three functions because this ensures that it will returns the countries with the updated informations.

  // Function to set countries by its population size.
  const handlePopulationSizeChange = () => {
    const min =
      minPopulationSizeInput !== ""
        ? parseInt(minPopulationSizeInput, 10)
        : null;
    const max =
      maxPopulationSizeInput !== ""
        ? parseInt(maxPopulationSizeInput, 10)
        : null;

    return handleFilter(
      selectedContinents,
      {
        min: minGeographicalSizeInput,
        max: maxGeographicalSizeInput,
      },
      { min, max }
    );
  };

  // Function to set countries by its geographical size.
  const handleGeographicalSizeChange = () => {
    const min =
      minGeographicalSizeInput !== ""
        ? parseInt(minGeographicalSizeInput, 10)
        : null;
    const max =
      maxGeographicalSizeInput !== ""
        ? parseInt(maxGeographicalSizeInput, 10)
        : null;

    return handleFilter(
      selectedContinents,
      { min, max },
      { min: minPopulationSizeInput, max: maxPopulationSizeInput }
    );
  };

  // Function to set countries by its continent.
  const handleCheckboxChange = (continent) => {
    handleFilter(
      selectedContinents.includes(continent)
        ? selectedContinents.filter((c) => c !== continent)
        : [...selectedContinents, continent],
      { min: minGeographicalSizeInput, max: maxGeographicalSizeInput },
      { min: minPopulationSizeInput, max: maxPopulationSizeInput }
    );
  };

  return (
    <div>
      <Button
        text={
          <img
            src="\images\icons8-adjust-48.png"
            alt="adjust-icon"
            className={styles.adjustIcon}
          />
        }
        onClick={toggleOffcanvas}
        className={styles.filterButton}
      />

      <Offcanvas
        isOpen={isOpen}
        scrollable
        fade={false}
        toggle={toggleOffcanvas}
      >
        <OffcanvasHeader
          toggle={toggleOffcanvas}
          className={styles.offcanvasHeader}
        >
          <h1>Filter</h1>
        </OffcanvasHeader>
        <OffcanvasBody className={styles.offcanvas}>
          <hr />
          <p className={styles.inputTitle}>Continent</p>
          {[
            "Africa",
            "Europe",
            "Antarctica",
            "Asia",
            "Oceania",
            "North America",
            "South America",
          ].map((continent) => (
            <div className={styles.checkboxDiv} key={continent}>
              <Input
                id={`${continent}Input`}
                type="checkbox"
                onChange={() => handleCheckboxChange(continent)}
                checked={selectedContinents.includes(continent)}
                className={styles.checkboxInput}
              />
              <Label
                text={continent}
                htmlFor={`${continent}Input`}
                className={styles.checkboxLabel}
              />
              <br />
            </div>
          ))}
          <br />
          <hr />
          <p className={styles.inputTitle}>Geographical Size</p>
          <div className={styles.inputDiv}>
            <Input
              id="minGeographicalSizeInput"
              type="number"
              value={minGeographicalSizeInput}
              onChange={(e) => setMinGeographicalSizeInput(e.target.value)}
              onBlur={handleGeographicalSizeChange}
              className={styles.input}
              placeholder="min"
              autoComplete="off"
            />
            <br />

            <Input
              id="maxGeographicalSizeInput"
              type="number"
              value={maxGeographicalSizeInput}
              onChange={(e) => setMaxGeographicalSizeInput(e.target.value)}
              onBlur={handleGeographicalSizeChange}
              className={styles.input}
              placeholder="max"
              autoComplete="off"
            />
            <br />
          </div>
          <hr />
          <p className={styles.inputTitle}>Population</p>
          <div className={styles.inputDiv}>
            <Input
              id="minPopulationInput"
              type="number"
              onChange={(e) => setMinPopulationSizeInput(e.target.value)}
              onBlur={handlePopulationSizeChange}
              className={styles.input}
              placeholder="min"
              autoComplete="off"
            />
            <br />

            <Input
              id="maxPopulationInput"
              type="number"
              onChange={(e) => setMaxPopulationSizeInput(e.target.value)}
              onBlur={handlePopulationSizeChange}
              className={styles.input}
              placeholder="max"
              autoComplete="off"
            />
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}
