import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import mixpanel from "mixpanel-browser";
import { useEffect, useState, useCallback, memo } from "react";
import { useInView } from 'react-intersection-observer';

import { TOP_QUESTIONS_SUBJECTS } from "../../../constant/topQuestions.contant";
import QuestionItem from "@/components/learn/QuestionItem";

import styles from "../../../styles/learn.module.css";

const filer = new Filer({ path: "content" });

// 骨架屏组件
const QuestionSkeleton = memo(() => (
  <li className={`${styles["question-item"]} ${styles["skeleton"]}`}>
    <div className={styles["skeleton-tag"]} />
    <div className={styles["skeleton-title"]} />
    <div className={styles["skeleton-button"]} />
  </li>
));

export default function LearnSubject({ subject, title, pages, language = "en" }) {
  const [displayedPages, setDisplayedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10; // Reduce initial loading amount

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { page_level: "subjectlist", qa_subject: title });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDisplayedPages(pages.slice(0, itemsPerPage));
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [pages]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  const loadMore = useCallback(() => {
    const nextPage = currentPage + 1;
    const start = (nextPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    if (start < pages.length) {
      setDisplayedPages(prev => [...prev, ...pages.slice(start, end)]);
      setCurrentPage(nextPage);
    }
  }, [currentPage, pages]);

  const seoTitle = `Discover top Q&As and quality content in ${title}.`;
  const seoDescription = `Learn faster with QuickTakes—your go-to study resource.`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta property="og:description" content={seoDescription} />
        <meta name="keywords" content={`${title}, questions and answers, learning, education`} />
        <link rel="preload" href="/backIcon.svg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>
      <header className={styles["learn-subjects-header-container"]} role="banner">
        <div className={styles["learn-subjects-center-container"]}>
          <h1 className={styles["learn-subject-title"]}>
            <Link href="/learn" className={styles["back-btn"]} aria-label="Back to subjects">
              <Image 
                src="/backIcon.svg" 
                alt="Back arrow" 
                width={24} 
                height={24} 
                priority
                loading="eager"
              />
            </Link>
            {title}
          </h1>
        </div>
      </header>
      <main className={styles["learn-subjects-container"]} role="main">
        <div className={styles["learn-subjects-center-container"]}>
          <h2 className={styles["questions-quantity"]}>All Questions ({pages.length})</h2>
          <nav aria-label="Questions list">
            <ul className={styles["questions-list"]} role="list">
              {isLoading ? (
                Array(5).fill(0).map((_, index) => (
                  <QuestionSkeleton key={index} />
                ))
              ) : (
                displayedPages.map((item, index) => (
                  <QuestionItem 
                    key={item.en.data.file_name}
                    title={item.en.data.question}
                    url={`/learn/${subject}/questions/${item.en.data.file_name.replace(".md", "")}`}
                  />
                ))
              )}
            </ul>
          </nav>
          {displayedPages.length < pages.length && (
            <div ref={ref} className={styles["load-more-container"]}>
              {isLoading ? (
                <QuestionSkeleton />
              ) : null}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths({ params }) {
  const paths = TOP_QUESTIONS_SUBJECTS.map((subject) => ({
    params: { subject: subject.key },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { subject } = params;
  const currentSubject = TOP_QUESTIONS_SUBJECTS.find((item) => item.key === subject);

  const folderPath = `learn/${currentSubject?.key}`;
  const files = await filer.listItemSlugs(folderPath);

  if (!files) {
    return { notFound: true };
  }

  const filteredFiles = files.filter((file) => !file.includes(".DS_Store"));

  const pagesData = await Promise.all(
    filteredFiles.map(async (file) => {
      const filePath = `${folderPath}/${file}.md`;
      const pageData = await filer.getItem(filePath);

      if (!pageData) return null;

      return {
        en: {
          data: {
            file_name: pageData.data.file_name,
            question: pageData.data.question
          }
        }
      };
    })
  );

  const validPagesData = pagesData.filter(Boolean);

  return {
    props: {
      subject: currentSubject?.key,
      title: currentSubject?.title,
      pages: validPagesData,
    }
  };
}
