import React from "react";
import {
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <div id="about" className={styles.aboutContainer}>
        <h2>à propos</h2>
        <p id="cursor">
          Je suis un <span>développeur web</span> enthousiaste, spécialisé dans
          JavaScript, React et Next.js, axé sur l'élaboration d'expériences
          utilisateur abouties.
        </p>
        <ul>
          <li id="cursor">
            <BiLogoFigma />
          </li>
          <li id="cursor">
            <BiLogoHtml5 />
          </li>
          <li id="cursor">
            <BiLogoCss3 />
          </li>
          <li id="cursor">
            <BiLogoSass />
          </li>
          <li id="cursor">
            <BiLogoJavascript />
          </li>
          <li id="cursor">
            <BiLogoReact />
          </li>
          <li id="cursor">
            <TbBrandNextjs />
          </li>
          <li id="cursor">
            <BiLogoMongodb />
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
