// libs 
import { useEffect } from 'react';

// components

import styles from '../../styles/faq.module.css';
import mixpanel from 'mixpanel-browser';
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
    {
      blocks.map((item, index)=>{
        return renderComponent(item._bookshop_name, index, item)
      })
    }
  </>
  )
}

export async function getStaticProps(){
  const page = await filer.getItem('faq.md');
  return{
    props:{
      pageTitle:"FAQ",
      page
    }
  }
}