import styles from '../../styles/about-us.module.css';

export default function Experience({content, block, language='en'}){
    return (
        <div className={styles['experiences-container']}>
          <div className={styles['experiences-center-container']}>
            <div className={styles['experience-title']}>{block.contentTitle[language] || block.contentTitle['en']}</div>
            <div className={styles['experience-flex']}>
                {
                    block.items.map((item, index)=>(
                        <div key={index} className={styles['experience-image']}><img src={item.image} /></div>
                    ))
                }
            </div>
          </div>
        </div>
    )
}