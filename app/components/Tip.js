import React, {useState} from 'react';
import style from '../../assets/styles/components/tip.module.scss'
import axios from 'axios'

const Tip = ({tip}) => {

    const [isEditing, setIsEditing]= useState(false);
    const [editContent, setEditContent]= useState("");


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

    const handleEdit = ()=>{
        const data ={
            country : tip.country,
            content : editContent ? editContent : tip.content,
            updatedDate: Date.now(),
    
        };
        
        axios
        .put('http://localhost:3004/articles/' + tip.id, data)
        .then(() => {
          setIsEditing(false);
        })
        .catch(error => {
          // Gestion des erreurs
          console.error('Error updating article:', error);
          // Traitez l'erreur selon vos besoins
        });
      
        
    };

    return (
       <div className={style.tip} style={{background: isEditing ? "#f3feff" : "white" }}>
        <div className={style.header}>
            <h3>{tip.country}</h3>
            <em>Posté le {dateFormatter(tip.date)}</em>
        </div>
        {
            isEditing ? (
                <textarea 
                    defaultValue={editContent ? editContent: tip.content}
                    autoFocus 
                    onChange={(e)=> setEditContent(e.target.value)}></textarea>
            ):(
                <p>{editContent ?  editContent : tip.content}</p>
            )
               
        }
        <div className={style.btnContainer}>
            {
                isEditing ? (
                    <button onClick={()=>handleEdit()}>Valider</button>
                ) : (
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                )
            }
            <button>Remove</button>
        </div>

       </div>
    );
};

export default Tip;