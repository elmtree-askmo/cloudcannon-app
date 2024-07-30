import styles from '../../styles/pricing.module.css';

export default function Intro({content, block, language='en'}){
    return (
        <div className={styles['intro-container']}>
            <div className={styles['intro-center-container']}>
                <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
                <p>{block.description[language] || block.description['en']}</p>
            </div>
        </div>
    )
}