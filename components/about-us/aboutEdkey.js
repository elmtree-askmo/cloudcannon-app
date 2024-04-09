import styles from '../../styles/about-us.module.css';

export default function AboutEdkey({content, block}){
    return (
      <div className={styles['about-aboutUs-container']}>

        <div className={`${styles['about-aboutUs-center-container']}`}>
          <div className={styles['about-us-title']}>{block.contentTitle}</div>
          {
            block.items.map((item, index)=>(
              <div key={index} className={styles['auout-us-content']}>{item.paragraph}</div>
            ))
          }
        </div>
      </div>
    )
}