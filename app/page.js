"use client"

import { useEffect } from "react";
import styles from "./page.module.css";

let Home = () => {
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/adding-blog")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);
  return (
      <div className={styles.page}>
        <h1>This is the homepage.</h1>
      </div>
  );
};

export default Home;
