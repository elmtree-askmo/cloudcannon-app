
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
        <title>QuickTakes - About us</title>
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