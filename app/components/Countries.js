"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../../assets/styles/components/countries.module.scss'

const Countries = () => {

    const [data, setData] = useState([]);

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
            <h1>Countries</h1>
            <ul>
                {
                   data.map((country) =>(
                    <li key={country.tID}>{country.translations.fra.common}</li>
                   )) 
                }
            </ul>
        </div>
    );
};

export default Countries;