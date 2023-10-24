import { Button } from 'antd';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { appStoreLink, googlePlayLink } from './global/global';
import SignUpNow from './component/sign-up-now';

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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gkReCEDwufg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" allowFullScreen></iframe>
          </div>
          <div className={styles['robot-container']}>
            <img src='/home-robot.png' />
          </div>
          <div className={styles['learn-more-below']}>
            <p>
                You deserve to feel confident.  QuickTakes has got your back! Simply hit record and QuickTakes takes lecture notes, create study materials, provides related videos and answers your questions 24-7.
            </p>
            <Link href="#section5">Learn More Below</Link>
          </div>
        </div>
      </div>

      <div className={styles['section-3-container']}>
        <div className={`${styles['section-3']} ${styles['main-container']}`} >
          <div className={styles['quicktakes-can-help']}>
            <h2>QuickTakes can help.</h2>
            <h2>Just hit record!</h2>
          </div>
          <div className={styles['mobile-container']}>
            <img src='/home-mobile.png' />
          </div>
        </div>
      </div>

      <div className={styles['section-4-container']}>
        <div className={`${styles['section-4']} ${styles['main-container']}`} >
          <div className={styles['section-4-content-container']}>
            <div className={styles['section-4-content-container-l']}><img src='/use-quicktakes-in-classroom.webp' /></div>
            <div className={styles['section-4-content-container-r']}>
              <h3>Use QuickTakes in the Classroom</h3>
              <p>Pop open QuickTakes and record your lectures live in a classroom or lecture hall!</p>
            </div>
            <p className={styles['section-4-content-container-b']}>Pop open QuickTakes and record your lectures live in a classroom or lecture hall!</p>
          </div>
          <div className={styles['section-4-content-container']} style={{flexDirection:'row-reverse'}}>
            <div className={styles['section-4-content-container-l']}><img src='/use-quicktakes-in-study-groups.webp' /></div>
            <div className={styles['section-4-content-container-r']}>
              <h3>Use QuickTakes in Study Groups</h3>
              <p>Use QuickTakes to capture notes from all your study groups so you can chat and learn stress-free!</p>
            </div>
            <p className={styles['section-4-content-container-b']}>Use QuickTakes to capture notes from all your study groups so you can chat and learn stress-free!</p>
          </div>
          <div className={styles['section-4-content-container']}>
            <div className={styles['section-4-content-container-l']}><img src='/use-quicktakes-remotely.webp' /></div>
            <div className={styles['section-4-content-container-r']}>
              <h3>Use QuickTakes Remotely</h3>
              <p>You can use QuickTakes to record the audio from YouTube videos or college or university lecture videos too!</p>
            </div>
            <p className={styles['section-4-content-container-b']}>You can use QuickTakes to record the audio from YouTube videos or college or university lecture videos too!</p>
          </div>
        </div>
      </div>
      
      <div className={styles['section-5-container']} id="section5">
        <div className={`${styles['section-5']} ${styles['main-container']}`} >
            <div className={styles['section-5-content-container']}>
                <div className={styles['section-5-content-container-t']}><img src='/study-just-got-easier.png' /></div>
                <h4>Studying just got easier</h4>
                <p>
                  Record your lecture and QuickTakes creates <strong>outlines</strong>, <strong>study guides</strong>, a <strong>glossary</strong> and more!
                </p>
            </div>
            <div className={styles['section-5-content-container']}>
                <div className={styles['section-5-content-container-t']}><img src='/learn-in-different-ways.png' /></div>
                <h4>Learn in Different Ways</h4>
                <p>
                QuickTakes provides <strong>related videos</strong> and practice <strong>problems</strong> so you can learn in the way that best suits you!
                </p>
            </div>
            <div className={styles['section-5-content-container']}>
                <div className={styles['section-5-content-container-t']}><img src='/questions-answer.png' /></div>
                <h4>Questions Answered 24-7</h4>
                <p>
                  Shy about asking questions in class? Outside office hours? Chat with our <strong>AI Assistant</strong> any time day or night, <strong>24-7</strong>.
                </p>
            </div>
        </div>
      </div>

      <SignUpNow />
    </div>
  )
}
