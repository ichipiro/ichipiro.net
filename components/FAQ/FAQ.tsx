import styles from "./FAQ.module.css"

const FAQ = ({ question, answer }: any) => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqQuestionContainer}>
        <span className={styles.iconized}>Q.</span>
        <span className={styles.p}>{question}</span>
      </div>
      <div className={styles.faqAnswerContainer}>
        <span className={styles.iconized}>A.</span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
