import { Button } from 'antd';
import Link from 'next/link';
import { APP_URL } from '@/constant/app.constant';
import mixpanel from 'mixpanel-browser';

import styles from '../../styles/learn.module.css';

export default function TopQuestionsHeader({ content, block, language = 'en' }) {

  const handleSignUp = (e) => {
    e.preventDefault();
    mixpanel.track("MarketingPage_SignUp", { placement: 'Q&A' }, { send_immediately: true }, () => {
      window.location.href = `https://${APP_URL}/signup`;
    })
  }

  return (
    <div className={styles['learn-header-container']}>
      <div className={styles['learn-header-center-container']}>
        <h1>{block.title}</h1>
        <h3>{block.contentTitle[language]}</h3>
        <p>{block.description[language]}</p>
        <div className={styles['sign-up-today-container']}>
          <Link className={styles['sign-up-today']} href="#" onClick={handleSignUp} >Sign Up Today</Link>
        </div>
      </div>
    </div>
  )
}