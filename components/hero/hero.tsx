import ie from "@/public/ichipiroexplorer.png";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
import styles from "./hero.module.css";

const ThreeScene = dynamic(() => import("../ThreeScene"), { ssr: false });

const Hero = ({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle: string }>) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <figure className={`${styles.image} ${styles.mobileOnly}`}>
        <Image
          src={ie}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
          priority
        />
      </figure>
      <div className={styles.desktopOnly}>
        <ThreeScene />
      </div>
    </div>
  );
};

export default Hero;
