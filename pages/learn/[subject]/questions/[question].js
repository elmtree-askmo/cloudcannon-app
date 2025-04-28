import Filer from "@cloudcannon/filer";
import Head from "next/head";
import Link from "next/link";
import mixpanel from "mixpanel-browser";
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { Carousel } from "antd";

// markdown
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

import HowItWorks from "@/components/home/howItWorks";
import QuickTakesTestimonies from "@/components/home/slideshow";
import QuestionItem from "@/components/learn/QuestionItem";

import { TOP_QUESTIONS_SUBJECTS, TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC, ALL_TOP_QUESTIONS_FUNC } from "../../../../constant/topQuestions.contant";
import { MAPPING_PREVIOUS_QUESTIONS } from "../../../../constant/mappingQuestions.contant";
import { APP_URL, SITEMAP_DOMAIN } from "../../../../constant/app.constant";
import styles from "../../../../styles/learn.module.css";
import "katex/dist/katex.min.css";

const filer = new Filer({ path: "content" });
export default function TopQuestion({ page, subjectKey, subjectTitle, questionKey, language = "en", student, howItWorksData }) {
  const pageData = page[language] ? page[language] : page["en"];
  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { page_level: "detail", qa_question: pageData.data.title, qa_subject: subjectTitle });
  }, []);

  const formattedAnswer = pageData.data.answer.replace(/\\n/g, "\n");

  const questionParams = () => {
    return `?subjectKey=${subjectKey}&questionKey=${questionKey}&subjectTitle=${subjectTitle}&questionTitle=${pageData.data.title}`
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    mixpanel.track("MarketingPage_SignUp", { placement: "Q&A", qa_question: pageData.data.title, qa_subject: subjectTitle }, { send_immediately: true }, () => {
      window.location.href = `${APP_URL}/signup${questionParams()}`;
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    mixpanel.track(`MarketingPage_Login`, {}, { send_immediately: true }, () => {
      window.location.href = `${APP_URL}/login${questionParams()}`;
    });
  };

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

  const carouselRef = useRef();
  const onPrev = () => {
    carouselRef.current.prev && carouselRef.current.prev();
  };
  const onNext = () => {
    carouselRef.current.next && carouselRef.current.next();
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localAppData = localStorage.getItem("appData");
    const appData = !!localAppData ? JSON.parse(localAppData) : {};

    // localStorage
    if(appData && appData.userId) {
      setIsLoggedIn(!!appData.userId);
    } else {
      // cookie
      const qtApp = getCookie(`qtapp`);
      const qtAppData = !!qtApp ? JSON.parse(qtApp) : {};
      if(qtAppData)
        setIsLoggedIn(!!qtAppData.userId);
    }
  }, []);

  const handleBackClick = () => {
    mixpanel.track("MarketingPage_BackToSubject", { qa_question: pageData.data.title, qa_subject: subjectTitle });
  };

  const handleRelatedItemClick = (item) => {
    mixpanel.track("MarketingPage_ToOtherQuestions", {
      qa_question: pageData.data.title,
      qa_subject: subjectTitle,
      qa_subject_next: item.subject,
      qa_question_next: item.title,
    });
  }

  return (
    <>
      <Head>
        <title>{seoTitle}</title>

        {/* SEO no index */}
        {pageData.data.noIndex ? (
          <>
            <meta name="robots" content={`noindex`} />
            <meta name="googlebot" content={`noindex`} />
          </>
        ) : (
          <>
            <meta name="robots" content="index, follow" />
          </>
        )}

        {/* SEO canonical URL */}
        {pageData.data.canonical ? (
          <link rel="canonical" href={pageData.data.canonical} />
        ) : (
          <link rel="canonical" href={`${SITEMAP_DOMAIN}/learn/${subjectKey}/questions/${questionKey}`} />
        )}


        {/* Basic Meta Tags */}
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={pageData.data.seo.page_keywords} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITEMAP_DOMAIN}/learn/${subjectKey}/questions/${questionKey}`} />

        <link rel="preload" href="/critical-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <header className={styles["learn-subjects-header-container"]}>
        <div className={styles["learn-subjects-center-container"]}>
          <div className={styles["learn-question-info"]}>
            <Link href={`/learn/${subjectKey}`} className={styles["back-btn"]} onClick={handleBackClick}>
              <div className={styles["back-btn-icon"]}>
                <img src="/backIcon.svg" />
              </div>
              <h3 className={styles["learn-question-subject"]}>back to {subjectTitle}</h3>
            </Link>

            <div className={styles["learn-question-title-container"]}>
              <h2 className={styles["learn-question-title"]}>{pageData.data.title}</h2>
              {!isLoggedIn && (
                <div className={styles["banner-save-cta"]}>
                  <Link href="#" onClick={handleSignUp} className={styles["banner-save-btn"]}>
                    Sign up to see the full answer
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className={`${styles["learn-subjects-container"]} ${isLoggedIn ? styles["logged-in"] : ""}`}>
        <div className={styles["learn-subjects-center-container"]}>
          <h3 className={styles["learn-answer"]}>Answer</h3>
          <div className={styles["learn-answer-editor-container"]}>
            <div className={`${styles["answer-markdown"]}`}>
              <Suspense fallback={<div>Loading...</div>}>
                <ReactMarkdown children={formattedAnswer} remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]} />
              </Suspense>
              <div className={styles["learn-answer-blur"]}></div>
            </div>
            {!isLoggedIn && (
              <div className={styles["sign-up-modal"]}>
                <div className={styles["sign-up-modal-left"]}>
                  <h3>
                    Create a <span>free account</span> to unlock this answer!
                  </h3>
                  <ul className={styles["features-list"]}>
                    <li>
                      <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.56249 20.8H14.4375C14.8094 20.8 15.1211 20.6754 15.3726 20.4263C15.6242 20.1771 15.75 19.8684 15.75 19.5C15.75 19.1316 15.6242 18.8229 15.3726 18.5738C15.1211 18.3246 14.8094 18.2 14.4375 18.2H6.56249C6.19062 18.2 5.87888 18.3246 5.62733 18.5738C5.37578 18.8229 5.25001 19.1316 5.25001 19.5C5.25001 19.8684 5.37578 20.1771 5.62733 20.4263C5.87888 20.6754 6.19062 20.8 6.56249 20.8ZM6.56249 15.6H14.4375C14.8094 15.6 15.1211 15.4754 15.3726 15.2262C15.6242 14.9771 15.75 14.6683 15.75 14.3C15.75 13.9317 15.6242 13.6229 15.3726 13.3737C15.1211 13.1246 14.8094 13 14.4375 13H6.56249C6.19062 13 5.87888 13.1246 5.62733 13.3737C5.37578 13.6229 5.25001 13.9317 5.25001 14.3C5.25001 14.6683 5.37578 14.9771 5.62733 15.2262C5.87888 15.4754 6.19062 15.6 6.56249 15.6ZM2.62499 26C1.90313 26 1.28517 25.7454 0.771103 25.2363C0.257034 24.7271 0 24.115 0 23.4V2.6C0 1.885 0.257034 1.27292 0.771103 0.763749C1.28517 0.254581 1.90313 0 2.62499 0H12.0422C12.3922 0 12.7258 0.0649965 13.043 0.195C13.3601 0.324999 13.6391 0.509168 13.8797 0.747497L20.2453 7.05251C20.4859 7.29085 20.6719 7.56708 20.8031 7.88126C20.9344 8.19543 21 8.52582 21 8.87253V23.4C21 24.115 20.7429 24.7271 20.2289 25.2363C19.7149 25.7454 19.0969 26 18.375 26H2.62499ZM11.8125 7.80003V2.6H2.62499V23.4H18.375V9.10001H13.125C12.7531 9.10001 12.4414 8.97543 12.1898 8.72628C11.9383 8.47707 11.8125 8.16835 11.8125 7.80003Z"
                          fill="#3FB2FF"
                        />
                      </svg>
                      <p>
                        Personalized <span>Studying</span>
                      </p>
                    </li>
                    <li>
                      <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.3125 1.83824H12.9375C14.0047 1.83824 14.6245 1.84214 15.0641 1.90261C15.2025 1.92165 15.2877 1.94223 15.3366 1.9574C15.3515 2.00744 15.3716 2.09458 15.3902 2.23626C15.4493 2.68599 15.4531 3.31995 15.4531 4.41176V20.5882C15.4531 21.6801 15.4493 22.314 15.3902 22.7638C15.3716 22.9054 15.3515 22.9925 15.3366 23.0426C15.2877 23.0578 15.2025 23.0784 15.0641 23.0974C14.6245 23.1579 14.0047 23.1618 12.9375 23.1618H4.3125C3.24526 23.1618 2.62554 23.1579 2.18592 23.0974C2.04746 23.0784 1.96229 23.0578 1.91336 23.0426C1.89853 22.9925 1.8784 22.9054 1.85982 22.7638C1.80067 22.314 1.79688 21.6801 1.79688 20.5882V4.41176C1.79688 3.31995 1.80067 2.68599 1.85982 2.23626C1.8784 2.09458 1.89853 2.00744 1.91336 1.9574C1.96229 1.94223 2.04746 1.92165 2.18592 1.90261C2.62554 1.84214 3.24526 1.83824 4.3125 1.83824ZM15.3933 1.98007C15.3927 1.98029 15.3877 1.9781 15.3798 1.97284C15.3899 1.97721 15.3938 1.97985 15.3933 1.98007ZM15.3215 1.91331C15.3164 1.90521 15.3143 1.90004 15.3145 1.89948C15.3147 1.89892 15.3173 1.89892 15.3215 1.91331ZM15.3145 23.1005C15.3143 23.1 15.3164 23.0948 15.3215 23.0867C15.3173 23.097 15.3147 23.1011 15.3145 23.1005ZM15.3896 23.0213C15.3873 23.0225 15.3839 23.0244 15.3798 23.0272C15.3899 23.0228 15.3938 23.0202 15.3933 23.02C15.393 23.0199 15.3917 23.0203 15.3896 23.0213ZM1.85674 23.02C1.8573 23.0197 1.86233 23.0219 1.87024 23.0272C1.86018 23.0228 1.85617 23.0202 1.85674 23.02ZM1.92846 23.0867C1.93359 23.0948 1.93575 23.0999 1.93554 23.1005C1.93529 23.1011 1.93272 23.0971 1.92846 23.0867ZM1.93554 1.89948C1.93575 1.90004 1.93359 1.90522 1.92846 1.91334C1.93272 1.90297 1.93529 1.89892 1.93554 1.89948ZM1.87029 1.97283C1.86233 1.9781 1.8573 1.98029 1.85674 1.98007C1.85617 1.97985 1.86018 1.97721 1.87029 1.97283ZM0 4.41176C0 2.33204 1.22402e-07 1.29217 0.63155 0.646087C1.2631 1.2522e-07 2.27957 0 4.3125 0H12.9375C14.9704 0 15.9869 1.2522e-07 16.6185 0.646087C16.8553 0.888372 17.0033 1.18603 17.0958 1.57313C17.0881 1.54104 17.0801 1.50955 17.0716 1.47866C18.2966 1.50539 19.0085 1.62054 19.4935 2.11668C19.7107 2.33887 19.8532 2.60763 19.9466 2.94925C21.1716 2.97598 21.8835 3.09112 22.3684 3.58723C23 4.23335 23 5.27321 23 7.35294V17.6471C23 19.7268 23 20.7666 22.3684 21.4127C21.8835 21.9089 21.1716 22.024 19.9466 22.0507C19.8532 22.3924 19.7107 22.6611 19.4935 22.8834C19.0085 23.3795 18.2966 23.4946 17.0716 23.5213C16.9782 23.863 16.8356 24.1317 16.6185 24.3539C15.9869 25 14.9704 25 12.9375 25H4.3125C2.27957 25 1.2631 25 0.63155 24.3539C1.22402e-07 23.7078 0 22.668 0 20.5882V4.41176ZM17.2455 21.6778C17.5249 21.6685 17.7489 21.653 17.9391 21.6268C18.0776 21.6078 18.1628 21.5872 18.2117 21.572C18.2265 21.522 18.2466 21.4348 18.2652 21.2932C18.3243 20.8434 18.3282 20.2095 18.3282 19.1176V5.88235C18.3282 4.79054 18.3243 4.15656 18.2652 3.70682C18.2466 3.56517 18.2265 3.47804 18.2117 3.42799C18.1628 3.41281 18.0776 3.39222 17.9391 3.37321C17.7489 3.347 17.5249 3.33146 17.2455 3.32221C17.25 3.64994 17.25 4.0116 17.25 4.41176V20.5882C17.25 20.9884 17.25 21.3501 17.2455 21.6778ZM20.814 20.1562C20.6238 20.1824 20.3999 20.198 20.1205 20.2072C20.1251 19.8795 20.1251 19.5178 20.1251 19.1176V5.88235C20.1251 5.48219 20.1251 5.12053 20.1205 4.7928C20.3999 4.80204 20.6238 4.81759 20.814 4.8438C20.9525 4.86281 21.0377 4.8834 21.0866 4.89858C21.1015 4.94863 21.1216 5.03576 21.1402 5.17741C21.1993 5.62715 21.2031 6.26113 21.2031 7.35294V17.6471C21.2031 18.7389 21.1993 19.3728 21.1402 19.8226C21.1215 19.9642 21.1015 20.0514 21.0866 20.1014C21.0377 20.1166 20.9525 20.1372 20.814 20.1562ZM18.2683 3.45068C18.2677 3.45089 18.2627 3.44868 18.2548 3.44343C18.2649 3.44779 18.2688 3.45042 18.2683 3.45068ZM18.1966 3.38387C18.1914 3.37578 18.1893 3.37064 18.1895 3.37006C18.1897 3.36948 18.1923 3.37358 18.1966 3.38387ZM18.1895 21.6299C18.1893 21.6294 18.1915 21.6242 18.1966 21.6161C18.1923 21.6265 18.1897 21.6305 18.1895 21.6299ZM18.2548 21.5566C18.2627 21.5513 18.2677 21.5491 18.2683 21.5493C18.2688 21.5496 18.2649 21.5522 18.2548 21.5566ZM21.1433 4.92127C21.1427 4.92148 21.1377 4.91927 21.1297 4.91402C21.1398 4.91838 21.1438 4.921 21.1433 4.92127ZM21.0715 4.85446C21.0664 4.84637 21.0643 4.84123 21.0645 4.84065C21.0647 4.84007 21.0673 4.84417 21.0715 4.85446ZM21.0645 20.1593C21.0644 20.1591 21.0646 20.1584 21.0651 20.1571C21.0661 20.1548 21.0682 20.1508 21.0715 20.1455C21.0673 20.1559 21.0647 20.1599 21.0645 20.1593ZM21.1297 20.086C21.1376 20.0807 21.1427 20.0785 21.1433 20.0787C21.1438 20.079 21.1398 20.0816 21.1297 20.086Z"
                          fill="#3FB2FF"
                        />
                      </svg>
                      <p>
                        Stay <span>Organized</span>
                      </p>
                    </li>
                    <li>
                      <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.87499 28C2.08438 28 1.40757 27.7259 0.844541 27.1775C0.281513 26.6292 0 25.97 0 25.2V2.8C0 2.03 0.281513 1.37083 0.844541 0.822499C1.40757 0.274164 2.08438 0 2.87499 0H20.125C20.9156 0 21.5925 0.274164 22.1554 0.822499C22.7185 1.37083 23 2.03 23 2.8V25.2C23 25.97 22.7185 26.6292 22.1554 27.1775C21.5925 27.7259 20.9156 28 20.125 28H2.87499ZM2.87499 25.2H20.125V2.8H17.25V11.375C17.25 11.655 17.1302 11.8591 16.8906 11.9875C16.651 12.1158 16.4114 12.11 16.1719 11.97L14.4109 10.92C14.1713 10.78 13.9258 10.71 13.6742 10.71C13.4227 10.71 13.1771 10.78 12.9375 10.92L11.1765 11.97C10.937 12.11 10.6914 12.1158 10.4398 11.9875C10.1883 11.8591 10.0625 11.655 10.0625 11.375V2.8H2.87499V25.2Z"
                          fill="#3FB2FF"
                        />
                      </svg>
                      <p>
                        <span>How it works</span> illustration
                      </p>
                    </li>
                    <li>
                      <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.5613 17.625L11.7085 18.825C11.7331 19.025 11.8129 19.1875 11.9479 19.3125C12.0829 19.4375 12.2486 19.5 12.445 19.5H14.065C14.2613 19.5 14.427 19.4375 14.562 19.3125C14.697 19.1875 14.7768 19.025 14.8014 18.825L14.9486 17.625C15.145 17.55 15.323 17.4625 15.4825 17.3625C15.642 17.2625 15.7832 17.15 15.9059 17.025L17.0105 17.5125C17.1823 17.5875 17.3541 17.6 17.526 17.55C17.6978 17.5 17.8328 17.3875 17.931 17.2125L18.7411 15.7875C18.8392 15.6125 18.8699 15.4375 18.8331 15.2625C18.7963 15.0875 18.7042 14.9375 18.5569 14.8125L17.5996 14.1C17.6487 13.9 17.6733 13.7 17.6733 13.5C17.6733 13.3 17.6487 13.1 17.5996 12.9L18.5569 12.1875C18.7042 12.0625 18.7963 11.9125 18.8331 11.7375C18.8699 11.5625 18.8392 11.3875 18.7411 11.2125L17.931 9.78753C17.8328 9.61248 17.6978 9.49998 17.526 9.45003C17.3541 9.40002 17.1823 9.41249 17.0105 9.48751L15.9059 9.97499C15.7832 9.85002 15.642 9.73752 15.4825 9.63749C15.323 9.53752 15.145 9.45003 14.9486 9.37501L14.8014 8.17499C14.7768 7.97499 14.697 7.81248 14.562 7.68751C14.427 7.56247 14.2613 7.49999 14.065 7.49999H12.445C12.2486 7.49999 12.0829 7.56247 11.9479 7.68751C11.8129 7.81248 11.7331 7.97499 11.7085 8.17499L11.5613 9.37501C11.3649 9.45003 11.1869 9.53752 11.0274 9.63749C10.8679 9.73752 10.7267 9.85002 10.604 9.97499L9.49939 9.48751C9.32758 9.41249 9.15577 9.40002 8.98389 9.45003C8.81209 9.49998 8.67707 9.61248 8.57892 9.78753L7.76886 11.2125C7.67071 11.3875 7.64003 11.5625 7.67683 11.7375C7.71363 11.9125 7.80572 12.0625 7.95297 12.1875L8.9103 12.9C8.86119 13.1 8.83664 13.3 8.83664 13.5C8.83664 13.7 8.86119 13.9 8.9103 14.1L7.95297 14.8125C7.80572 14.9375 7.71363 15.0875 7.67683 15.2625C7.64003 15.4375 7.67071 15.6125 7.76886 15.7875L8.57892 17.2125C8.67707 17.3875 8.81209 17.5 8.98389 17.55C9.15577 17.6 9.32758 17.5875 9.49939 17.5125L10.604 17.025C10.7267 17.15 10.8679 17.2625 11.0274 17.3625C11.1869 17.4625 11.3649 17.55 11.5613 17.625ZM13.255 15.75C12.6413 15.75 12.1197 15.5313 11.6901 15.0937C11.2606 14.6563 11.0458 14.125 11.0458 13.5C11.0458 12.875 11.2606 12.3437 11.6901 11.9063C12.1197 11.4687 12.6413 11.25 13.255 11.25C13.8686 11.25 14.3902 11.4687 14.8198 11.9063C15.2493 12.3437 15.4641 12.875 15.4641 13.5C15.4641 14.125 15.2493 14.6563 14.8198 15.0937C14.3902 15.5313 13.8686 15.75 13.255 15.75ZM4.41832 23.55C3.01916 22.25 1.93301 20.7313 1.15981 18.9938C0.386603 17.2563 0 15.425 0 13.5C0 9.74999 1.28868 6.56251 3.86603 3.93753C6.44336 1.3125 9.57305 0 13.255 0C16.3232 0 19.0418 0.918746 21.4104 2.75625C23.7791 4.59376 25.3194 6.9875 26.0313 9.93751L27.9459 17.625C28.0686 18.1 27.9827 18.5312 27.6882 18.9187C27.3936 19.3063 27.0009 19.5 26.5099 19.5H23.5643V24C23.5643 24.825 23.276 25.5312 22.6991 26.1187C22.1223 26.7063 21.4288 27 20.6188 27H17.6733V28.5C17.6733 28.925 17.5321 29.2813 17.2499 29.5688C16.9675 29.8563 16.6178 30 16.2005 30C15.7832 30 15.4334 29.8563 15.1512 29.5688C14.8688 29.2813 14.7277 28.925 14.7277 28.5V25.5C14.7277 25.075 14.8688 24.7187 15.1512 24.4312C15.4334 24.1438 15.7832 24 16.2005 24H20.6188V18C20.6188 17.575 20.76 17.2188 21.0422 16.9313C21.3245 16.6437 21.6743 16.5 22.0916 16.5H24.5953L23.1962 10.6875C22.6316 8.41252 21.4288 6.56251 19.5879 5.13749C17.7469 3.71253 15.6359 3 13.255 3C10.4076 3 7.97753 4.01249 5.96473 6.03749C3.95193 8.06249 2.94557 10.525 2.94557 13.425C2.94557 14.925 3.24627 16.35 3.8476 17.7C4.449 19.05 5.30198 20.25 6.40656 21.3L7.36389 22.2V28.5C7.36389 28.925 7.22275 29.2813 6.94042 29.5688C6.65815 29.8563 6.30835 30 5.89107 30C5.47379 30 5.12405 29.8563 4.84172 29.5688C4.55945 29.2813 4.41832 28.925 4.41832 28.5V23.55Z"
                          fill="#3FB2FF"
                        />
                      </svg>
                      <p>
                        <span>24/7</span> Class Assistant
                      </p>
                    </li>
                  </ul>
                  <button onClick={handleSignUp} className={styles["sign-up-btn"]}>
                    Sign up
                  </button>
                  <p className={styles["login-text"]}>
                    Already have an account?{" "}
                    <Link href="#" onClick={handleLogin}>
                      Log in
                    </Link>
                  </p>
                </div>
                <div className={styles["sign-up-modal-right"]}>
                  <h3>Students Love QuickTakes</h3>
                  <p className={styles["subtitle"]}>Don't just take our word for it. See what college students are saying!</p>
                  <div className={styles["testimonial-carousel"]}>
                    <Carousel ref={carouselRef} dots={true} autoplaySpeed={5000} waitForAnimate autoplay={false}>
                      {student?.slides.map((item, index) => {
                        return (
                          <div className={styles["testimonial-card"]} key={index}>
                            <div className={styles["card-background"]}>
                              <div className={styles["testimonial-avatar"]}>
                                <img src={item.avatar} />
                              </div>
                              <h4>
                                {" "}
                                <span>{item.name[language]}</span> - <span>{item.grade[language]}</span>
                              </h4>
                              <p>{item.description[language]}</p>
                            </div>
                          </div>
                        );
                      })}
                    </Carousel>
                    <div className={styles.arrowLeft} onClick={onPrev}>
                      <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_84_1238" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="32">
                          <rect width="31" height="31" transform="matrix(-1 0 0 1 31 0.5)" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_84_1238)">
                          <path
                            d="M14.627 16.0007L18.5989 19.9725L16.7905 21.8132L10.978 16.0007L16.7905 10.1882L18.5989 12.0288L14.627 16.0007ZM15.4989 28.9173C17.2857 28.9173 18.9648 28.5783 20.5364 27.9001C22.1079 27.222 23.4749 26.3017 24.6374 25.1392C25.7999 23.9767 26.7202 22.6097 27.3983 21.0382C28.0765 19.4666 28.4155 17.7875 28.4155 16.0007C28.4155 14.2138 28.0765 12.5347 27.3983 10.9632C26.7202 9.39162 25.7999 8.02461 24.6374 6.86211C23.4749 5.69961 22.1079 4.7793 20.5364 4.10117C18.9648 3.42305 17.2857 3.08398 15.4989 3.08398C13.7121 3.08398 12.0329 3.42305 10.4614 4.10117C8.88983 4.7793 7.52282 5.69961 6.36032 6.86211C5.19782 8.02461 4.27751 9.39162 3.59938 10.9632C2.92126 12.5347 2.5822 14.2138 2.5822 16.0007C2.5822 17.7875 2.92126 19.4666 3.59938 21.0382C4.27751 22.6097 5.19782 23.9767 6.36032 25.1392C7.52282 26.3017 8.88983 27.222 10.4614 27.9001C12.0329 28.5783 13.7121 28.9173 15.4989 28.9173ZM15.4989 26.334C12.6141 26.334 10.1707 25.3329 8.16865 23.3309C6.16657 21.3288 5.16553 18.8854 5.16553 16.0007C5.16553 13.1159 6.16657 10.6725 8.16865 8.67044C10.1707 6.66836 12.6141 5.66732 15.4989 5.66732C18.3836 5.66732 20.827 6.66836 22.8291 8.67044C24.8312 10.6725 25.8322 13.1159 25.8322 16.0007C25.8322 18.8854 24.8312 21.3288 22.8291 23.3309C20.827 25.3329 18.3836 26.334 15.4989 26.334Z"
                            fill="#282E3F"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={styles.arrowRight} onClick={onNext}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_84_1248" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                          <rect width="32" height="32" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_84_1248)">
                          <path
                            d="M16.8998 15.9993L12.7998 20.0993L14.6665 21.9993L20.6665 15.9993L14.6665 9.99935L12.7998 11.8993L16.8998 15.9993ZM15.9998 29.3327C14.1554 29.3327 12.4221 28.9827 10.7998 28.2827C9.17761 27.5827 7.7665 26.6327 6.5665 25.4327C5.3665 24.2327 4.4165 22.8216 3.7165 21.1993C3.0165 19.5771 2.6665 17.8438 2.6665 15.9993C2.6665 14.1549 3.0165 12.4216 3.7165 10.7993C4.4165 9.17713 5.3665 7.76602 6.5665 6.56602C7.7665 5.36602 9.17761 4.41602 10.7998 3.71602C12.4221 3.01602 14.1554 2.66602 15.9998 2.66602C17.8443 2.66602 19.5776 3.01602 21.1998 3.71602C22.8221 4.41602 24.2332 5.36602 25.4332 6.56602C26.6332 7.76602 27.5832 9.17713 28.2832 10.7993C28.9832 12.4216 29.3332 14.1549 29.3332 15.9993C29.3332 17.8438 28.9832 19.5771 28.2832 21.1993C27.5832 22.8216 26.6332 24.2327 25.4332 25.4327C24.2332 26.6327 22.8221 27.5827 21.1998 28.2827C19.5776 28.9827 17.8443 29.3327 15.9998 29.3327ZM15.9998 26.666C18.9776 26.666 21.4998 25.6327 23.5665 23.566C25.6332 21.4993 26.6665 18.9771 26.6665 15.9993C26.6665 13.0216 25.6332 10.4993 23.5665 8.43268C21.4998 6.36602 18.9776 5.33268 15.9998 5.33268C13.0221 5.33268 10.4998 6.36602 8.43317 8.43268C6.3665 10.4993 5.33317 13.0216 5.33317 15.9993C5.33317 18.9771 6.3665 21.4993 8.43317 23.566C10.4998 25.6327 13.0221 26.666 15.9998 26.666Z"
                            fill="#282E3F"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {!!relatedArticles.length > 0 && (
            <>
              <h3 className={`${styles["learn-answer"]} ${styles["learn-answer-related"]}`}>Related Questions</h3>
              <ul className={styles["questions-list"]} role="list">
                {relatedArticles.map((item, index) => (
                  <QuestionItem key={index} item={item} onClick={handleRelatedItemClick} />
                ))}
              </ul>
            </>
          )}

          {/* Add HowItWorks section */}
          <HowItWorks block={howItWorksData} language={language} isLearnPage={true} subjectTitle={subjectTitle} question={pageData.data.title} />
        </div>
      </div>
      {/* Add QuickTakes Testimonies */}
      <QuickTakesTestimonies block={student} language={language} isLearnPage={true} />
    </>
  );
}

export async function getStaticPaths() {
  // let subjects = await filer.listItemSlugs('/learn');
  // subjects = subjects.filter(file => !file.includes('.DS_Store'));

  // get all subjects with hidden
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);

  const paths = [];
  for (let subject of subjects) {
    const folderPath = `learn/${subject.key}`;
    const files = await filer.listItemSlugs(folderPath);
    if (!files) {
      return {
        notFound: true,
      };
    }
    const filteredFiles = files.filter((file) => !file.includes(".DS_Store"));

    filteredFiles.forEach((file) => {
      const question = file.replace(".md", "");

      paths.push({
        params: { subject: subject.key, question },
      });
    });
  }

  // patch the previous questions
  for (let obj of MAPPING_PREVIOUS_QUESTIONS) {
    const { previous, question } = obj;
    paths.push({
      params: { subject: previous, question },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { subject, question } = params;
  const subjects = await TOP_QUESTIONS_SUBJECTS_HIDDEN_FUNC(filer);
  const currentSubject = subjects.find((item) => item.key === subject);
  const filePath = `learn/${currentSubject?.key}/${question}.md`;
  const noIndex = TOP_QUESTIONS_SUBJECTS.find((item) => item.key === currentSubject.key) ? 0 : 1;

  // Parallel data loading
  const [pageData, studentMd] = await Promise.all([
    (async function (filePath) {
      return new Promise((resolve, reject) => {
        filer
          .getItem(filePath)
          .then((file) => {
            resolve(file);
          })
          .catch(async (error) => {
            // read all questions from file system
            const questions = await ALL_TOP_QUESTIONS_FUNC(filer);
            const newSubject = questions ? questions[question] : null;
            const newFilePath = newSubject ? `learn/${newSubject}/${question}.md` : null;
            const md = newFilePath ? await filer.getItem(newFilePath) : null;
            if(md && md.data) {
              const obj = MAPPING_PREVIOUS_QUESTIONS.find((item) => item.question === question);
              const currSub = obj ? obj.current : newSubject;
              md.data.noIndex = 1;
              md.data.canonical = `${SITEMAP_DOMAIN}/learn/${currSub}/questions/${question}`;
            }
            resolve(md);
          });
      });
    })(filePath),
    filer.getItem("index.md"),
  ]);

  // remove from SEO
  if (pageData && pageData.data && (noIndex || !!pageData.data.no_index)) pageData.data.noIndex = 1;

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  const student = studentMd.data.content_blocks.find((block) => block._bookshop_name === "home/slideshow");
  const howItWorksData = studentMd.data.content_blocks.find((block) => block._bookshop_name === "home/howItWorks");

  return {
    props: {
      subjectKey: currentSubject?.key,
      subjectTitle: currentSubject?.title,
      questionKey: question,
      page: {
        en: JSON.parse(JSON.stringify(pageData)),
      },
      student: JSON.parse(JSON.stringify(student)),
      howItWorksData: JSON.parse(JSON.stringify(howItWorksData)),
    },
  };
}
