

// libs
import { Button } from 'antd';
import mixpanel from 'mixpanel-browser';

import { API_DOMAIN, APP_URL, ROLE, X_API_KEY, appStoreLink, googlePlayLink } from '../constant/app.constant';

import styles from './teacher-sign-up-now.module.css';
import axios from 'axios';

export default function SignUpNow({ tryItNow }) {

  const handletryItNow = () => {
    mixpanel.track("Siter Teacher (Try it Now) Click Try")
    const url = `https://${API_DOMAIN}/users?return_token=true`
    axios.post(url, {}, { headers: { 'x-api-key': X_API_KEY } })
      .then(res => {
        console.log(res)
        const authToken = res.data.data.attributes.access_token;
        const authUserId = res.data.data.attributes.id;
        const authUsername = res.data.data.attributes.username;
        const authUserStatus = res.data.data.attributes.status;
        window.location.href = `https://${APP_URL}?auth.token=${authToken}&auth.userId=${authUserId}&auth.username=${authUsername}&auth.userStatus=${authUserStatus}`;
      })
  }

  const handleSignUpNow = () => {
    if (tryItNow) {
      handletryItNow()
    } else {
      mixpanel.track("Siter Teacher Click Sign Up Now", {}, {send_immediately:true}, () => {
        window.location.href = `https://${APP_URL}/signup`;
      })
    }
  }

  return <div className={styles['sign-up-now']}>
    <div className={`${styles.content} desktop-view`}>
      <div><img className={styles['sign-up-now-image']} src="./images/teachers-image9.png" /></div>
      <div className={styles['inner-link']}>
        <div className={styles.title}>
          <p>Ready to get started?</p>
        </div>
        <div className={styles['title-list']}>
          <p><span>1.</span>Get an Invite</p>
          <p><span>2.</span>Press Record in the App</p>
          <p><span>3.</span>Teach!</p>
        </div>
        <div className={styles['inner-hint']}>Get a <span>FREE</span> invite</div>
        <div className={styles['sign-up-button']}><Button onClick={handleSignUpNow}>{tryItNow ? 'Try it Now!' : 'Sign Up Now'}</Button></div>
        <div className={styles["download-title"]}>Download <span>QuickTakes</span> today!</div>
        <div className={styles['download-links']}>
          <a className={styles.ios} href={appStoreLink} />
          <a className={styles.aos} href={googlePlayLink} />
        </div>
      </div>

    </div>
  </div>
}