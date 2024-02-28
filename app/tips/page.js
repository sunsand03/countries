"use client";
import React, { useEffect, useState } from 'react';
import styles from "../../assets/styles/pages/tips.module.scss";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import axios from "axios";
import Article from "../components/Tip";

const Tips = () => {

  const [tips, setTips] = useState([]);
  const [country, setCountry] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

    // fetch data via json-server of file db.json
  const getData = () => {
    try {
      axios
        .get("http://localhost:3004/articles")
        .then((res) => setTips(res.data));
    } catch (e) {
      console.log("the data has not been recovered", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      axios.post("http://localhost:3004/articles", {
        country,
        content,
        date : Date.now()
      })
      setError(false);
      setCountry("");
      setContent("");
      getData();
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
      <h1>Tips for travelling</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="Country"
          onChange={(e)=>setCountry(e.target.value)}
          value={country} 
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="share your tips"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Send" />
      </form>
      <ul>
        {tips
        .sort((a,b) => (b.date-a.date))
        .map((tip)=>(
            <li key={tip.id}><Article tip={tip}/></li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
