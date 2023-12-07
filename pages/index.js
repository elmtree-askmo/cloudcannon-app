

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

export default function Home({content, layoutType, role, pageStr, page}) {

  const block = page.data.content_blocks;
  const video_section = block.video_section;
  const record_section = block.record_section;
  const portrait_section = block.portrait_section;
  const landscape_section = block.landscape_section;
  const testimonials_section = block.testimonials_section;
  console.log(block)
  
  useEffect(()=>{
      mixpanel.track("Siter Student Open")
      console.log(page.data)
  },[])

  const handleSignUpNow = ()=>{
    mixpanel.track("Siter Student Click Sign Up Now", {}, {send_immediately:true}, ()=>{
      window.location.href = `https://${APP_URL}/signup`;
    })
  }
  return (
    <>
      <Head>
        <title>QuickTakes for Students</title>
      </Head>
      <div className={styles['home']}>
        {/* {
          block.map((item, index)=>{
            return renderComponent(item._bookshop_name, index, content, page)
          })
        } */}
        <div className={styles['section-1-container']}>
          <div className={`${styles['section-1']} ${styles['main-container']}`}>
            <div className={styles['section-1-l']}>
              <h2>{content.heroBanner.title}</h2>
              <h2>{content.heroBanner.title_2}</h2>
              <h2>{content.heroBanner.title_3}</h2>
              <h1>{content.heroBanner.try} <strong>{content.heroBanner.quicktakes}</strong></h1>
              <p className={styles['free-for-student']}><strong>{content.heroBanner.free}</strong> {content.heroBanner.description}</p>
              <Button type="primary" className={`custom-antd-design-button-student ${styles['sign-up-now']}`} onClick={handleSignUpNow}>{`Sign Up Now!`}</Button>
              <p className={styles['download-quicktakes-today']}>{content.heroBanner.download} <strong>{content.heroBanner.quicktakes}</strong> {content.heroBanner.today}</p>
              <div className={styles['download-group']}>
                <Link href={appStoreLink} target='_blank'>
                  <img 
                    src="/appStore.svg"
                  />
                </Link>
                <Link href={googlePlayLink} target='_blank'>
                  <img 
                    src="/googlePlay.svg"
                  />
                </Link>
              </div>
            </div>
            <div className={styles['section-1-r']}>
              <img src='/home-student.png' />
            </div>
          </div>
        </div>

        <div className={styles['section-2-container']}>
          <div className={`${styles['section-2']} ${styles['main-container']}`} >
            <div className={styles['video-container']}>
              <iframe width="100%" height="100%" src={video_section.video_url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" allowFullScreen></iframe>
            </div>
            <div className={styles['robot-container']}>
              <img src='/home-robot.png' />
            </div>
            <div className={styles['learn-more-below']}>
              <p>{video_section.description}</p>
              <Link href="#section5">{content.videoContent.learn_more_below}</Link>
            </div>
          </div>
        </div>

        <div className={styles['section-3-container']}>
          <div className={`${styles['section-3']} ${styles['main-container']}`} >
            <div className={styles['quicktakes-can-help']}>
              {
                record_section.slogan.map((i, index)=>(
                  <h2 key={index}>{i.item}</h2>
                ))
              }
            </div>
            <div className={styles['mobile-container']}>
              <img src={record_section.image} />
            </div>
          </div>
        </div>

        <div className={styles['section-4-container']}>
          <div className={`${styles['section-4']} ${styles['main-container']}`} >
            {
              landscape_section.map((item, index)=>(
                <div key={index} className={styles['section-4-content-container']} style={item.reverse?{flexDirection:'row-reverse'}:{}}>
                  <div className={styles['section-4-content-container-l']}><img src={item.image} /></div>
                  <div className={styles['section-4-content-container-r']}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <p className={styles['section-4-content-container-b']}>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
        
        <div className={styles['section-5-container']} id="section5">
          <div className={`${styles['section-5']} ${styles['main-container']}`} >
              {
                portrait_section.map((item, index)=>(
                  <div key={index} className={styles['section-5-content-container']}>
                      <div className={styles['section-5-content-container-t']}><img src={item.image} /></div>
                      <h4>{item.title}</h4>
                      <div className={styles['desc']} dangerouslySetInnerHTML={{__html:item.description}} ></div>
                  </div>
                ))
              }
          </div>
        </div>

        <div className={styles['section-6-container']}>
          <div className={`${styles['section-6']} ${styles['main-container']}`} >
              <h2>{testimonials_section.title}</h2>
              {
                testimonials_section.list.map((item,index)=>(
                  <div className={styles['content-box']} key={index}>
                    <p className={styles['quote']}>{item.quote}</p>
                    <div>
                      <div className={styles['name']}>{item.name}</div>
                      <div className={styles['grade']}>{item.grade}</div>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>

        <SignUpNow tryItNow={false} layoutType={layoutType} role={role} pageStr={pageStr}  />
      </div>
    </>
  )
}

export async function getStaticProps(){
  const homeContent = content;
  const page = await filer.getItem('index.md');
  return {
    props:{
      content:homeContent,
      page:JSON.parse(JSON.stringify(page))
    }
  }
}