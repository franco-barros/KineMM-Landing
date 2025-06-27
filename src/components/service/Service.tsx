"use client";
import React from "react";
import { Activity } from "lucide-react";
import { FadeInOnScroll } from "../utils/fadeInonscroll";
import styles from "../../styles/service/Services.module.css";
import { ServiceCard } from "./card";
import { ServiceCarousel } from "./carousel"; // ⬅ Asegúrate de importar el nuevo carousel
import { servicesData } from "../../data/service/ServiceData";

const Services: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  return (
    <FadeInOnScroll>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.headerWrapper}>
          <span className={styles.badge}>
            <Activity size={18} color="#065f46" />
            Servicios Profesionales
          </span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlightPrimary}>Servicios</span>{" "}
            <span className={styles.highlightSecondary}>profesionales</span>{" "}
            <span>para tu bienestar</span>
          </h2>
        </div>

        {/* Grid para desktop y tablet */}
        <div className={styles.servicesContainer}>
          {servicesData.map((service) => {
            let onClick;

            switch (service.cta) {
              case "Get a quote":
              case "Explore solutions":
              case "Build your site":
              case "Start your app":
                onClick = () => handleScrollTo("contactme");
                break;
              case "Let’s talk":
                onClick = handleWhatsApp;
                break;
              case "See portfolio":
                onClick = () => handleScrollTo("projects");
                break;
              default:
                onClick = undefined;
            }

            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                features={service.features}
                cta={service.cta}
                onClick={onClick}
                Icon={service.icon}
              />
            );
          })}
        </div>

        {/* Carousel solo visible en mobile */}
        <div className={styles.mobileCarouselWrapper}>
          <ServiceCarousel />
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Services;
