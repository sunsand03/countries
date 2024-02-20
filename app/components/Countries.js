"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../assets/styles/components/countries.module.scss";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  // country data fetch
  useEffect(() => {
    try {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => setData(response.data));
      console.log(data);
    } catch (error) {
      console.log("les données n'ont pas été récupérées", error);
    }
  }, []);

  return (
    <div className={styles.countries}>
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
                onChange={(e)=> 
                setSelectedRadio(e.target.id)}/>
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={()=> setSelectedRadio("")}>Annuler la recherche</button>
      )}
      <ul>
        {data            
            .filter((country)=> country.continents[0].includes(selectedRadio))
            .sort((a,b)=> b.population - a.population)
            .slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
