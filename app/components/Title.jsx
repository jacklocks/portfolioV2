import React from "react";
import styles from "./title.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

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
        <div className={styles.socialLinkContainer}>
          <Link
            className={styles.socialLink}
            href="https://github.com/jacklocks"
            target="blank"
          >
            <FaGithub />
          </Link>
          <Link
            className={styles.socialLink}
            href="https://www.linkedin.com/in/eric-castets-b894156a/"
            target="blank"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Title;
