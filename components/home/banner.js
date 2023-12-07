import mixpanel from 'mixpanel-browser';
import { APP_URL, appStoreLink, googlePlayLink } from '@/constant/app.constant';
import styles from '../../styles/Home.module.css';
import { Button } from 'antd';
import Link from 'next/link';

export default function Banner({content, block}){
    const handleSignUpNow = ()=>{
        mixpanel.track("Siter Student Click Sign Up Now", {}, {send_immediately:true}, ()=>{
          window.location.href = `https://${APP_URL}/signup`;
        })
    }
    
    return (
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
    )
}
