import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import moment from 'moment';
import mixpanel from "mixpanel-browser";
import { useEffect, useState } from "react";

import { TOP_QUESTIONS_SUBJECTS } from '../../../constant/topQuestions.contant';

import styles from '../../../styles/learn.module.css';

const filer = new Filer({ path: 'content' });

export default function LearnSubjest({ subject, title, pages, language = "en" }) {
  const [displayedPages, setDisplayedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  useEffect(() => {
    setDisplayedPages(pages.slice(0, itemsPerPage));
  }, [pages]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const start = (nextPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedPages([...displayedPages, ...pages.slice(start, end)]);
    setCurrentPage(nextPage);
  };

  return <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
    <header className={styles['learn-subjects-header-container']}>
      <div className={styles['learn-subjects-center-container']}>
        <h2 className={styles["learn-subject-title"]}>
          <Link href="/learn" className={styles["back-btn"]} ><img src="/backIcon.svg" /></Link>
          {title}
        </h2>
      </div>
    </header>
    <div className={styles['learn-subjects-container']}>
      <div className={styles['learn-subjects-center-container']}>
        <h3 className={styles["questions-quantity"]}>All Questions ({pages.length})</h3>
        <div className={styles["questions-list"]}>
          {
            displayedPages.map((item, index) => (
              <Link className={styles["question-item"]} href={`/learn/${subject}/questions/${item.en.data.file_name.replace('.md', '')}`} key={index}>
                <div className={styles["question-item-tag"]}>Question</div>
                <h3 className={styles["question-item-name"]}>{item.en.data.question}</h3>
                <div className={styles["question-item-btn"]}>View Answer</div>
              </Link>
            ))
          }
        </div>
        {displayedPages.length < pages.length && (
          <button 
            className={styles["load-more-btn"]} 
            onClick={loadMore}
          >
            Next
          </button>
        )}
      </div>
    </div>
  </>
}

export async function getStaticPaths() {
  // const subjects = await filer.listItemSlugs('/learn');
  const paths = TOP_QUESTIONS_SUBJECTS.map(subject => ({
    params: { subject: subject.key },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

  const { subject } = params;

  const currtentSubject = TOP_QUESTIONS_SUBJECTS.find(item => item.key === subject);

  const folderPath = `learn/${currtentSubject?.key}`;
  const files = await filer.listItemSlugs(folderPath);
  if (!files) {
    return {
      notFound: true,
    };
  }
  const filteredFiles = files.filter(file => !file.includes('.DS_Store'));

  const pagesData = await Promise.all(
    filteredFiles.map(async (file) => {
      const filePath = `${folderPath}/${file}.md`;
      const pageData = await filer.getItem(filePath);

      if (!pageData) {
        return;
      }

      return {
        en: JSON.parse(JSON.stringify(pageData)),
      };
    })
  );

  const validPagesData = pagesData.filter(item => item !== undefined);

  return {
    props: {
      subject: currtentSubject?.key,
      title: currtentSubject?.title,
      pages: validPagesData,
    }
  };
}
