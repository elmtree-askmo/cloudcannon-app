import Filer from "@cloudcannon/filer";
import Head from "next/head";
import styles from "../../styles/blog.module.css";
import Link from "next/link";
import moment from "moment";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

const filer = new Filer({ path: "content" });
export default function Post({ page, language }) {
  useEffect(() => {
    mixpanel.track("MarketingPage_Article", { title: page.data.title });
  }, []);

  const pageData = page[language] ? page[language] : page["en"];

  return (
    <>
      <Head>
        <title>{pageData.data.seo.title || pageData.data.title}</title>
        <meta name="description" property="og:description" key="description" content={pageData.data.seo.page_description || pageData.data.description} />
        {pageData.data.seo.page_keywords && <meta name="keywords" property="og:keywords" key="keywords" content={pageData.data.seo.page_keywords} />}
      </Head>
      <div className={styles["blog-content-container"]}>
        <div className={styles["blog-content-center-container"]}>
          <h2 className={styles["blog-content-title"]}>
            <Link href="/blog" className={styles["blog-back-btn"]}>
              <img src="/backIcon.svg" />
            </Link>
            {pageData.data.article_title}
          </h2>
          <p className={styles["blog-content-description"]}>{pageData.data.description}</p>
          <span className={styles["blog-content-date"]}>
            {pageData.data.post_on_text} {moment(pageData.data?.date).format(pageData.data.date_format || "MMM DD, YYYY")}
          </span>
          <div className={styles["blog-featured-image"]}>
            <img src={pageData.data.featuredImg.image} />
          </div>
        </div>
      </div>
      <div className={styles["blog-content-article-container"]}>
        <div className={styles["blog-content-article-center-container"]}>
          <div className={styles["blog-content-editor-container"]} dangerouslySetInnerHTML={{ __html: pageData.content_html }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = (await filer.listItemSlugs("posts")).map((slug) => ({ params: { slug } }));
  const ignored = {};
  return {
    paths: slugs.filter(({ params }) => !ignored[params.slug]),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await filer.getItem(`${params.slug}.md`, { folder: "posts" });
  let page_zh_hk = null;
  try {
    page_zh_hk = await filer.getItem(`${params.slug}.md`, { folder: "posts_zh_hk" });
  } catch {}
  let page_fr = null;
  try {
    page_fr = await filer.getItem(`${params.slug}.md`, { folder: "posts_fr" });
  } catch {}
  let page_sp = null;
  try {
    page_sp = await filer.getItem(`${params.slug}.md`, { folder: "posts_sp" });
  } catch {}

  return {
    props: {
      page: {
        en: JSON.parse(JSON.stringify(page)),
        zh_hk: JSON.parse(JSON.stringify(page_zh_hk)),
        fr: JSON.parse(JSON.stringify(page_fr)),
        sp: JSON.parse(JSON.stringify(page_sp)),
      },
    },
  };
}
