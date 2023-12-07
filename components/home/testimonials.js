
import styles from '../../styles/Home.module.css';

export default function Testimonials({content, block}){
    return (
        <div className={styles['section-6-container']}>
          <div className={`${styles['section-6']} ${styles['main-container']}`} >
              <h2>{block.section_title}</h2>
              {
                block.list.map((item,index)=>(
                  <div className={styles['content-box']} key={index}>
                    <p className={styles['quote']}>{item.quote}</p>
                    <div>
                      <div className={styles['name']}>{item.name}</div>
                      <div className={styles['grade']}>{item.grade}</div>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
    )
}