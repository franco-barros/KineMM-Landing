"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";
import styles from "../../../styles/professionalreview/CarouselProfessional.module.css";

interface CarouselProfessionalProps {
  images: string[]; // Solo el path relativo a /public
  speed?: number;
}

const CarouselProfessional: React.FC<CarouselProfessionalProps> = ({
  images,
  speed = 40,
}) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const loopImages = [...images, ...images, ...images]; // duplicamos para loop infinito

  const startAnimation = useCallback(() => {
    if (!carouselRef.current) return;
    const fullWidth = carouselRef.current.scrollWidth / 2;
    const duration = fullWidth / speed;

    controls.set({ x: 0 });
    controls.start({
      x: -fullWidth,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, speed]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [startAnimation, controls]);

  return (
    <div className={styles.carouselWrapper}>
      <motion.div
        className={styles.carousel}
        ref={carouselRef}
        style={{ x }}
        animate={controls}
      >
        {loopImages.map((imgPath, i) => (
          <div key={`${imgPath}-${i}`} className={styles.imageContainer}>
            <Image
              src={imgPath}
              alt={`carousel-${i}`}
              width={400}
              height={300}
              className={styles.image}
              priority={i < 3} // prioriza las primeras 3 para evitar flashes
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselProfessional;
