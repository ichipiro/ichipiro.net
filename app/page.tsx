"use client";

import Container from "@/components/container/container";
import ContentSection from "@/components/ContentSection/ContentSection";
import DiscordWidget from "@/components/DiscordWidget/DiscordWidget";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/hero/hero";
import MemberChart from "@/components/MemberChart/MemberChart";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./page.module.css";

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

const HomePage = () => {
  return (
    <main>
      <Container large>
        <Hero
          title="Ichipiro Explorer"
          subtitle="いちぴろ・エクスプローラ 広島市立大学ITサークル"
        />
        <div id="topmessage" className={styles.box}>
          <div className={styles.centerText}>
            <SectionHeader title="TOP MESSAGE" subtitle="私たちについて" />
            <div>
              <p className={styles.msg}>
                いちぴろ・エクスプローラは、広島市立大学公認サークルとして、2024年6月に設立いたしました。
              </p>

              <p className={styles.msg}>
                私たちは、幅広い情報技術を共有し、共に学び成長することを目的としたコミュニティです。
              </p>

              <p className={styles.msg}>
                定期的な勉強会やイベントを通じて、様々な分野での知識を深める機会を提供しています。
              </p>

              <p className={styles.msg}>
                大学の授業以上の技術を身に付けたい情報科学部生はもちろん、プログラミングやWebデザインを学びたい国際学部、芸術学部の学生も大歓迎です！
              </p>
            </div>
          </div>
        </div>

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

        <div id="member" className={styles.box}>
          <div className={styles.centerText}>
            <SectionHeader title="MEMBER" subtitle="構成人数・学科" />
            <p>いちぴろ・エクスプローラは現在26人で活動しています。</p>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MemberChart />
          </div>
        </div>

        <div id="enter" className={styles.box}>
          <div className={styles.centerText}>
            <SectionHeader title="ENTER" subtitle="入会方法" />

            <p className={styles.msg}>
              IEの活動内容などをまとめたページを用意しました。<br></br>
              入会を検討している方は、ぜひご覧ください。<br></br>
              質問も匿名で受け付けています。
            </p>
            <p className={styles.msg}>
              <a href="https://ichipiro.notion.site/"><u>IE 紹介ページ</u></a>
            </p>

            <p className={styles.msg}>
              入会を希望される方は、以下のフォームから入部届を提出してください。
            </p>
            <p className={styles.msg}>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScc3UJecZXr4tkqszZKHv7CiFFKQJMXFIy6XlJ8H1qRvLJf2Q/viewform?usp=dialog"><u>IE 入部届</u></a>
            </p>
            
          </div>
        </div>

        <div id="contact" className={styles.box}>
          <div className={styles.centerText}>
            <SectionHeader title="CONTACT" subtitle="お問い合わせ" />

            <p>– X(Twitter) : <a href="https://x.com/hcu_tech">@hcu_tech</a></p>
            <p>– メール : <a href="mailto:contact@ichipiro.net">contact@ichipiro.net</a></p>
          </div>

          <div id="faq"
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <FAQ
                question="プログラミングが苦手でも大丈夫ですか？"
                answer="大丈夫です。 部長はプログラミングができません"
              />
              <FAQ
                question="情報科学部以外の人も入れますか？"
                answer="大丈夫です。 芸術学部の学生が２名在籍しています"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
