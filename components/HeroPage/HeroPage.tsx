import React from "react";
import Container from "../container/container";
import styles from "./HeroPage.module.css";

const HeroPage: React.FC = () => {
  return (
    <Container>
      <div className={styles.heroText}>
        <h1>Welcome to Ichipiro Explorer</h1>
        <p>We are thrilled to have you here. Explore the world with us.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </Container>
  );
};

export default HeroPage;
