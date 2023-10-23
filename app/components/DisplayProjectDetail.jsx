import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import styles from "./displayProjectDetail.module.css";

const DisplayProjectDetail = ({ project }) => {
  const {
    title,
    date,
    description,
    detail1,
    detail2,
    detail3,
    detail4,
    detail5,
    detail6,
    entreprise,
    siteWeb,
    github,
    technos,
    image,
  } = project;

  const technoArray = technos.split(",").map((techno) => techno.trim());
  const technoIcons = technoArray.map((techno, index) => {
    return <Icon icon={techno.toLowerCase()} key={index} />;
  });
  return (
    <>
      <div className={styles.displayProjectDetailContainer}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>( {date} )</p>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{description}</p>
          <p>{detail1}</p>
          <p>{detail2}</p>
          <p>{detail3}</p>
          <p>{detail4}</p>
          <p>{detail5}</p>
          <p>{detail6}</p>
        </div>
        <p>{entreprise}</p>
        <Link href={github} target="_blank">
          <Icon icon="github" />
        </Link>
        <Link className={styles.linkSiteWeb} href={siteWeb} target="_blank">
          visiter le site
        </Link>
        <div className={styles.imgContainer}>
          <div className={styles.logo}>{technoIcons}</div>
          <img src={image} alt={title} />
        </div>
      </div>
    </>
  );
};

export default DisplayProjectDetail;
