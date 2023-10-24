"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "../styles/displayAllProjects.module.css";

const DisplayAllProjects = ({ project }) => {
  const { title, shortDescription } = project;
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => setShowOverlay(true);
  const handleMouseLeave = () => setShowOverlay(false);

  const handleRedirect = () => router.push(`/project/${project._id}`);

  return (
    <div
      className={`${styles.projectContainer} ${
        showOverlay ? styles.showOverlay : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.displayTitleContainer}>
        <h1>{title}</h1>
      </div>
      <div
        className={`${styles.overlay} ${showOverlay ? styles.showOverlay : ""}`}
        onClick={handleRedirect}
      >
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectShortDescription}>{shortDescription}</p>
      </div>
    </div>
  );
};

export default DisplayAllProjects;
