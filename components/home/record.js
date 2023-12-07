import styles from '../../styles/Home.module.css';

export default function Record({content, block}){
    return (
        <div className={styles['section-3-container']}>
          <div className={`${styles['section-3']} ${styles['main-container']}`} >
            <div className={styles['quicktakes-can-help']}>
              {
                block.slogan.map((i, index)=>(
                  <h2 key={index}>{i.item}</h2>
                ))
              }
            </div>
            <div className={styles['mobile-container']}>
              <img src={block.image} />
            </div>
          </div>
        </div>
    )
}