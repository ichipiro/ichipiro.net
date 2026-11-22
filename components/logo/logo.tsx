import Link from "next/link";
import styles from "./logo.module.css";
import IELogo from "@/public/IE_logo_traced.svg"
import ExportedImage from "next-image-export-optimizer";

const Logo = () => {
  return (
    <Link href="/" className={styles.basic}>
      <ExportedImage className={styles.logoImg} src={IELogo} alt="ロゴ"/>
      Ichipiro Explorer
    </Link>
  );
};

export default Logo;
