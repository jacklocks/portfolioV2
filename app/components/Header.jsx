import React from "react";
import logo from "./Logo";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styles from "./header.module.css"

const Header = () => {
  return (
    <>
    <header className={styles.nav}>
      <Logo />
      <Navigation />
      </header>
    </>
  );
};

export default Header;
