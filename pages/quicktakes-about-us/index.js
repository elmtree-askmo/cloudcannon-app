
import { useEffect, useState } from 'react';

import SignUpNow from '../../component/sign-up-now';

import styles from '../../styles/about-us.module.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})
export default function AboutUs({layoutType, role, pageStr, page}) {
  const blocks = page.data.content_blocks;
  useEffect(()=>{
    mixpanel.track("Siter Student (About us) Open")
  },[])

  return (
    <>
      <Head>
        <title>About Us | QuickTakes | Meet the Team | Edkey, Inc.</title>
        <meta property="og:description" content="QuickTakes, by Edkey, Inc., is an AI-powered app that helps college students study smarter and learn faster. Learn more about our team and our vision!" />
      </Head>
      <div className={styles['about-us']}>
        {
          blocks.map((item, index)=>{
            return renderComponent(item._bookshop_name, index, item)
          })
        }
      </div>
    </>
  )
}

export async function getStaticProps(){
  const page = await filer.getItem('quicktakes-about-us.md');
  return {
    props:{
      page
    }
  }
}