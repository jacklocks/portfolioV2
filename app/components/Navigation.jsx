"use client";
import React, { useState } from "react";
import styles from "../styles/navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul className={styles.nav}>
        <Link className={styles.link} href="/#about">
          <li id="cursor">à propos</li>
        </Link>
        <Link className={styles.link} href="/#projets">
          <li id="cursor">projets</li>
        </Link>
        <Link className={styles.link} href="/#contact">
          <li id="cursor">contact</li>
        </Link>
      </ul>
    </>
  );
};

export default Navigation;
