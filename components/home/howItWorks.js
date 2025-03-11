import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { APP_URL } from '@/constant/app.constant';
import mixpanel from 'mixpanel-browser';
import Image from 'next/image';

export default function HowItWorks({ content, block, language = "en", utmParams = null, isLearnPage = false }) {
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
    <div className={`${styles['howItWorks-container']} ${isLearnPage ? styles['howItWorks-container-learn'] : ''}`}>
      <div className={`${styles['howItWorks-center-container']} ${isLearnPage ? styles['howItWorks-center-container-learn'] : ''}`}>
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
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4eHh4dHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
          <Link className={styles['howItWorks-button']} href={`https://${APP_URL}/signup`} prefetch={false}><strong>Try It Now</strong> - It's Free</Link>
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
          <Link className={styles['howItWorks-button']} href="#" onClick={handleSignUp} prefetch={false}><strong>Try It Now</strong> - It's Free</Link>
        </div>
      </div>
    </div>
  )
}