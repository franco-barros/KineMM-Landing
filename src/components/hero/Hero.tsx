"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { CarouselTestimonials } from "../carouseltestimonial";
import styles from "../../styles/Hero.module.css";
import { testimonials } from "@/data/testimonials";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.container}>
          <div className={styles.textArea}>
            <div className={styles.badge}>
              <Activity size={18} />
              <span>Kinesiólogo especializado en rehabilitación</span>
            </div>

            <h1 className={styles.title}>
              <span className={styles.highlightPrimary}>
                Recuperá tu movilidad
              </span>{" "}
              <span className={styles.highlightSecondary}>
                con atención profesional
              </span>
            </h1>

            <p className={styles.description}>
              Tratamientos personalizados para dolores musculares, lesiones
              deportivas o rehabilitación funcional. Trabajo en consultorio o a
              domicilio, priorizando tu bienestar y evolución.
            </p>

            <div className={styles.buttons}>
              <button
                onClick={scrollToContact}
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Agendar Primera Sesión
              </button>
            </div>

            <p className={styles.signature}>
              Lic. Carlos Mendoza – Kinesiólogo
            </p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/images/micakine.png"
              alt="Lic. Carlos Mendoza"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.testimonialsWrapper}>
          <CarouselTestimonials testimonials={testimonials} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
