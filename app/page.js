import { Button } from 'antd';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles['main-container']}>

      <div className={styles['section-1']}>
        <div>
          <h2>Difficult course material?</h2>
          <h2>Struggling with lectures?</h2>
          <h1>Try <strong>QuickTakes</strong></h1>
          <p className={styles['free-for-student']}><strong>FREE</strong> for students, forever!</p>
          <Button type="primary" className={`custom-antd-design-button-student ${styles['sign-up-now']}`} >Sign Up Now!</Button>
          <p className={styles['download-quicktakes-today']}>Download <strong>QuickTakes</strong> today!</p>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles['section-1-r']}>
          <img src='/home-student.png' />
        </div>
      </div>
    </div>
  )
}
