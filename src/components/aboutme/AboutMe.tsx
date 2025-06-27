"use client";
import React from "react";
import Image from "next/image";
import { Activity } from "lucide-react";
import styles from "../../styles/AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.headerContainer}>
        <div className={styles.badge}>
          <Activity size={18} />
          <span>Profesional en Kinesiología y movimiento</span>
        </div>
        <h2 className={styles.aboutTitle}>Sobre mí</h2>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textCard}>
            <p className={styles.paragraph}>
              Soy Lic. en Kinesiología y profesora de danzas. Me especializo en
              el tratamiento de lesiones traumatológicas y deportivas. Mi
              objetivo es acompañarte en tu proceso de recuperación para lograr
              un retorno efectivo y seguro a tu actividad diaria.
              <br />
              <br />
              También coordino un taller de ejercicio terapéutico para adultos
              mayores, donde junto a una colega brindamos contención y trabajo
              físico adaptado para que los abuelos puedan mantenerse activos y
              mejorar su calidad de vida.
            </p>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/persona.png"
            alt="Licenciada en Kinesiología"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
