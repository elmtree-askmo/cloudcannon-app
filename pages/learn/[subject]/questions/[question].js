import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import moment from 'moment';
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

// markdown
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

import { TOP_QUESTIONS_SUBJECTS } from '../../../../constant/topQuestions.contant';
import { APP_URL, SITEMAP_DOMAIN } from "../../../../constant/app.constant";
import styles from '../../../../styles/learn.module.css';
import 'katex/dist/katex.min.css';

const filer = new Filer({ path: 'content' });
export default function TopQuestion({ page, subject, subjectTitle, question, language = "en" }) {

  const pageData = page[language] ? page[language] : page['en'];

  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { page_level: "detail", qa_question: pageData.data.title, qa_subject: subjectTitle });
  }, [])

  const formattedAnswer = pageData.data.answer.replace(/\\n/g, '\n');

  const handleSignUp = (e) => {
    e.preventDefault();
    mixpanel.track("MarketingPage_SignUp", { placement: 'Q&A', qa_question: pageData.data.title, qa_subject: subjectTitle }, { send_immediately: true }, () => {
      window.location.href = `https://${APP_URL}/signup`;
    })
    // window.location.href = `http://localhost:3001/signup?subject=${subject}&question=${pageData.data.title}`;
  }

  // const title = pageData.data.seo.title || pageData.data.title;
  // const seoTitle = `${pageData.data.seo.title} | ${pageData.data.title}`;
  const seoTitle = `Student Question : ${pageData.data.title} | ${subjectTitle} | QuickTakes`;
  const seoDescription = `Get the full answer from QuickTakes - ${pageData.data.seo.page_description || pageData.data.description}`;

  const relatedArticles = [];
  for (let i = 1; i <= 5; i++) {
    const relatedArticle = pageData.data[`related_article${i}`];
    if (relatedArticle) {
      relatedArticles.push(relatedArticle);
    }
  }

  return (
    <>
      <Head>
        <title>{seoTitle}</title>

        {/* 基础 Meta 标签 */}
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={pageData.data.seo.page_keywords} />

        {/* Open Graph 标签 */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITEMAP_DOMAIN}/learn/${subject}/questions/${question}`} />


        {/* 其他重要 Meta 标签 */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITEMAP_DOMAIN}/learn/${subject}/questions/${question}`} />
      </Head>

      <header className={styles['learn-subjects-header-container']}>
        <div className={styles['learn-subjects-center-container']}>
          <div className={styles["learn-question-info"]}>
            <Link href={`/learn/${subject}`} className={styles["back-btn"]} >
              <div className={styles["back-btn-icon"]}><img src="/backIcon.svg" /></div>
              <h3 className={styles["learn-question-subject"]}>back to {subjectTitle}</h3>
            </Link>

            <div className={styles["learn-question-title-container"]}>
              <h2 className={styles["learn-question-title"]}>
                {pageData.data.title}
              </h2>
              <div className={styles["banner-save-cta"]}>
                <Link href="#" onClick={handleSignUp} className={styles["banner-save-btn"]}>
                  Sign up to save this answer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles['learn-subjects-container']}>
        <div className={styles['learn-subjects-center-container']}>
          <h3 className={styles["learn-answer"]}>Answer</h3>
          <div className={styles["learn-answer-editor-container"]}>
            <ReactMarkdown
              children={formattedAnswer}
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            />
            {/* <div className={styles["learn-answer-blur"]}></div> */}
          </div>
          <div className={styles["anwser-shadow-content"]}>
            <div className={styles["anwser-shadow-title"]}>Create a free account to get more personalized answers!</div>
            <Link className={styles['sign-up-today']} href="#" onClick={handleSignUp} >Sign up</Link>
            <Link href={`/learn/${subject}`} className={styles['back-to-subjects']}>
              Explore more {subjectTitle} questions →
            </Link>
          </div>
          {!!relatedArticles.length > 0 && <>
            <h3 className={`${styles["learn-answer"]} ${styles["learn-answer-related"]}`}>Related Questions</h3>
            <div className={styles["learn-answer-related-articles"]}>
              {relatedArticles.map((item, index) => (
                <Link className={styles["question-item"]} href={`${item.url}`} key={index}>
                  <div className={styles["question-item-tag"]}>Question</div>
                  <h3 className={styles["question-item-name"]}>{item.title}</h3>
                  <div className={styles["question-item-btn"]}>View Answer</div>
                </Link>
              ))}
            </div>
          </>}
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  // let subjects = await filer.listItemSlugs('/learn');
  // subjects = subjects.filter(file => !file.includes('.DS_Store'));

  const paths = [];
  for (let subject of TOP_QUESTIONS_SUBJECTS) {
    const folderPath = `learn/${subject.key}`;
    const files = await filer.listItemSlugs(folderPath);
    if (!files) {
      return {
        notFound: true,
      };
    }
    const filteredFiles = files.filter(file => !file.includes('.DS_Store'));

    filteredFiles.forEach(file => {
      const question = file.replace('.md', '');

      paths.push({
        params: { subject: subject.key, question },
      });
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { subject, question } = params;

  const currtentSubject = TOP_QUESTIONS_SUBJECTS.find(item => item.key === subject);

  const filePath = `learn/${currtentSubject?.key}/${question}.md`;
  const pageData = await filer.getItem(filePath);

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      subject: currtentSubject?.key,
      question,
      subjectTitle: currtentSubject?.title,
      page: {
        en: JSON.parse(JSON.stringify(pageData)),
      }
    }
  };
}