import { useEffect } from 'react';

// components

import styles from '../../styles/education.module.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';
import { TOP_QUESTIONS_SUBJECTS } from '@/constant/topQuestions.contant';

const filer = new Filer({ path: 'content' })

export default function TopQuestions({ page, language = 'en', posts }) {

  const blocks = page.data.content_blocks;

  useEffect(() => {
    mixpanel.track("MarketingPage_TopQuestions", { page_level: "home" });
  }, [])

  return (
    <>
      <Head>
        <title>QuickTakes TopQuestions | AI Articles | User Education | Edkey, Inc.</title>
        <meta name="description" property="og:description" key="description" content="Dive deeper into AI in education, QuickTakes, and all things college in the QuickTakes blog. Discover useful study tips, recent trends, and more." />
        <meta name="keywords" property="og:keywords" key="keywords" content="Top Questions, AI, educational technology, edtech, artificial intelligence, college resources, university blog" />
      </Head>
      {
        blocks.map((item, index) => {
          return renderComponent(item._bookshop_name, index, item, posts, language)
        })
      }
    </>
  )
}

export async function getStaticProps() {
  const page = await filer.getItem('learn.md');
  const posts = TOP_QUESTIONS_SUBJECTS.map((item) => {
    const { title, key } = item;
    return {
      title: {
        en: title,
        zh_hk: title,
        fr: title,
        sp: title,
      },
      key
    };
  })
  return {
    props: {
      pageTitle: "Top Questions",
      page,
      posts,
      // posts: {
      //   en: JSON.parse(JSON.stringify(posts)),
      //   zh_hk: JSON.parse(JSON.stringify(posts_zh_hk)),
      //   fr: JSON.parse(JSON.stringify(posts_fr)),
      //   sp: JSON.parse(JSON.stringify(posts_sp)),
      // },
      // mergedPosts: JSON.parse(JSON.stringify(mergedPosts))
    }
  }
}
