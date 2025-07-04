"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IconType } from "react-icons"; // Para tipar el icono
import styles from "../../../styles/service/ServicesCard.module.css";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  cta?: string;
  onClick?: () => void;
  Icon?: IconType; // Icono a mostrar en el header (opcional)
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  description,
  features,
  cta,
  onClick,
  Icon,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.header}>
        {Icon && (
          <div className={styles.iconBackground}>
            <Icon size={24} />
          </div>
        )}
        <div>
          <h3 className={styles.serviceTitle}>{title}</h3>
          {subtitle && <h4 className={styles.serviceSubtitle}>{subtitle}</h4>}
        </div>
      </div>

      {/* Contenedor con padding para el contenido debajo del header */}
      <div className={styles.contentWrapper}>
        <p className={styles.serviceDescription}>{description}</p>

        {features && (
          <ul className={styles.featuresList}>
            {features.map((feature) => (
              <li key={`${title}-${feature}`} className={styles.featureItem}>
                <FaCheck className={styles.checkIcon} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {cta && (
          <button onClick={onClick} className={styles.ctaButton}>
            {cta}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
