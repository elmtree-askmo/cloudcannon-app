// libs 
import { useEffect } from 'react';

// components

import styles from '../../styles/education.module.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';

const filer = new Filer({path: 'content'})

export default function Education({page, language='en'}) {

  const blocks = page.data.content_blocks;

  useEffect(() => {
    mixpanel.track("MarketingPage_Education");
  }, [])

  return (
  <>
    <Head>
      <title>AI in Education | Adaptive Learning | AI Resources</title>
      <meta name="description" property="og:description" key="description" content="Get more information about AI in Education from thought leaders in the edtech space and beyond. Explore cutting-edge advancements from AI companies." />
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
  const page = await filer.getItem('education.md');
  return{
    props:{
      pageTitle:"Education",
      page
    }
  }
}