"use client"
import { useState } from 'react';
import React from 'react';
import Link from 'next/link'
import styles from '../../assets/styles/components/menu.module.scss'



const Menu = () => {

    // Status to track active link
    const [activeLink, setActiveLink] = useState('');

    // function to update active link
    const handleSetActiveLink = (link) => {
        setActiveLink(link);
      };

    return (
        <div className={styles.menu}>
            <ul>
                <li className={activeLink ==='home' ? styles['nav-active'] : ''}><Link href='/' onClick={()=> handleSetActiveLink('home')}>Home</Link></li>
                <li className={activeLink ==='about' ? styles['nav-active'] : ''}><Link href='/about'onClick={()=> handleSetActiveLink('about')}>About</Link></li>
            </ul>
        </div>
    );
};

export default Menu;