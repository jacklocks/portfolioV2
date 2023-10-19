import React from "react";
import styles from "./navigation.module.css"

const Navigation = () => {
  return (
    <>
      <ul className={styles.nav}>
        <li className={styles.link}>à propos</li>
        <li className={styles.link}>projets</li>
        <li className={styles.link}>contact</li>
      </ul>
    </>
  );
};

export default Navigation;
