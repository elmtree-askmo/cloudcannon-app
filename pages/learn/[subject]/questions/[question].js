import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import moment from 'moment';
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

// markdown
import ReactMarkdown from 'react-markdown';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import remarkGfm from 'remark-gfm';

import { TOP_QUESTIONS_SUBJECTS } from '../../../../constant/topQuestions.contant';
import { APP_URL } from "../../../../constant/app.constant";
import styles from '../../../../styles/learn.module.css';
// import 'katex/dist/katex.min.css';

const filer = new Filer({ path: 'content' });
export default function TopQuestion({ page, subject, subjectTitle, language = "en" }) {

  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { title: page.data.title });
  }, [])

  const pageData = page[language] ? page[language] : page['en'];

  const formattedAnswer = pageData.data.answer.replace(/\\n/g, '\n');

  const handleSignUp = (e) => {
    e.preventDefault();
    mixpanel.track("MarketingPage_SignUp", { placement: 'Q & A' }, { send_immediately: true }, () => {
      window.location.href = `https://${APP_URL}/signup`;
    })
  }

  return (
    <>
      <Head>
        <title>{pageData.data.seo.title || pageData.data.title}</title>
        <meta name="description" property="og:description" key="description" content={pageData.data.seo.page_description || pageData.data.description} />
        {
          pageData.data.seo.page_keywords &&
          <meta name="keywords" property="og:keywords" key="keywords" content={pageData.data.seo.page_keywords} />
        }
      </Head>
      <header className={styles['learn-subjects-header-container']}>
        <div className={styles['learn-subjects-center-container']}>
          <div className={styles["learn-question-info"]}>
            <Link href={`/learn/${subject}`} className={styles["back-btn"]} ><img src="/backIcon.svg" /></Link>
            <div>
              <div className={styles["learn-question-tag"]}>Question</div>
              <h2 className={styles["learn-question-title"]}>
                {pageData.data.title}
              </h2>
              <h3 className={styles["learn-question-subject"]}>{subjectTitle}</h3>
              <div className={styles["learn-question-date"]}>{pageData.data.post_on_text} {moment(pageData.data?.date).format(pageData.data.date_format || 'MMM DD, YYYY')}</div>
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
              // remarkPlugins={[remarkMath, remarkGfm]}
              // rehypePlugins={[rehypeKatex]}
            />
            <div className={styles["learn-answer-blur"]}></div>
          </div>
          <div className={styles["anwser-shadow-content"]}>
              <div className={styles["anwser-shadow-title"]}>Create a free account or sign in to view full answer.</div>
              <Link className={styles['sign-up-today']} href="#" onClick={handleSignUp} >View Answer</Link>
            </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  let subjects = await filer.listItemSlugs('/learn');
  subjects = subjects.filter(file => !file.includes('.DS_Store'));

  const paths = [];
  for (let subject of subjects) {
    const folderPath = `learn/${subject}`;
    const files = await filer.listItemSlugs(folderPath);
    const filteredFiles = files.filter(file => !file.includes('.DS_Store'));

    filteredFiles.forEach(file => {
      const question = file.replace('.md', '');

      paths.push({
        params: { subject, question },
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
      subjectTitle: currtentSubject?.title,
      page: {
        en: JSON.parse(JSON.stringify(pageData)),
      }
    }
  };
}