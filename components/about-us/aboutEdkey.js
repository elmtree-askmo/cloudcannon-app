import styles from '../../styles/about-us.module.css';

export default function AboutEdkey({content, block}){
    return (
        <div className={`${styles.content} desktop-view ${styles['about-edkey']}`}>
          <div className={styles['about-us-image']}><img src='./images/about-us-image.webp' /></div>
          <div className={styles['about-us-title']}>{content.edkeyInfo.about} <span>{content.edkeyInfo.edkey}</span></div>
          {
            block.About_Edkey.map((item, index)=>(
              <div key={index} className={styles['auout-us-content']}>{item.paragraph}</div>
            ))
          }
        </div>
    )
}