import styles from "./SectionHeader.module.css";

const SectionHeader = ({
  title,
  subtitle,
}: Readonly<{ title: string; subtitle: string }>) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <p>/{subtitle}/</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
