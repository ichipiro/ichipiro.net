import Container from "@/components/container/container";
// import DiscordWidget from "@/components/DiscordWidget/DiscordWidget";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/hero/hero";
import MemberChart from "@/components/MemberChart/MemberChart";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./page.module.css";
import Activities from "@/components/Activities/Activities"
import { SiX } from "react-icons/si";
import { TbArrowRight, TbMail } from "react-icons/tb";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Container large>
        <Hero
          title={<>Ichipiro<br />Explorer</>}
          subtitle={<>いちぴろ・エクスプローラ<br />広島市立大学ITサークル</>}
        />
        <div id="topmessage" className={`${styles.box} ${styles.topMsg}`}>
          <div>
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
        <Activities />

        <div id="member" className={styles.box}>
          <div>
            <SectionHeader title="MEMBER" subtitle="構成人数・学科" />
            <p>いちぴろ・エクスプローラは現在36人で活動しています。</p>
          </div>
          <div className={styles.chartContainer}>
            <MemberChart />
          </div>
        </div>

        <div id="enter" className={styles.box}>
          <div className={styles.enterContainer}>
            <SectionHeader title="ENTER" subtitle="入会方法" />
            <div className={styles.enterDesc}>
              <div>
                <p className={styles.msg}>
                  IEの活動内容などをまとめたページを用意しました。<br />
                  入会を検討している方は、ぜひご覧ください。<br />
                  質問も匿名で受け付けています。
                </p>
                <a className={styles.linkBtn} href="https://ichipiro.notion.site/">IE 紹介ページ</a>
              </div>
              <div>
                <p className={styles.msg}>
                  入会を希望される方は、フォームから入部届を提出してください。
                </p>
                <a className={styles.linkBtn} href="https://docs.google.com/forms/d/e/1FAIpQLSed5cRZVESg49_l24tF3vLE0_Z1duR1OfSgrRPAzETkQVTfWw/viewform?usp=dialog">IE 入部届</a>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className={styles.box}>
          <SectionHeader title="CONTACT" subtitle="お問い合わせ" />

          <div className={styles.contacts}>
            <a href="https://x.com/hcu_tech">
              <div>
                <div className={styles.method}>
                  <SiX />
                  X(Twitter)アカウント
                </div>
                <span>@hcu_tech</span>
              </div>
              <TbArrowRight className={styles.arrowRight} />
            </a>

            <a href="mailto:contact@ichipiro.net">
              <div>
                <div className={styles.method}>
                  <div>
                    <TbMail />
                  </div>
                  メール
                </div>
                <span>contact@ichipiro.net</span>
              </div>
              <TbArrowRight className={styles.arrowRight} />
            </a>
          </div>
        </div>

        <div id="faq" className={styles.box}>
          <SectionHeader title="FAQ" subtitle="よくある質問" />
          <div className={styles.faqContainer}>
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
      </Container>
    </main>
  );
};

export default HomePage;
