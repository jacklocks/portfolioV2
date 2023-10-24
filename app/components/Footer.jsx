"use client";
import React from "react";
import { BiCopyright } from "react-icons/bi";
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <>
    <section className={styles.footerSection}>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.copyrightContainer}>
            <BiCopyright className={styles.iconCopyright} /> 
            <p>2023</p>
          </div>
          <div className={styles.textFooter}>
          <p>créé par éric castets</p>
          </div>
        </div>
      </footer>
      </section>
    </>
  );
};

export default Footer;
