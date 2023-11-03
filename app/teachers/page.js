'use client'

import { Button } from 'antd';
import axios from 'axios';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react'
import Link from 'next/link';

import { API_DOMAIN, APP_URL, X_API_KEY, appStoreLink, googlePlayLink } from '../global/global';
import TeacherSignUpNow from '../component/teacher-sign-up-now';

import styles from './page.module.css';

export default function Teachers({ type }) { // type = 'teachers' | 'tryItNow'

  useEffect(()=>{
    if(type === 'tryItNow'){
      mixpanel.track("Siter Teacher (Try it Now) Open")
    }else{
      mixpanel.track("Siter Teacher Open")
    }
  },[type])

  const handletryItNow = () => {
    const url = `https://${API_DOMAIN}/users?return_token=true`
    axios.post(url, {}, { headers: { 'x-api-key': X_API_KEY } })
      .then(res => {

        const authToken = res.data.data.attributes.access_token;
        const authUserId = res.data.data.attributes.id;
        const authUsername = res.data.data.attributes.username;
        const authUserStatus = res.data.data.attributes.status;
        window.location.href = `https://${APP_URL}?auth.token=${authToken}&auth.userId=${authUserId}&auth.username=${authUsername}&auth.userStatus=${authUserStatus}`;
      })
  }

  const handleSignUpNow = () => {
    if (type === 'tryItNow') {
      handletryItNow()
    } else {
      window.location.href = `https://${APP_URL}/signup`;
    }
  }


  return <div className={styles.teachers}>
    <div className={`${styles['teachers-sign-up']} desktop-view`}>
      <div className={styles['sign-up-title']}>Finally a time saving app that doesn’t require any training.</div>
      <div className={styles['sign-up-background-mobile']}></div>
      <div className={styles['sign-up-hint']}><span>QuickTakescreates</span> learning materials by listening to your class lessons.</div>
      <div className={styles['inner-hint']}>Get your <span>FREE</span> invite today!</div>
      <div className={styles['sign-up-button']}><Button onClick={handleSignUpNow}>{type === "tryItNow" ? 'Try it Now!' : 'Sign Up Now'}</Button></div>
      <div className={styles["download-title"]}>Download <span>QuickTakes</span> today!</div>
      <div className={styles['download-links']}>
        <a className={styles.ios} href={appStoreLink} />
        <a className={styles.aos} href={googlePlayLink} />
      </div>
    </div>
    <div className={styles['section1']}>
      <div className={`${styles.content} desktop-view`}>
        <div className={styles['section1-image']}></div>
        <div className={styles['section1-title']}>
          <div className={styles['title']}>Based on teacher research we’ve created an easy way for you to create learning materials by recording your own lesson.</div>
          <div className={styles.link}> <Link href="#section4">Learn More Below</Link></div>
        </div>
      </div>
    </div>
    <div className={styles['section2']}>
      <div className={`${styles.content} desktop-view`}>
        <div className={styles['section2-title']}>Create learning materials directly from your lessons. Just hit record!</div>
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
            <div className={styles.title}>Use QuickTakes for Professional Development</div>
            <div className={styles['section3-image3']}><img src="./images/teachers-image5.webp" /></div>
            <div className={styles.description}>Need to present back to your colleagues after a conference? Use QuickTakes to help create your presentation stress-free!</div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles['section4']} id="section4">
      <div className={`${styles.content} desktop-view`}>
        <div className={styles['section4-box']}>
          <div className={styles['section4-image']}><img src="./images/teachers-image6.webp" /></div>
          <div className={styles.title}>Practice Problems? No Problem!</div>
          <div className={styles.description}>QuickTakes creates <strong>outlines</strong>, <strong>study guides</strong>, and <strong>practice problems</strong> and more!</div>
        </div>
        <div className={styles['section4-box']}>
          <div className={styles['section4-image']}><img src="./images/teachers-image7.png" /></div>
          <div className={styles.title}>Related Videos and More!</div>
          <div className={styles.description}>QuickTakes finds <strong>videos related</strong> to your lesson to help strengthen difficult concepts for students!</div>
        </div>
        <div className={styles['section4-box']}>
          <div className={styles['section4-image']}><img src="./images/teachers-image8.png" /></div>
          <div className={styles.title}>Chat Assistant for Lesson Planning</div>
          <div className={styles.description}>Your <strong>chat assistant</strong> can come up with projects and assessments based on standards, <strong>24-7</strong>!</div>
        </div>
      </div>
    </div>
    <TeacherSignUpNow tryItNow={type === 'tryItNow'} />
  </div>
}