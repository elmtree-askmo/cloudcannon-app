

import styles from '../../styles/institutions.module.css';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})

export default function Institutions({page, language='en'}) {

  const blocks = page.data.content_blocks;
  
  useEffect(()=>{
      mixpanel.track("MarketingPage_Institutions")
  },[])

  return (
    <>
        <Head>
            <title>{page.data.seo.title?page.data.seo.title:`QuickTakes`}</title>
            {
              page.data.seo.keywords &&
              <meta name="keywords" property="og:keywords" key="keywords" content={page.data.seo.keywords} />
            }
            {
              page.data.seo.description &&
              <meta name="description" property="og:description" key="description" content={page.data.seo.description} />
            }
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
  const page = await filer.getItem('institutions.md');
  return {
    props:{
      page:JSON.parse(JSON.stringify(page))
    }
  }
}