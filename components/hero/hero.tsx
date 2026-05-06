"use client"

import ie from "@/public/ichipiroexplorer.png";
import ExportedImage from "next-image-export-optimizer";
import { ReactNode, useEffect, useState } from "react";
import ThreeScene from "../ThreeScene";
import styles from "./hero.module.css";

const Hero = ({
  title,
  subtitle,
}: Readonly<{ title: ReactNode; subtitle: ReactNode }>) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {isMobile ? (
        <figure className={styles.image}>
          <ExportedImage
            src={ie}
            alt=""
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            preload
          />
        </figure>
      ) : (
        <ThreeScene />
      )}
    </div>
  );
};

export default Hero;
