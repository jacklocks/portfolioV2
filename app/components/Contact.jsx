import React from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>contact</h2>
      <div className={styles.contactContent}>
        <p id="cursor">
          Pour toute collaboration ou opportunité professionnelle, n'hésitez pas
          à me contacter <a href="mailto:ecastets.seo@gmail.com">ici</a> !<br />{" "}
          Je suis ouvert et enthousiaste à l'idée de discuter de projets
          innovants et de contribuer à des défis stimulants. J'attends avec
          impatience d'échanger avec vous et de faire partie d'équipes
          dynamiques pour créer des solutions web ensemble. Merci de votre
          visite et à bientôt !
        </p>
      </div>
    </div>
  );
};

export default Contact;
