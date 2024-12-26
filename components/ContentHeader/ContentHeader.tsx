import styles from "./ContentHeader.module.css";

const ContentHeader = ({
  number,
  title,
  subtitle,
}: Readonly<{ number: string; title: string; subtitle: string }>) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div className={styles.flexContainer}>
        <div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.title}>{number}</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.heading}>{title}</div>
      </div>
    </div>
  );
};

export default ContentHeader;
