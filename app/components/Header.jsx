"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styles from "../styles/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={styles.nav}>
        <Logo />
        <Link href="/login-admin" id="adminLink" style={{ display: "none" }}>
          <h5>admin</h5>
        </Link>
        <Navigation />
      </header>
    </>
  );
};

const NavbarWithAdminLink = () => {
  const [typedKeys, setTypedKeys] = useState("");

  useEffect(() => {
    const adminSequence = process.env.NEXT_PUBLIC_ADMIN_KEY;
    const handleKeyDown = (event) => {
      const newTypedKeys = (typedKeys + event.key).slice(-adminSequence.length);
      setTypedKeys(newTypedKeys);
    };
    // Vérifiez si la séquence correspond à "admin"
    if (typedKeys === adminSequence) {
      const adminLink = document.getElementById("adminLink");
      if (adminLink) {
        adminLink.style.display = "block";
      }
    }
    // Écoute l'événement keydown pour détecter les touches pressées
    document.addEventListener("keydown", handleKeyDown);
    // Désinscrivez-vous de l'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [typedKeys]);
  return <Header />;
};
export default NavbarWithAdminLink;
