import Link from "next/link";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.basic}>
      Ichipiro Explorer
    </Link>
  );
};

export default Logo;
