

import styles from '../../styles/institutions.module.css';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})

export default function Institutions({page}) {

  const blocks = page.data.content_blocks;
  
  useEffect(()=>{
      mixpanel.track("MarketingPage_Institutions")
  },[])

  return (
    <>
        <Head>
            <title>QuickTakes</title>
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
  const page = await filer.getItem('institutions.md');
  return {
    props:{
      page:JSON.parse(JSON.stringify(page))
    }
  }
}