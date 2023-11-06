import { Button } from 'antd';
import axios from 'axios';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react'
import Link from 'next/link';

import { API_DOMAIN, APP_URL, X_API_KEY, appStoreLink, googlePlayLink } from '../../constant/app.constant';
import TeacherSignUpNow from '../../component/teacher-sign-up-now'

import styles from '../../styles/teacherHome.module.css';
import Head from 'next/head';
import { content } from '@/staticProps/teacherHome.content';

export default function Teachers({ content, layoutType, role, pageStr}) { 

  useEffect(()=>{
    mixpanel.track("Siter Teacher Open")
  },[])


  const handleSignUpNow = () => {
    mixpanel.track("Siter Teacher Click Sign Up Now", {}, {}, ()=>{
      window.location.href = `https://${APP_URL}/signup`;
    })
  }


  return (
  <>
    <Head>
      <title>Quicktakes for Teachers</title>
    </Head>
    <div className={styles.teachers}>
      <div className={`${styles['teachers-sign-up']} desktop-view`}>
        <div className={styles['sign-up-title']}>{content.heroBanner.title}</div>
        <div className={styles['sign-up-background-mobile']}></div>
        <div className={styles['sign-up-hint']}><span>{content.heroBanner.quickTakescreates}</span> {content.heroBanner.title_2}</div>
        <div className={styles['inner-hint']}>{content.heroBanner.get_your} <span>{content.heroBanner.free}</span> {content.heroBanner.invite_today}</div>
        <div className={styles['sign-up-button']}><Button onClick={handleSignUpNow}>{content.heroBanner.btnTxt}</Button></div>
        <div className={styles["download-title"]}>{content.heroBanner.download} <span>{content.heroBanner.quicktakes}</span> {content.heroBanner.today}</div>
        <div className={styles['download-links']}>
          <a className={styles.ios} href={appStoreLink} />
          <a className={styles.aos} href={googlePlayLink} />
        </div>
      </div>
      <div className={styles['section1']}>
        <div className={`${styles.content} desktop-view`}>
          <div className={styles['section1-image']}></div>
          <div className={styles['section1-title']}>
            <div className={styles['title']}>{content.learnMoreContent.description}</div>
            <div className={styles.link}> <Link href="#section4">{content.learnMoreContent.learn_more_below}</Link></div>
          </div>
        </div>
      </div>
      <div className={styles['section2']}>
        <div className={`${styles.content} desktop-view`}>
          <div className={styles['section2-title']}>{content.phoneContent.title}</div>
          <div className={styles['section2-image']}></div>
        </div>
      </div>
      <div className={styles['section3']}>
        <div className={`${styles.content} desktop-view`}>
          <div className={styles['section3-images']}>
            <div className={styles['section3-image1']}><img src="./images/teachers-image3.webp" /></div>
            <div className={styles['section3-image2']}><img src="./images/teachers-image4.webp" /></div>
          </div>
          <div className={styles['section3-flex']}>
            <div className={styles['section3-image3']}><img src="./images/teachers-image5.webp" /></div>
            <div className={styles['section3-title']}>
              <div className={styles.title}>{content.sectionContent.title_2}</div>
              <div className={styles['section3-image3']}><img src="./images/teachers-image5.webp" /></div>
              <div className={styles.description}>{content.sectionContent.description_2}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section4']} id="section4">
        <div className={`${styles.content} desktop-view`}>
          <div className={styles['section4-box']}>
            <div className={styles['section4-image']}><img src="./images/teachers-image6.webp" /></div>
            <div className={styles.title}>{content.section2Content.title}</div>
            <div className={styles.description}>{content.section2Content.description1} <strong>{content.section2Content.outlines}</strong>, <strong>{content.section2Content.study_guides}</strong>, {content.section2Content.description1_1} <strong>{content.section2Content.practice_problems}</strong> {content.section2Content.description1_2}</div>
          </div>
          <div className={styles['section4-box']}>
            <div className={styles['section4-image']}><img src="./images/teachers-image7.png" /></div>
            <div className={styles.title}>{content.section2Content.title_2}</div>
            <div className={styles.description}>{content.section2Content.description2} <strong>{content.section2Content.videos_related}</strong> {content.section2Content.description2_1}</div>
          </div>
          <div className={styles['section4-box']}>
            <div className={styles['section4-image']}><img src="./images/teachers-image8.png" /></div>
            <div className={styles.title}>{content.section2Content.title_3}</div>
            <div className={styles.description}>{content.section2Content.description3} <strong>{content.section2Content.chat_assistant}</strong> {content.section2Content.description3_1} <strong>{content.section2Content.all_time}</strong>!</div>
          </div>
        </div>
      </div>
      <TeacherSignUpNow tryItNow={false} layoutType={layoutType} role={role} pageStr={pageStr} />
    </div>
  </>
  )
}

export async function getStaticProps(){
  const homeContent = content;
  return {
    props:{
      content:homeContent
    }
  }
}