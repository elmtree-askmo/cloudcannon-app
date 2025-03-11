import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import mixpanel from "mixpanel-browser";
import { useEffect, useState } from "react";

import { TOP_QUESTIONS_SUBJECTS } from "../../../constant/topQuestions.contant";

import styles from "../../../styles/learn.module.css";

const filer = new Filer({ path: "content" });

export default function LearnSubject({ subject, title, pages, language = "en" }) {
  const [displayedPages, setDisplayedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { page_level: "subjectlist", qa_subject: title });
  }, []);

  useEffect(() => {
    setDisplayedPages(pages.slice(0, itemsPerPage));
  }, [pages]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const start = (nextPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedPages(prev => [...prev, ...pages.slice(start, end)]);
    setCurrentPage(nextPage);
  };

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
              {displayedPages.map((item, index) => (
                <li 
                  key={item.en.data.file_name} 
                  className={styles["question-item"]}
                >
                  <article>
                    <Link 
                      href={`/learn/${subject}/questions/${item.en.data.file_name.replace(".md", "")}`}
                      aria-labelledby={`question-${index}`}
                      prefetch={index < 5}
                    >
                      <span className={styles["question-item-tag"]}>
                        Question
                      </span>
                      <h3 
                        id={`question-${index}`} 
                        className={styles["question-item-name"]}
                      >
                        {item.en.data.question}
                      </h3>
                      <span className={styles["question-item-btn"]}>
                        View Answer
                      </span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </nav>
          {displayedPages.length < pages.length && (
            <button 
              className={styles["load-more-btn"]} 
              onClick={loadMore} 
              aria-label="Load more questions"
            >
              Next
            </button>
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
