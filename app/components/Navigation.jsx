"use client";
import React, { useState } from "react";
import styles from "../styles/navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul className={styles.nav}>
        <li id="cursor">
          <Link className={styles.link} href="/#about">
            à propos
          </Link>
        </li>

        <li id="cursor">
          <Link className={styles.link} href="/#projets">
            projets
          </Link>
        </li>

        <li id="cursor">
          <Link className={styles.link} href="/#contact">
            contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
