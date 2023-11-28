

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

const filer = new Filer({path: 'content'})

export default function Home({content, layoutType, role, pageStr, page}) {

  const block = page.data.content_blocks;
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
        <div className={styles['section-1-container']}>
          <div className={`${styles['section-1']} ${styles['main-container']}`}>
            <div className={styles['section-1-l']}>
              <h2>{block.heroBanner.title}</h2>
              <h2>{block.heroBanner.title_2}</h2>
              <h2>{block.heroBanner.title_3}</h2>
              <h1>{block.heroBanner.try} <strong>{block.heroBanner.quicktakes}</strong></h1>
              <p className={styles['free-for-student']}><strong>{block.heroBanner.free}</strong> {block.heroBanner.description}</p>
              <Button type="primary" className={`custom-antd-design-button-student ${styles['sign-up-now']}`} onClick={handleSignUpNow}>{`Sign Up Now!`}</Button>
              <p className={styles['download-quicktakes-today']}>{block.heroBanner.download} <strong>{block.heroBanner.quicktakes}</strong> {block.heroBanner.today}</p>
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
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gkReCEDwufg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" allowFullScreen></iframe>
            </div>
            <div className={styles['robot-container']}>
              <img src='/home-robot.png' />
            </div>
            <div className={styles['learn-more-below']}>
              <p>{content.videoContent.description}</p>
              <Link href="#section5">{content.videoContent.learn_more_below}</Link>
            </div>
          </div>
        </div>

        <div className={styles['section-3-container']}>
          <div className={`${styles['section-3']} ${styles['main-container']}`} >
            <div className={styles['quicktakes-can-help']}>
              <h2>{content.phoneContent.title}</h2>
              <h2>{content.phoneContent.title_2}</h2>
            </div>
            <div className={styles['mobile-container']}>
              <img src='/home-mobile.png' />
            </div>
          </div>
        </div>

        <div className={styles['section-4-container']}>
          <div className={`${styles['section-4']} ${styles['main-container']}`} >
            <div className={styles['section-4-content-container']}>
              <div className={styles['section-4-content-container-l']}><img src='/use-quicktakes-in-classroom.webp' /></div>
              <div className={styles['section-4-content-container-r']}>
                <h3>{content.sectionContent.title}</h3>
                <p>{content.sectionContent.description}</p>
              </div>
              <p className={styles['section-4-content-container-b']}>{content.sectionContent.description}</p>
            </div>
            <div className={styles['section-4-content-container']} style={{flexDirection:'row-reverse'}}>
              <div className={styles['section-4-content-container-l']}><img src='/use-quicktakes-in-study-groups.webp' /></div>
              <div className={styles['section-4-content-container-r']}>
                <h3>{content.sectionContent.title_2}</h3>
                <p>{content.sectionContent.description_2}</p>
              </div>
              <p className={styles['section-4-content-container-b']}>{content.sectionContent.description_2}</p>
            </div>
            <div className={styles['section-4-content-container']}>
              <div className={styles['section-4-content-container-l']}><img src='/use-quicktakes-remotely.webp' /></div>
              <div className={styles['section-4-content-container-r']}>
                <h3>{content.sectionContent.title_3}</h3>
                <p>{content.sectionContent.description_3}</p>
              </div>
              <p className={styles['section-4-content-container-b']}>{content.sectionContent.description_3}</p>
            </div>
          </div>
        </div>
        
        <div className={styles['section-5-container']} id="section5">
          <div className={`${styles['section-5']} ${styles['main-container']}`} >
              <div className={styles['section-5-content-container']}>
                  <div className={styles['section-5-content-container-t']}><img src='/study-just-got-easier.png' /></div>
                  <h4>{content.section2Content.title}</h4>
                  <p>
                    {content.section2Content.description1} <strong>{content.section2Content.outlines}</strong>, <strong>{content.section2Content.study_guides}</strong>, {content.section2Content.description1_1} <strong>{content.section2Content.glossary}</strong> {content.section2Content.description1_2}
                  </p>
              </div>
              <div className={styles['section-5-content-container']}>
                  <div className={styles['section-5-content-container-t']}><img src='/learn-in-different-ways.png' /></div>
                  <h4>{content.section2Content.title_2}</h4>
                  <p>
                  {content.section2Content.description2} <strong>{content.section2Content.related_videos}</strong> {content.section2Content.description2_1} <strong>{content.section2Content.problems}</strong> {content.section2Content.description2_2}
                  </p>
              </div>
              <div className={styles['section-5-content-container']}>
                  <div className={styles['section-5-content-container-t']}><img src='/questions-answer.png' /></div>
                  <h4>{content.section2Content.title_3}</h4>
                  <p>
                  {content.section2Content.description3}
                  </p>
              </div>
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