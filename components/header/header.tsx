import styles from "@/components/header/header.module.css";
import Nav from "../Nav/nav";
import Logo from "../logo/logo";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
    </header>
  );
};

export default Header;
