"use client";
import React, { useEffect, useState } from "react";
import DisplayAllProjects from "./DisplayAllProjects";
import styles from "./allProjects.module.css";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  console.log(projects);

  if (projects.length === 0) return <div>no projects found</div>;

  return (
    <div id="projets" className={styles.allProjectsContainer}>
      <h2>projets</h2>
      {projects.map((project) => (
        <DisplayAllProjects key={project._id} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
