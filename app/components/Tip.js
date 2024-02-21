import React from 'react';
import style from '../../assets/styles/components/tip.module.scss'

const Tip = ({tip}) => {

    const dateFormatter = (date)=>{
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month:"long",
            day:"numeric",
            hour:"numeric",
            minute:"numeric",
            second:"numeric",
        });
        return newDate;
    }

    return (
       <div className={style.tip}>
        <div className={style.header}>
            <h3>{tip.country}</h3>
            <em>Posté le {dateFormatter(tip.date)}</em>
        </div>
        <p>{tip.content}</p>
        <div className={style.btnContainer}>
            <button>Edit</button>
            <button>Remove</button>
        </div>

       </div>
    );
};

export default Tip;