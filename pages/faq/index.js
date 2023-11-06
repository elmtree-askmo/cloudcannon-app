// libs 
import { useEffect, useState } from 'react';
import { Collapse } from 'antd';

// components
import SignUpNow from '../../component/sign-up-now';

import styles from '../../styles/faq.module.css';
import mixpanel from 'mixpanel-browser';
import { questionsList } from '@/staticProps/faq.content';
import Head from 'next/head';

export default function FAQ({list, pageTitle}) {

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
              list.map((item,index)=>{
                return (
                  <Collapse.Panel header={item.label} key={index}>
                    <div className='FAQ-content'>{item.value}</div>
                  </Collapse.Panel>
                )
              })
            }
          </Collapse>
        </div>
      </div>
      <SignUpNow />
    </div>
  </>
  )
}

export async function getStaticProps(){
  const list = questionsList;
  return{
    props:{
      list,
      pageTitle:"FAQ"
    }
  }
}