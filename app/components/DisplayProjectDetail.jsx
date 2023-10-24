import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import styles from "../styles/displayProjectDetail.module.css";
import Mouse from "./Mouse";

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
      <Mouse />
      <div className={styles.displayProjectDetailContainer}>
        <div id="cursor" className={styles.title}>
          <h1>{title}</h1>
          <p>( {date} )</p>
        </div>
        <div id="cursor" className={styles.descriptionContainer}>
          <p>{description}</p>
          <p>{detail1}</p>
          <p>{detail2}</p>
          <p>{detail3}</p>
          <p>{detail4}</p>
          <p>{detail5}</p>
          <p>{detail6}</p>
        </div>
        <p>{entreprise}</p>
        <Link id="cursor" href={github} target="_blank">
          <Icon icon="github" />
        </Link>
        <Link
          id="cursor"
          className={styles.linkSiteWeb}
          href={siteWeb}
          target="_blank"
        >
          visiter le site
        </Link>
        <div className={styles.imgContainer}>
          <div id="cursor" className={styles.logo}>
            {technoIcons}
          </div>
          <img id="cursor" src={image} alt={title} />
        </div>
      </div>
    </>
  );
};

export default DisplayProjectDetail;
