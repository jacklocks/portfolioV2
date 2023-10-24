"use client";
import React, { useEffect, useState } from "react";
import DisplayAllProjects from "./DisplayAllProjects";
import styles from "../styles/allProjects.module.css";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchProjects();
  }, []);

  if (loading) return <div className={styles.loading}>loading...</div>;

  if (error)
    return <div className={styles.loading}>Error: {error.message}</div>;

  if (!projects) return <div className={styles.loading}>No projects found</div>;

  return (
    <>
      <div id="projets" className={styles.allProjectsContainer}>
        <h2>projets</h2>
        {projects.map((project) => (
          <DisplayAllProjects key={project._id} project={project} />
        ))}
      </div>
    </>
  );
};

export default AllProjects;
