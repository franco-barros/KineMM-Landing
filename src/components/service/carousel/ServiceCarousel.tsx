"use client";
import React, { useEffect, useState } from "react";
import { ServiceCard } from "../card";
import styles from "../../../styles/service/ServiceCarousel.module.css";
import { servicesData } from "../../../data/service/ServiceData";

const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5492645878987", "_blank");
  };

  return (
    <div className={styles.mobileCarousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {servicesData.map((item) => {
          let onClick;

          switch (item.cta) {
            case "Solicitar turno":
            case "Comenzar rehabilitación":
              onClick = () => handleScrollTo("contactme");
              break;
            case "Reservar sesión":
              onClick = handleWhatsApp;
              break;
            case "Pedir más información":
              onClick = () => handleScrollTo("contactme");
              break;
            default:
              onClick = undefined;
          }

          return (
            <div key={item.title} className={styles.carouselItem}>
              <ServiceCard
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                features={item.features}
                cta={item.cta}
                onClick={onClick}
                Icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCarousel;
