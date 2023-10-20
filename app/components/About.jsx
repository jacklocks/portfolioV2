import React from 'react'
import { BiLogoFigma, BiLogoHtml5, BiLogoCss3, BiLogoSass, BiLogoJavascript, BiLogoReact, BiLogoMongodb } from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import styles from "./about.module.css"


const About = () => {
  return (
    <>
    <div className={styles.aboutContainer}>
    <h2>à propos</h2>
    <p>Je suis un <span>développeur web</span> enthousiaste, spécialisé dans JavaScript, React et Next.js, axé sur l'élaboration d'expériences utilisateur abouties.</p>
    <ul>
        <li><BiLogoFigma /></li>
        <li><BiLogoHtml5 /></li>
        <li><BiLogoCss3 /></li>
        <li><BiLogoSass /></li>
        <li><BiLogoJavascript /></li>
        <li><BiLogoReact /></li>
        <li><TbBrandNextjs /></li>
        <li><BiLogoMongodb /></li>
    </ul>
    </div>
    </>
  )
}

export default About