// libs 
import { useEffect } from 'react';

// components

import styles from '../../styles/pricing.module.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})

export default function Education({page, language}) {

  const blocks = page.data.content_blocks;

  useEffect(() => {
    mixpanel.track("MarketingPage_Plans");
  }, [])

  return (
  <>
    <Head>
      <title>Plans | Pricing | QuickTakes Subscription Packages</title>
      <meta name="description" property="og:description" key="description" content="At QuickTakes, we aim to make cutting-edge technology in education accessible to all. We offer a free version of the service and low-cost subscription options." />
    </Head>
    {
      blocks.map((item, index)=>{
        return renderComponent(item._bookshop_name, index, item, null, language)
      })
    }
  </>
  )
}

export async function getStaticProps(){
  const page = await filer.getItem('plans.md');
  return{
    props:{
      pageTitle:"Plans",
      page
    }
  }
}