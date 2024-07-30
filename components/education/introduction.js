import styles from '../../styles/education.module.css';

export default function Introduction({content, block, language='en'}){
    return (
        <div className={styles['introduction-container']}>
            <div className={styles['introduction-center-container']}>
                <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
                <p>{block.description[language] || block.description['en']}</p>
            </div>
        </div>
    )
}