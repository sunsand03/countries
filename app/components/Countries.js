"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/pages/countries.module.scss";
import Card from "./Card";

const Countries = () => {
  // state of data retrieved by the API
  const [data, setData] = useState([]);

  // State for the number of countries displayed
  const [rangeValue, setRangeValue] = useState(36);

  // array listing the continents
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // State for the selected continents
  const [selectedRadio, setSelectedRadio] = useState("");

  // State of data loading
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetching data via the API
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setData(response.data);
        setIsLoaded(true);        
      })
      .catch((error) => {
        console.log("les données n'ont pas été récupérées", error);
      });
  }, []);

  return (
    <div className={styles.countries}>      

      {/* Displays the bar to select the number of countries displayed or to filter them by continent */}
      <ul className={styles.radioContainer}>
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent, index) => (
          <li key={index}>
            <input
              type="radio"
              id={continent}
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>

      {/* Create a button to remove the applied filter */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}

      <h1>Learn the different flags of the countries of the world !</h1>

      {/* Displays a paragraph when the data loading is not complete */}
      {!isLoaded && (<p>Loading....</p>)} 

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
