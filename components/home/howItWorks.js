import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { APP_URL } from '@/constant/app.constant';
import mixpanel from 'mixpanel-browser';
import Image from 'next/image';

export default function HowItWorks({ content, block, language = "en", utmParams = null }) {
  const handleSignUp = (e) => {
    e.preventDefault();
    let deeplink = process.env.NEXT_PUBLIC_UTM_DEEPLINK;
    if (utmParams) {
      const search = new URLSearchParams(utmParams).toString();
      deeplink = `${deeplink}?${search}`;
    }
    mixpanel.track("MarketingPage_SignUp", { placement: 'homeHowItWorks' }, { send_immediately: true }, () => {
      window.location.href = deeplink;
    })
  }


  return (
    <div className={styles['howItWorks-container']}>
      <div className={styles['howItWorks-center-container']}>
        <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
        <div className={styles['howItWorks-content-container']}>
          <div className={styles['howItWorks-content-box']}>
            <div className={styles['howItWorks-text-container']}>
              <h4 className={styles['howItWorks-text-align-right']}>{block.leftSideContent_a.title[language] || block.leftSideContent_a.title['en']}</h4>
              <p className={styles['howItWorks-text-align-right']}>{block.leftSideContent_a.description[language] || block.leftSideContent_a.description['en']}</p>
            </div>
            <div className={styles['howItWorks-text-container']}>
              <h4 className={styles['howItWorks-text-align-right']}>{block.leftSideContent_b.title[language] || block.leftSideContent_b.title['en']}</h4>
              <p className={styles['howItWorks-text-align-right']}>{block.leftSideContent_b.description[language] || block.leftSideContent_b.description['en']}</p>
            </div>
          </div>
          <div className={styles['howItWorks-image-container']}>
            <div className={styles['howItWorks-image']}>
              <Image
                src={block.image}
                fill
                alt="How it works illustration"
                loading='lazy'
              />
            </div>
          </div>
          <Link className={styles['howItWorks-button']} href={`https://${APP_URL}/signup`} ><strong>Try It Now</strong> - It's Free</Link>
          <div className={styles['howItWorks-content-box']}>
            <div className={styles['howItWorks-text-container']}>
              <h4>{block.rightSideContent_a.title[language] || block.rightSideContent_a.title['en']}</h4>
              <p>{block.rightSideContent_a.description[language] || block.rightSideContent_a.description['en']}</p>
            </div>
            <div className={styles['howItWorks-text-container']}>
              <h4>{block.rightSideContent_b.title[language] || block.rightSideContent_b.title['en']}</h4>
              <p>{block.rightSideContent_b.description[language] || block.rightSideContent_b.description['en']}</p>
            </div>
          </div>
        </div>
        <div className={styles['howItWorks-button-container']}>
          <Link className={styles['howItWorks-button']} href="#" onClick={handleSignUp} ><strong>Try It Now</strong> - It's Free</Link>
        </div>
      </div>
    </div>
  )
}