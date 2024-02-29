import React from "react";
import styles from '../../assets/styles/components/about.module.scss'
import Image from 'next/image'
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className={styles.about}>
        <Logo/>
        <Menu />
        <h1>The countries of the world</h1>
      <p>
        There are <b>195 countries</b> in the world today. This total comprises 193
        countries that are member states of the United Nations and 2 countries
        that are non-member observer states: the Holy See and the State of
        Palestine.
      </p>

      <Image src="/Map.jpg" width={500} height={300} alt="map of the world"/>

     
      <h2>Where are they located ?</h2>

      <p>Of the 195 countries in the world:</p>

      <ul>
        <li>54 countries are in Africa</li>
        <li>48 in Asia</li>
        <li>44 in Europe</li>
        <li>33 in Latin America and the Caribbean</li>
        <li>14 in Oceania</li>
        <li>2 in Northern America</li>
      </ul>
      <Footer/>
    </div>
    
  );
};

export default About;
