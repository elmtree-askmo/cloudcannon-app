import Link from "next/link";
import styles from "../../styles/learn.module.css";

const QuestionItem = ({ title, url }) => (
  <li className={styles["question-item"]}>
    <article>
      <Link href={url}>
        <span className={styles["question-item-tag"]}>
          Question
        </span>
        <h3 className={styles["question-item-name"]}>
          {title}
        </h3>
        <span className={styles["question-item-btn"]}>
          View Answer
        </span>
      </Link>
    </article>
  </li>
);

export default QuestionItem; 