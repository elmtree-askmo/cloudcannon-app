import styles from '../../styles/Home.module.css';

export default function Portrait({content, block}){
    return (
        <div className={styles['section-5-container']} id="section5">
          <div className={`${styles['section-5']} ${styles['main-container']}`} >
              {
                block.list.map((item, index)=>(
                  <div key={index} className={styles['section-5-content-container']}>
                      <div className={styles['section-5-content-container-t']}><img src={item.image} /></div>
                      <h4>{item.title}</h4>
                      <div className={styles['desc']} dangerouslySetInnerHTML={{__html:item.description}} ></div>
                  </div>
                ))
              }
          </div>
        </div>
    )
}