import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';

import renderComponentStatic from '@/util/componentsMapping';

import styles from '../styles/Home.module.css';

// 动态导入整个组件而不是函数
const DynamicComponent = ({ name, index, props, language, utmParams }) => {
  const Component = renderComponentStatic(name, index, props, null, language, null, utmParams);
  return Component;
};

const filer = new Filer({ path: 'content' })

export default function Home({ page, language, utmParams }) {
  const blocks = page.data.content_blocks;

  useEffect(() => {
    mixpanel.track("MarketingPage_Home")
  }, [])

  return (
    <>
      <Head>
        <title>QuickTakes | AI Study Sidekick | College Learning Tools</title>
        <meta name="description" property="og:description" key="description" content="QuickTakes, powered by artificial intelligence (AI), uses live lecture recordings and more to return quality study materials that help students study smarter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/hero-image.jpg" />
      </Head>
      <div className={styles['home']}>
        {blocks.map((item, index) => (
          <div key={index}>
            <DynamicComponent 
              name={item._bookshop_name}
              index={index}
              props={item}
              language={language}
              utmParams={utmParams}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const page = await filer.getItem('index.md');
  return {
    props: {
      page: JSON.parse(JSON.stringify(page))
    }
  }
}