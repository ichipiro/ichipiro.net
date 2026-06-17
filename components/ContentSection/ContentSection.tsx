import ExportedImage from "next-image-export-optimizer";
import ContentHeader from "../ContentHeader/ContentHeader";
import styles from "./ContentSection.module.css";
import type { StaticImageData } from "next/image";

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
  imageUrl: StaticImageData;
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
      <ExportedImage src={imageUrl} width={700} height={700} alt="" preload />`
    </div>
  );
};

export default ContentSection;
