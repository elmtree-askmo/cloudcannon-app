// libs 
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';

// components
import SignUpNow from '../../component/sign-up-now';

import styles from '../../styles/faq.module.css';
import mixpanel from 'mixpanel-browser';
import { questionsList } from '@/staticProps/faq.content';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})

export default function FAQ({content, pageTitle ,layoutType, role, pageStr, page}) {

  const blocks = page.data.content_blocks;

  useEffect(() => {
    mixpanel.track("Siter Student (FAQ) Open");
  }, [])

  return (
  <>
    <Head>
      <title>QuickTakes - FAQ</title>
    </Head>
    <div className={`FAQ-global`}>
      <div className={`desktop-view`}>
        <div className={styles.title}>{pageTitle}</div>
        <div className={styles['FAQ-list']}>
          {
            blocks.map((item, index)=>{
              return renderComponent(item._bookshop_name, index, content, item)
            })
          }
        </div>
      </div>
      <SignUpNow layoutType={layoutType} role={role} pageStr={pageStr} />
    </div>
  </>
  )
}

export async function getStaticProps(){
  const content = questionsList;
  const page = await filer.getItem('faq.md');
  return{
    props:{
      content,
      pageTitle:"FAQ",
      page
    }
  }
}