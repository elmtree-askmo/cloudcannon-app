import styles from '../../styles/Home.module.css';

export default function Landscape ({content, block}){
    return (
        <div className={styles['section-4-container']}>
          <div className={`${styles['section-4']} ${styles['main-container']}`} >
            {
              block.list.map((item, index)=>(
                <div key={index} className={styles['section-4-content-container']} style={item.reverse?{flexDirection:'row-reverse'}:{}}>
                  <div className={styles['section-4-content-container-l']}><img src={item.image} /></div>
                  <div className={styles['section-4-content-container-r']}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <p className={styles['section-4-content-container-b']}>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
    )
}