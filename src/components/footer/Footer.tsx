"use client";

import React from "react";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaHeartbeat,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  const handleInternalLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        {/* Presentación */}
        <div className={styles.section}>
          <h3 className={styles.title}>
            <FaHeartbeat className={styles.iconLeaf} />
            Lic. en Kinesiología
          </h3>
          <p className={styles.description}>
            Profesional de la salud enfocado en tu bienestar físico,
            recuperación funcional y calidad de vida.
          </p>
        </div>

        {/* Enlaces y redes sociales */}
        {isHome && (
          <>
            <div className={styles.section}>
              <h4 className={styles.subtitle}>Enlaces</h4>
              <ul className={styles.list}>
                <li>
                  <a
                    href="#aboutme"
                    onClick={(e) => handleInternalLinkClick(e, "aboutme")}
                  >
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleInternalLinkClick(e, "services")}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleInternalLinkClick(e, "faq")}
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subtitle}>Redes Sociales</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div className={styles.section}>
              <h4 className={styles.subtitle}>Contacto</h4>
              <p className={styles.contact}>
                <FaPhoneAlt /> +54 9 2645 878987
              </p>
              <p className={styles.contact}>
                <FaEnvelope /> l6DZM@example.com
              </p>
              <p className={styles.contact}>
                <FaMapMarkerAlt /> San Juan, Argentina, Rastreador Calivar 553
                (N) Esquina Ivonne Barud Quattropani. Entrada B° Udap II.
                Rivadavia.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Pie común */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2024 Lic. en Kinesiología Mica Moreno. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
