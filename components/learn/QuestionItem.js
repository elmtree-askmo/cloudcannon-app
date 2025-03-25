import Link from "next/link";
import styles from "../../styles/learn.module.css";
import mixpanel from "mixpanel-browser";

const QuestionItem = ({ item, onClick }) => {
  const handleClick = (e) => {
    onClick?.(item);
  };

  return (
    <li className={styles["question-item"]}>
      <article>
        <Link href={item?.url} onClick={handleClick}>
          <span className={styles["question-item-tag"]}>Question</span>
          <h3 className={styles["question-item-name"]}>{item?.title}</h3>
          <span className={styles["question-item-btn"]}>View Answer</span>
        </Link>
      </article>
    </li>
  );
};

export default QuestionItem;
