import styles from '../../styles/education.module.css';

export default function Introduction({content, block}){
    return (
        <div className={styles['introduction-container']}>
            <div className={styles['introduction-center-container']}>
                <h3>{block.contentTitle}</h3>
                <p>{block.content}</p>
            </div>
        </div>
    )
}