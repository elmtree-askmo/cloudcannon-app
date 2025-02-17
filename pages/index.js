import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';

import renderComponent from '@/util/componentsMapping';
import styles from '../styles/Home.module.css';

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
      </Head>
      <div className={styles['home']}>
        {
          blocks.map((item, index) => {
            return renderComponent(item._bookshop_name, index, item, null, language, null, utmParams)
          })
        }

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