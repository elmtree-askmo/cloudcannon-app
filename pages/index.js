

import { Button } from 'antd';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { API_DOMAIN, APP_URL, X_API_KEY, appStoreLink, googlePlayLink } from '../constant/app.constant';
import SignUpNow from '../component/sign-up-now';
import axios from 'axios';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { content } from '../staticProps/home.content';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})

export default function Home({layoutType, role, pageStr, page}) {

  const blocks = page.data.content_blocks;
  
  useEffect(()=>{
      mixpanel.track("Siter Student Open")
      console.log(page.data)
  },[])

  return (
    <>
      <Head>
        <title>QuickTakes for Students</title>
      </Head>
      <div className={styles['home']}>
        {
          blocks.map((item, index)=>{
            return renderComponent(item._bookshop_name, index, item)
          })
        }
        <SignUpNow tryItNow={false} layoutType={layoutType} role={role} pageStr={pageStr}  />
        
      </div>
    </>
  )
}

export async function getStaticProps(){
  const page = await filer.getItem('index.md');
  return {
    props:{
      page:JSON.parse(JSON.stringify(page))
    }
  }
}