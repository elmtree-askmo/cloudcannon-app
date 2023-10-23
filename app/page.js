import { Button } from 'antd';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { appStoreLink, googlePlayLink } from './global/global';

export default function Home() {
  return (
    <div className={styles['home']}>
      <div className={styles['section-1-container']}>
        <div className={`${styles['section-1']} ${styles['main-container']}`}>
          <div className={styles['section-1-l']}>
            <h2>Difficult course material?</h2>
            <h2>Struggling with lectures?</h2>
            <h2>Let us help.</h2>
            <h1>Try <strong>QuickTakes</strong></h1>
            <p className={styles['free-for-student']}><strong>FREE</strong> for students, forever!</p>
            <Button type="primary" className={`custom-antd-design-button-student ${styles['sign-up-now']}`} >Sign Up Now!</Button>
            <p className={styles['download-quicktakes-today']}>Download <strong>QuickTakes</strong> today!</p>
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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gkReCEDwufg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" allowfullscreen></iframe>
          </div>
          <div className={styles['robot-container']}>
            <img src='/home-robot.png' />
          </div>
          <div className={styles['learn-more-below']}>
            <p>
                You deserve to feel confident.  QuickTakes has got your back! Simply hit record and QuickTakes takes lecture notes, create study materials, provides related videos and answers your questions 24-7.
            </p>
            <Link href="">Learn More Below</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
