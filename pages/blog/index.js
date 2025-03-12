// libs
import { useEffect } from "react";

// components

import styles from "../../styles/education.module.css";
import mixpanel from "mixpanel-browser";
import Head from "next/head";
import Filer from "@cloudcannon/filer";
import renderComponent from "@/util/componentsMapping";

const filer = new Filer({ path: "content" });

export default function Blog({ page, language = "en", mergedPosts }) {
  const blocks = page.data.content_blocks;

  useEffect(() => {
    mixpanel.track("MarketingPage_Blog");
  }, []);

  return (
    <>
      <Head>
        <title>QuickTakes Blog | AI Articles | User Education | Edkey, Inc.</title>
        <meta name="description" property="og:description" key="description" content="Dive deeper into AI in education, QuickTakes, and all things college in the QuickTakes blog. Discover useful study tips, recent trends, and more." />
        <meta name="keywords" property="og:keywords" key="keywords" content="blog, AI, educational technology, edtech, artificial intelligence, college resources, university blog" />
      </Head>
      {blocks.map((item, index) => {
        return renderComponent(item._bookshop_name, index, item, mergedPosts, language);
      })}
    </>
  );
}

export async function getStaticProps() {
  const page = await filer.getItem("blog.md");
  const posts = await filer.getItems("posts", { excerpt: true, sortKey: "date" });
  let posts_zh_hk = null;
  try {
    posts_zh_hk = await filer.getItems("posts_zh_hk", { excerpt: true, sortKey: "date" });
  } catch {}
  let posts_fr = null;
  try {
    posts_fr = await filer.getItems("posts_fr", { excerpt: true, sortKey: "date" });
  } catch {}
  let posts_sp = null;
  try {
    posts_sp = await filer.getItems("posts_sp", { excerpt: true, sortKey: "date" });
  } catch {}
  let mergedPosts = [];
  posts.forEach((item) => {
    mergedPosts.push({ en: item });
  });
  let fallbackSlugs = posts.map((item) => item.slug);
  if (posts_zh_hk) {
    posts_zh_hk.forEach((item) => {
      const index = fallbackSlugs.indexOf(item.slug);
      if (index !== -1) {
        mergedPosts[index]["zh_hk"] = item;
      }
    });
  }
  if (posts_fr) {
    posts_fr.forEach((item) => {
      const index = fallbackSlugs.indexOf(item.slug);
      if (index !== -1) {
        mergedPosts[index]["fr"] = item;
      }
    });
  }
  if (posts_sp) {
    posts_sp.forEach((item) => {
      const index = fallbackSlugs.indexOf(item.slug);
      if (index !== -1) {
        mergedPosts[index]["sp"] = item;
      }
    });
  }

  return {
    props: {
      pageTitle: "Blog",
      page,
      // posts: {
      //   en: JSON.parse(JSON.stringify(posts)),
      //   zh_hk: JSON.parse(JSON.stringify(posts_zh_hk)),
      //   fr: JSON.parse(JSON.stringify(posts_fr)),
      //   sp: JSON.parse(JSON.stringify(posts_sp)),
      // },
      mergedPosts: JSON.parse(JSON.stringify(mergedPosts)),
    },
  };
}
