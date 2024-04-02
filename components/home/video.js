import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Video({content, block}){
    return (
        <div className={styles['section-2-container']}>
          <div className={`${styles['section-2']} ${styles['main-container']}`} >
            <div className={styles['video-container']}>
              <iframe width="100%" height="100%" src={block.video_url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" allowFullScreen></iframe>
            </div>
            <div className={styles['robot-container']}>
              <img src='/home-robot.png' />
            </div>
            <div className={styles['learn-more-below']}>
              <p>{block.description}</p>
              <Link href="#section5">{content.videoContent.learn_more_below}</Link>
            </div>
          </div>
        </div>
    )
}