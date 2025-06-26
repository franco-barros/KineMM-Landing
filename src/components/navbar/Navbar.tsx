"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedMenuOverlay from "../animations/animatedmenuoverlay";
import styles from "../../styles/Navbar.module.css";

const navLinks = [
  { href: "inicio", label: "Inicio" },
  { href: "sobre-mi", label: "Sobre mí" },
  { href: "contacto", label: "Contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menuOpen", menuOpen);
  }, [menuOpen]);

  // [Opcional] Detectar sección activa (puede mejorarse con IntersectionObserver)
  // Por ahora, estática
  useEffect(() => {
    // lógica futura para setActiveSection
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>Lic. Ana Pérez</div>

        <div className={styles.menuWrapper}>
          <button
            className={styles.desktopMenuButton}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            Menú
          </button>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <AnimatedMenuOverlay
          onClose={() => setMenuOpen(false)}
          scrollToSection={scrollToSection}
          navLinks={navLinks}
          activeSection={activeSection}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
