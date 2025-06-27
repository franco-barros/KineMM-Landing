"use client";

import React from "react";
import {
  Brain,
  HeartHandshake,
  Users,
  Star,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { FaLeaf, FaSeedling } from "react-icons/fa";
import styles from "../../styles/professionalreview/ProfessionalReview.module.css";
import { FadeInOnScroll } from "../utils/fadeInonscroll";
import { CarouselProfessional } from "./carouselprofessional";

interface ItemConDesc {
  title: string;
  desc: string;
}

interface GrupoResena {
  title: string | null;
  items: (ItemConDesc | string)[];
}

const reseñaTrabajo: GrupoResena[] = [
  {
    title: "Mi enfoque como kinesiólogo",
    items: [
      {
        title: "Atención personalizada",
        desc: "Cada tratamiento está adaptado a tus necesidades físicas, tiempos y evolución.",
      },
      {
        title: "Enfoque integral",
        desc: "Trabajo la movilidad, el dolor y la funcionalidad con una mirada completa del cuerpo.",
      },
      {
        title: "Seguimiento cercano",
        desc: "Acompaño tu progreso paso a paso para lograr una recuperación sostenible.",
      },
    ],
  },
  {
    title: null,
    items: [
      "Compromiso profesional",
      "Confianza y cercanía",
      "Bienestar a largo plazo",
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "Atención personalizada": <Users className={styles.cardIcon} />,
  "Enfoque integral": <Brain className={styles.cardIcon} />,
  "Seguimiento cercano": <HeartHandshake className={styles.cardIcon} />,
};

const valoresIconMap: Record<string, React.ReactNode> = {
  "Compromiso profesional": <ShieldCheck className={styles.cardIcon} />,
  "Confianza y cercanía": <Lock className={styles.cardIcon} />,
  "Bienestar a largo plazo": <FaSeedling className={styles.cardIcon} />,
};

const ProfessionalReview: React.FC = () => {
  return (
    <FadeInOnScroll>
      <section className={styles.section}>
        <div className={styles.headerWrapper}>
          <div className={styles.badge}>
            <Star size={18} />
            <span>Enfoque Profesional</span>
          </div>

          <h2 className={styles.title}>
            <span className={styles.titlePrimary}>Tu recuperación</span>{" "}
            <span className={styles.titleSecondary}>es prioridad</span>
          </h2>

          <h3 className={styles.subtitle}>
            Mi compromiso es acompañarte con atención cercana y tratamientos
            efectivos, para que puedas recuperar tu bienestar físico y tu
            calidad de vida.
          </h3>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.leftCards}>
            <div className={styles.card}>
              {reseñaTrabajo[0].title && (
                <h4 className={styles.cardTitle}>{reseñaTrabajo[0].title}</h4>
              )}
              <ul className={styles.cardList}>
                {reseñaTrabajo[0].items.map((item) =>
                  typeof item === "string" ? null : (
                    <li key={item.title} className={styles.cardListItem}>
                      <div className={styles.iconCircle}>
                        {iconMap[item.title]}
                      </div>
                      <div>
                        <strong>{item.title}</strong>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>
                    </li>
                  )
                )}
              </ul>

              <div className={styles.subListWrapper}>
                <h5 className={styles.subListTitle}>Valores que me definen</h5>
                <ul className={styles.cardList}>
                  {reseñaTrabajo[1].items.map((item) =>
                    typeof item === "string" ? (
                      <li key={item} className={styles.cardListItem}>
                        <div className={styles.iconCircle}>
                          {valoresIconMap[item]}
                        </div>
                        <span>{item}</span>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.rightCard}>
            <div className={styles.formPreview}>
              <Star className={styles.previewIcon} />
              <h4>¿Querés comenzar tu tratamiento?</h4>
              <p>Consultá sin compromiso y coordinemos tu primera sesión.</p>

              {/* Carrusel profesional */}
              <div className={styles.carouselBox}>
                <CarouselProfessional
                  images={[
                    "/images/personaskine2.png",
                    "/images/personaskine1.png",
                    "/images/personaskine.png",
                  ]}
                />
              </div>

              <a
                href="https://wa.me/5491166666666?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20sesi%C3%B3n%20de%20kinesiolog%C3%ADa."
                className={styles.startButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <a
            href="https://wa.me/5491166666666?text=Hola%2C%20quiero%20agendar%20una%20consulta%20kinesiologica."
            className={styles.startButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLeaf className={styles.badgeIcon} />
            Agenda Tu Primera Consulta
          </a>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default ProfessionalReview;
