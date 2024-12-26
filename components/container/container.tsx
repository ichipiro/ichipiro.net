import styles from "@/components/container/container.module.css";

const Container = ({
  children,
  large = false,
}: Readonly<{ children: React.ReactNode; large?: boolean}>) => {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
};

export default Container;
