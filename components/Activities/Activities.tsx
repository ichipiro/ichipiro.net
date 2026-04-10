"use client"

import styles from "./activities.module.css";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ContentSection from "@/components/ContentSection/ContentSection";
import { useEffect, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const NextArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 10000, //10s
};

const Activities = () => {
  return (
        <div id="activity" className={styles.box}>
          <div className={styles.centerText}>
            <SectionHeader title="ACTIVITY" subtitle="活動紹介" />
          </div>

          <Slider {...settings}>
            <div>
              <ContentSection
                number="01"
                title="定例会"
                description="メンバーが学んだ内容や挑戦したことをアウトプットし、意見交換を行います"
                pointDescription="月３回の定例会で定期的にアウトプットができる点
毎月10,20,30日の夜にオンラインで開催しており、他の部活やアルバイトで忙しい学生でも参加しやすい"
                imageUrl="/teirei.jpg"
              />
            </div>
            <div>
              <ContentSection
                number="02"
                title="勉強会"
                description="GitやJavaScriptなどの技術に関する勉強会を開催します"
                pointDescription="様々なバックグラウンドの学生が所属しており、プログラミングやネットワーク、サーバ、セキュリティなど幅広い知識を身につけられます"
                imageUrl="/gitstudy.jpg"
              />
            </div>
            <div>
              <ContentSection
                number="03"
                title="イベント参加"
                description="チームでCTF（Capture The Flag）やハッカソンなどのイベントに参加し、実践的なスキルを磨きます"
                pointDescription="意欲的な学生が多く、チームも作りやすい環境です。気軽に参加を呼びかけられます"
                imageUrl="/hack.png"
              />
            </div>
          </Slider>
        </div>
  )
}

export default Activities
