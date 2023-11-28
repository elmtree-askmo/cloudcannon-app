
import { useEffect, useState } from 'react';

import SignUpNow from '../../component/sign-up-now';

import styles from '../../styles/about-us.module.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import { aboutUsContent } from '@/staticProps/aboutUs.content';
import Filer from '@cloudcannon/filer';

const filer = new Filer({path: 'content'})
export default function AboutUs({content, layoutType, role, pageStr, page}) {
  const aboutEdkey = page.data.content_blocks.About_Edkey;
  const foundingTeam = page.data.content_blocks.Founding_Team;
  useEffect(()=>{
    mixpanel.track("Siter Student (About us) Open")
  },[])

  return (
    <>
      <Head>
        <title>QuickTakes - About us</title>
      </Head>
      <div className={styles['about-us']}>
        <div className={`${styles.content} desktop-view`}>
          <div className={styles['about-us-image']}><img src='./images/about-us-image.webp' /></div>
          <div className={styles['about-us-title']}>{content.edkeyInfo.about} <span>{content.edkeyInfo.edkey}</span></div>
          <div className={styles['auout-us-content']}>{aboutEdkey.paragraph1}</div>
          <div className={styles['auout-us-content']}>{aboutEdkey.paragraph2}</div>
          <div className={styles['auout-us-content']}>{aboutEdkey.paragraph3}</div>
          <div className={styles['auout-us-content']}>{aboutEdkey.paragraph4}</div>
        </div>
        <div className={styles['founding-team']}>
          <div className={`${styles.content} desktop-view`}>
            <div className={styles['founding-title']}>{content.foundingTeamInfo.title}</div>
            <div className={styles['founding-flex']}>
              {foundingTeam.map((item, key) => {
                const { avatar, name, title, description } = item
                return <div className={styles['founding-box']}  key={key}>
                  <div className={styles.photo}><img src={avatar} /></div>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.description}>{description}</div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className={styles['experiences']}>
          <div className={`${styles.content} desktop-view`}>
            <div className={styles['experience-title']}>{content.experienceInfo.title}</div>
            <div className={styles['experience-flex']}>
              <div className={styles['experience-image']}><img src="./images/experience-image1.webp" /></div>
              <div className={styles['experience-image']}><img src="./images/experience-image2.webp" /></div>
              <div className={styles['experience-image']}><img src="./images/experience-image3.webp" /></div>
              <div className={styles['experience-image']}><img src="./images/experience-image4.webp" /></div>
              <div className={styles['experience-image']}><img src="./images/experience-image5.webp" /></div>
              <div className={styles['experience-image']}><img src="./images/experience-image6.webp" /></div>
              <div className={styles['experience-image']}><img src="./images/experience-image7.webp" /></div>
            </div>
          </div>
        </div>
        <SignUpNow layoutType={layoutType} role={role} pageStr={pageStr} />
      </div>
    </>
  )
}

export async function getStaticProps(){
  const content = aboutUsContent;
  const page = await filer.getItem('quicktakes-about-us.md');
  return {
    props:{
      content,
      page
    }
  }
}