import Container from "@/components/container/container";
import Logo from "@/components/logo/logo";
import Social from "../social/social";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
        <div className={styles.centerText}>© 2024 Ichipiro Explorer</div>
      </Container>
    </footer>
  );
};

export default Footer;
