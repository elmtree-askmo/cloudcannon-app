import styles from '../../styles/about-us.module.css';

export default function AboutEdkey({content, block, language='en'}){
    return (
      <div className={styles['about-aboutUs-container']}>

        <div className={`${styles['about-aboutUs-center-container']}`}>
          <div className={styles['about-us-title']}>{block.contentTitle[language] || block.contentTitle['en']}</div>
          {
            block.items.map((item, index)=>(
              <div key={index} className={styles['auout-us-content']}>{item.paragraph[language] || item.paragraph['en']}</div>
            ))
          }
        </div>
      </div>
    )
}