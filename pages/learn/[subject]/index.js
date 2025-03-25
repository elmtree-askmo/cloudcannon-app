import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import mixpanel from "mixpanel-browser";
import { useEffect, useState, useCallback, memo } from "react";
import { useInView } from 'react-intersection-observer';

import { TOP_QUESTIONS_SUBJECTS, TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC } from "../../../constant/topQuestions.contant";
import QuestionItem from "@/components/learn/QuestionItem";

import styles from "../../../styles/learn.module.css";

const filer = new Filer({ path: "content" });
const PAGE_SIZE = 20;

// Skeleton screen component
const QuestionSkeleton = memo(() => (
  <li className={`${styles["question-item"]} ${styles["skeleton"]}`}>
    <div className={styles["skeleton-tag"]} />
    <div className={styles["skeleton-title"]} />
    <div className={styles["skeleton-button"]} />
  </li>
));

export default function LearnSubject({ 
  subject, 
  title, 
  pages, 
  allQuestions, 
  totalCount, 
  pageInfo, 
  language = "en" 
}) {
  const [displayedPages, setDisplayedPages] = useState(pages);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(pageInfo.hasMore);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { page_level: "subjectlist", qa_subject: title });
  }, []);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMore();
    }
  }, [inView]);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    
    // Load more data from existing allQuestions
    setTimeout(() => {
      const newQuestions = allQuestions.slice(start, end);
      setDisplayedPages(prev => [...prev, ...newQuestions]);
      setCurrentPage(nextPage);
      setHasMore(end < allQuestions.length);
      setIsLoading(false);
    }, 300); // Add small delay to show loading effect
  }, [currentPage, allQuestions]);

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
          <h2 className={styles["questions-quantity"]}>All Questions ({totalCount})</h2>
          <nav aria-label="Questions list">
            <ul className={styles["questions-list"]} role="list">
              {displayedPages.map((item, index) => (
                <QuestionItem key={index} item={item} />
              ))}
            </ul>
          </nav>
          {hasMore && (
            <div ref={ref} className={styles["load-more-container"]}>
              {isLoading && <QuestionSkeleton />}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);
  const paths = subjects.map((subject) => ({
    params: { subject: subject.key },
  }));

  return { 
    paths, 
    fallback: false  // Can only use false in static export mode
  };
}

export async function getStaticProps({ params }) {
  const { subject } = params;
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);
  const currentSubject = subjects.find((item) => item.key === subject);

  const folderPath = `learn/${currentSubject?.key}`;
  const files = await filer.listItemSlugs(folderPath);

  if (!files) {
    return { notFound: true };
  }

  const filteredFiles = files.filter((file) => !file.includes(".DS_Store"));
  
  // Pre-generate basic information for all questions (only includes filename and question title)
  const allQuestionsInfo = filteredFiles.map(file => ({
    en: {
      data: {
        file_name: file,
        question: file.replace('.md', '') // Simplified question title
      }
    }
  }));

  return {
    props: {
      subject: currentSubject?.key,
      title: currentSubject?.title,
      pages: allQuestionsInfo.slice(0, PAGE_SIZE), // Initially displayed questions
      allQuestions: allQuestionsInfo, // Basic information for all questions
      totalCount: filteredFiles.length,
      pageInfo: {
        currentPage: 1,
        hasMore: filteredFiles.length > PAGE_SIZE,
        totalPages: Math.ceil(filteredFiles.length / PAGE_SIZE)
      }
    }
  };
}
