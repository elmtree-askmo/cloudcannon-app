import styles from '../../styles/about-us.module.css';

export default function Benefit({content, block, language='en'}){
    return (
      <div className={styles['benefit-container']}>
        <div className={`${styles['benefit-center-container']}`}>
            {
                block.items.map((item,index)=>(
                    <div key={index} className={styles['benefit-item']}>
                        <div className={styles['benefit-item-txt-container']}>
                            <h3>{item.title[language] || item.title['en']}</h3>
                            <p>{item.description[language] || item.description['en']}</p>
                        </div>
                        <div className={styles['benefit-item-img-container']}><img src={item.image} /></div>
                    </div>
                ))
            }
        </div>
      </div>
    )
}