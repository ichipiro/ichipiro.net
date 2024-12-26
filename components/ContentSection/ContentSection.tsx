import Image from "next/image";
import nextConfig from "../../next.config.mjs";
import ContentHeader from "../ContentHeader/ContentHeader";
import styles from "./ContentSection.module.css";

const BASE_PATH = nextConfig.basePath || "";

const ContentSection = ({
  number,
  title,
  description,
  pointDescription,
  imageUrl,
}: Readonly<{
  number: string;
  title: string;
  description: string;
  pointDescription: string;
  imageUrl: string;
}>) => {
  return (
    <div className={styles.flexContainer} style={{ padding: "30px" }}>
      {/* 左側 */}
      <div>
        {/* ヘッダー */}
        <ContentHeader number={number} title={title} subtitle={"ACTIVITY"} />

        {/* 内容 */}
        <p>{description}</p>
        <div className={styles.highlightBox}>
          <div className={styles.point}>ここがPOINT!</div>
          <p>{pointDescription}</p>
        </div>
      </div>
      {/* 右側 */}
      <Image
        src={`${BASE_PATH}/${imageUrl}`}
        width={700}
        height={700}
        alt=""
        priority
      />
      `
    </div>
  );
};

export default ContentSection;
