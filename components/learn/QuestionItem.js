import Link from "next/link";
import styles from "../../styles/learn.module.css";
import mixpanel from "mixpanel-browser";

const QuestionItem = ({ type, item, subjectTitle }) => {
  const handleClick = (e) => {
    switch (type) {
      case "question":
        mixpanel.track("MarketingPage_ToOtherQuestions", {
          qa_subject: subjectTitle,
          qa_question: item.title,
        });
        break;
      default:
        break;
    }
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
