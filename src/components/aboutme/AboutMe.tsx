"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.headerContainer}>
        <h2 className={styles.aboutTitle}>Sobre mí</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.textCard}>
            <p className={styles.paragraph}>
              Soy Licenciada en Kinesiología y Fisiatría, con una profunda
              vocación por mejorar la calidad de vida de las personas. A lo
              largo de mi trayectoria, he acompañado a pacientes en procesos de
              rehabilitación, alivio del dolor y recuperación funcional,
              combinando conocimientos técnicos con un enfoque humano, empático
              y personalizado.
              <br />
              <br />
              Mi compromiso es brindar un espacio seguro y profesional donde
              cada tratamiento sea pensado de forma individual, respetando los
              tiempos, necesidades y objetivos de cada persona. Creo firmemente
              en el poder del movimiento, la escucha activa y la constancia como
              pilares fundamentales para el bienestar físico y emocional.
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
