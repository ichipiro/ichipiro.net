import { SiGithub } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io5";
import styles from "./social.module.css";

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com/hcu_tech">
          <IoLogoTwitter />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/ichipiro">
          <SiGithub />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
