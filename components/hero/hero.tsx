import ie from "@/public/ichipiroexplorer.png";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import ThreeScene from "../ThreeScene";
import styles from "./hero.module.css";

const Hero = ({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle: string }>) => {
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
          <Image
            src={ie}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
          />
        </figure>
      ) : (
        <ThreeScene />
      )}
    </div>
  );
};

export default Hero;
