import React from 'react';
import styles from '../../assets/styles/components/card.module.scss'
import Image from 'next/image'

const Card = ({country}) => {
    return (
      <li className={styles.card}>
              <Image
                src={country.flags.svg}
                width={150}
                height={100}
                alt={"flag of "+ country.translations.fra.common}
            />
            <div className={styles.infos}>
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>Pop: {country.population.toLocaleString()} hab</p>
            </div>
      </li>
    );
};

export default Card;