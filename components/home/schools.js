import styles from '../../styles/Home.module.css';

export default function Schools({content, block}){
    return (
        <div className={styles['schools-container']}>
            <div className={styles['schools-center-container']} >
                <h3>{block.contentTitle}</h3>
                {
                    block.content.map((item, index)=>(
                        <div key={index} className={item.reverse? styles['scrolling-reverse']:styles.scrolling}>
                            <p>{item.line}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}