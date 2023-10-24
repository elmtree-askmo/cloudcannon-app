'use client'

// libs
import { Button } from 'antd';
import mixpanel from 'mixpanel-browser';

import { APP_URL, ROLE, appStoreLink, googlePlayLink } from '../global/global';

import styles from './sign-up-now.module.css';

export default function SignUpNow() {

  const SignUpNow = () => {
    const url = `https://${APP_URL}/signup`;
    new Promise((r) => {
      // if (mixpanel?.track)
      //   mixpanel.track(`Siter ${ROLE} (FAQ) Click Sign Up Now`, {}, (r) => {
      //     window.location = url;
      //   });
      // else
        window.location = url;
    });
  }

  return <div className={styles['sign-up-now']}>
    <div className={`${styles.content} desktop-view`}>
      <div className={styles['inner-link']}>
        <div className={styles.title}>
          <p>Feel More Confident.</p>
          <p>Find Success.</p>
        </div>
        <img className={styles['inner-image']} src="./images/sign-up-now-image.webp" />
        <div className={styles['sign-up-button']}><Button onClick={SignUpNow}>Sign Up Now</Button></div>
        <div className={styles["download-title"]}>Download <span>QuickTakes</span> today!</div>
        <div className={styles['download-links']}>
          <a className={styles.ios} href={appStoreLink} />
          <a className={styles.aos} href={googlePlayLink} />
        </div>
      </div>
      <img className={styles['sign-up-now-image']} src="./images/sign-up-now-image.webp" />
    </div>
  </div>
}