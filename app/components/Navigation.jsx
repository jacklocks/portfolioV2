import React from "react";
import styles from "./navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul className={styles.nav}>
        <Link className={styles.link} href="/#about">
          <li>à propos</li>
        </Link>
        <Link className={styles.link} href="/#projets">
          <li>projets</li>
        </Link>
        <Link className={styles.link} href="/#contact">
          <li>contact</li>
        </Link>
      </ul>
    </>
  );
};

export default Navigation;
