import React from "react";
import styles from "./title.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Title = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.name}>éric Castets</h1>
        <h1 className={styles.title1}>développeur</h1>
        <h1 className={styles.title2}>web</h1>
        <div className={styles.titleEnd}>
          <h1 className={styles.title1}>front </h1>
          <h1 className={styles.title2}>end</h1>
        </div>
        <div className={styles.socialLink}>
        <FaGithub />
        <FaLinkedin />
      </div>
       
      </div>
      
    </>
  );
};

export default Title;
