import styles from "@/components/header/header.module.css";
import Nav from "../Nav/nav";
import Container from "../container/container";
import Logo from "../logo/logo";

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
