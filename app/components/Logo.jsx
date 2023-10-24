import React from "react";
import logo from "../assets/img/logo-port.webp";
import Image from "next/image";
import styles from "../styles/logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <>
    <Link href="/">
      <Image className={styles.logo} src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
