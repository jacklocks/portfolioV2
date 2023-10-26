import React from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>contact</h2>
      <div className={styles.contactContent}>
      <p id="cursor"> Pour toute collaboration ou opportunité professionnelle, n'hésitez
              pas à me contacter!<br/>Je suis ouvert et enthousiaste à l'idée de discuter de projets
              innovants et de contribuer à des défis stimulants. J'attends avec
              impatience d'échanger avec vous et de faire partie d'équipes
              dynamiques pour créer des solutions web ensemble. Merci de me
              contacter et à bientôt !</p>
        <div className={styles.contactInput}>
          <input type="text" id="fullName" placeholder="Nom" required />
          <input type="email" id="email" placeholder="Email" required />
          <textarea id="message" placeholder="Message" required></textarea>
          <button onclick="SendMail()">envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
