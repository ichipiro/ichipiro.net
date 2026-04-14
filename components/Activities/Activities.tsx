"use client";

import styles from "./activities.module.css";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ContentSection from "@/components/ContentSection/ContentSection";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const Activities = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 10000,
    }),
  ]);
  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <div id="activity" className={styles.box}>
      <div className={styles.centerText}>
        <SectionHeader title="ACTIVITY" subtitle="活動紹介" />
      </div>

      <div className={styles.embla}>
        <button className={styles.embla__prev} onClick={goToPrev}>
          <TbChevronLeft />
        </button>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <ContentSection
                number="01"
                title="定例会"
                description="メンバーが学んだ内容や挑戦したことをアウトプットし、意見交換を行います"
                pointDescription="月３回の定例会で定期的にアウトプットができる点
毎月10,20,30日の夜にオンラインで開催しており、他の部活やアルバイトで忙しい学生でも参加しやすい"
                imageUrl="/teirei.jpg"
              />
            </div>
            <div className={styles.embla__slide}>
              <ContentSection
                number="02"
                title="勉強会"
                description="GitやJavaScriptなどの技術に関する勉強会を開催します"
                pointDescription="様々なバックグラウンドの学生が所属しており、プログラミングやネットワーク、サーバ、セキュリティなど幅広い知識を身につけられます"
                imageUrl="/gitstudy.jpg"
              />
            </div>
            <div className={styles.embla__slide}>
              <ContentSection
                number="03"
                title="イベント参加"
                description="チームでCTF（Capture The Flag）やハッカソンなどのイベントに参加し、実践的なスキルを磨きます"
                pointDescription="意欲的な学生が多く、チームも作りやすい環境です。気軽に参加を呼びかけられます"
                imageUrl="/hack.png"
              />
            </div>
          </div>
        </div>
        <button className={styles.embla__next} onClick={goToNext}>
          <TbChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Activities;
