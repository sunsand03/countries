import React from 'react';
import Image from 'next/image'
import styles from '../../assets/styles/components/logo.module.scss'


const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image
                src="/world.png"
                width={40}
                height={40}
                alt="image d'un globe"
            />
            <h3>The World</h3>
        </div>
    );
};

export default Logo;