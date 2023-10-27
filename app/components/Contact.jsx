"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contact.module.css";
import Link from "next/link";

const Contact = () => {
  const serviceId = "service_a8vegaw";
  const templateId = "template_h0wlgxh";
  const publicKey = `${process.env.NEXT_PUBLIC_ID}`;

  const form = useRef();
  const [checkbox, setCheckbox] = useState(false);
  const handleChange = () => setCheckbox(!checkbox);

  const sendEmail = (e) => {
    e.preventDefault();
    if (checkbox === false) {
      alert("vous devez accepter les RGPD");
    } else {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message envoyé");
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur est survenue");
        }
      );
    }
  };
  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>contact</h2>
      <div className={styles.contactContent}>
        <p id="cursor">
          {" "}
          Pour toute collaboration ou opportunité professionnelle, n'hésitez pas
          à me contacter!
          <br />
          Je suis ouvert et enthousiaste à l'idée de discuter de projets
          innovants et de contribuer à des défis stimulants. J'attends avec
          impatience d'échanger avec vous et de faire partie d'équipes
          dynamiques pour créer des solutions web ensemble. Merci de me
          contacter et à bientôt !
        </p>
        <form className={styles.contactInput} ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit" value="Send">
            envoyer
          </button>
          <div className={styles.rgpdContainer}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={handleChange}
              id="rgpd"
              name="RGPD"
            />
            <label className={styles.rgpdText} htmlFor="rgpd">
              Accepter les <Link href="/RGPD">RGPD</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
