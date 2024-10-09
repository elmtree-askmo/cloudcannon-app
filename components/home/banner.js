import mixpanel from 'mixpanel-browser';
import { APP_URL, appStoreLink, googlePlayLink } from '@/constant/app.constant';
import styles from '../../styles/Home.module.css';
import { Button } from 'antd';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Banner({content, block, language="en", utmParams=null}){
    const handleSignUpNow = ()=>{
      let deeplink = process.env.NEXT_PUBLIC_UTM_DEEPLINK;
      if(utmParams){
        const search = new URLSearchParams(utmParams).toString();
        deeplink = `${deeplink}?${search}`;
      }
      mixpanel.track("MarketingPage_SignUp", { placement: 'homeBanner' }, {send_immediately:true}, ()=>{
        window.location.href = deeplink;
      })
    }
    
    return (
        <div className={styles['section-1-container']}>
          <div className={`${styles['section-1']}`}>
            <div className={styles['section-1-center-container']}>
              <div className={styles['section-1-major']}>
                <h2>{block.contentTitle[language] || block.contentTitle['en']}</h2>
                <h3>{block.subTitle[language] || block.subTitle['en']}</h3>
                <Button type="primary" className={`custom-antd-design-button-student ${styles['sign-up-now']}`} onClick={handleSignUpNow}>{block.buttonTxt[language] || block.buttonTxt['en']}</Button>
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
            </div>
            {/* <div className={styles['section-1-r']}>
              <img src='/home-student.png' />
            </div> */}
          </div>
        </div>
    )
}
