import React from 'react';
import styles from "../../assets/styles/pages/tips.module.scss"
import Logo from '../components/Logo';
import Menu from '../components/Menu';

const Tips = () => {
    return (
        <div className={styles.container}>
            <Logo/>
            <Menu/>
        </div>
    );
};

export default Tips;