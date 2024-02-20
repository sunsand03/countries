"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../../assets/styles/components/countries.module.scss'
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36)

    // country data fetch
    useEffect(()=>{
        try{            
            axios.get("https://restcountries.com/v3.1/all")
            .then((response) =>setData(response.data))
            console.log(data);
        }catch(error){
            console.log("les données n'ont pas été récupérées", error);
        }
    }, [])

    return (
        <div className={styles.countries}>
            <ul className={styles.radioContainer}>
               <input type="range" min={1} max={250} defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/> 
            </ul>            
            <ul>
                {
                   data
                    .slice(0,rangeValue)
                    .map((country, index) =>(
                    <Card key={index} country={country}/>
                   )) 
                }
            </ul>
        </div>
    );
};

export default Countries;