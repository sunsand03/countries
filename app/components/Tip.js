import React, {useState} from 'react';
import style from '../../assets/styles/components/tip.module.scss'
import axios from 'axios'

const Tip = ({tip}) => {

    const [isEditing, setIsEditing]= useState(false);
    const [editContent, setEditContent]= useState("");

    /**
     * Format the date
     * @param {timestamp} date 
     * @returns {string} the formatted date
     */
    const dateFormatter = (date)=>{
        let newDate = new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month:"long",
            day:"numeric",
            hour:"numeric",
            minute:"numeric",
            second:"numeric",
        });
        return newDate;
    }

    /**
     * handle the editing of a tip 
     */
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
          console.error('Error updating article:', error);          
        });
        
    };

    /**
     * handle the deletion of a tip
     */
    // const handleDelete = ()=>{
    //     axios.delete('http://localhost:3004/articles/' + tip.id);
    //     window.location.reload();
    // }

    return (
       <div className={style.tip} style={{background: isEditing ? "#f3feff" : "white" }}>

            <div className={style.header}>
                <h3>{tip.country}</h3>
                <p>Posted on {dateFormatter(tip.date)}</p>
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
                {/* <button onClick={() => {
                    if (window.confirm("Do you really want to delete this tip ?")) {
                        handleDelete();
                    }
                }}>Delete</button> */}


            </div>
       </div>
    );
};

export default Tip;