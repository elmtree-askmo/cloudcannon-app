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

const filer = new Filer({path: 'content'})

export default function FAQ({list, pageTitle ,layoutType, role, pageStr, page}) {

  const question_list = page.data.content_blocks.question_list;

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
          <Collapse className={styles['FAQ-collapse']} expandIcon={() => <img src='/arrow-icon.svg' />} accordion={false} expandIconPosition="end" >
            {
              question_list.map((item,index)=>{
                return (
                  <Collapse.Panel header={item.question} key={index}>
                    <div className='FAQ-content' dangerouslySetInnerHTML={{__html:item.answer}}></div>
                  </Collapse.Panel>
                )
              })
            }
          </Collapse>
        </div>
      </div>
      <SignUpNow layoutType={layoutType} role={role} pageStr={pageStr} />
    </div>
  </>
  )
}

export async function getStaticProps(){
  const list = questionsList;
  const page = await filer.getItem('faq.md');
  return{
    props:{
      list,
      pageTitle:"FAQ",
      page
    }
  }
}