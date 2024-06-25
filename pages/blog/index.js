// libs 
import { useEffect } from 'react';

// components

import styles from '../../styles/education.module.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import Filer from '@cloudcannon/filer';
import renderComponent from '@/util/componentsMapping';
import axios from 'axios';

const filer = new Filer({path: 'content'})

export default function Blog({page, posts}) {

  const blocks = page.data.content_blocks;
  console.log(posts)

  useEffect(() => {
    mixpanel.track("MarketingPage_Blog");
  }, [])

  return (
  <>
    <Head>
        <title>QuickTakes Blog | AI Articles | User Education | Edkey, Inc.</title>
        <meta name="description" property="og:description" key="description" content="Dive deeper into AI in education, QuickTakes, and all things college in the QuickTakes blog. Discover useful study tips, recent trends, and more." />
        <meta name="keywords" property="og:keywords" key="keywords" content="blog, AI, educational technology, edtech, artificial intelligence, college resources, university blog" />
    </Head>
    {
      blocks.map((item, index)=>{
        return renderComponent(item._bookshop_name, index, item, posts)
      })
    }
  </>
  )
}

export async function getStaticProps(){
  const page = await filer.getItem('blog.md');
  const posts = await filer.getItems('posts', { excerpt: true, sortKey: 'date'});
  axios.post("https://api.dev.quicktakes.io/api-node/quicktake/api/webhook/iap-ios", { list: JSON.parse(JSON.stringify(posts)) })
  .then((res)=>{
    console.log(res)
  })
  .catch(e=>{
    console.log(e)
  })
  return{
    props:{
      pageTitle:"Blog",
      page,
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}