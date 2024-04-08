import styles from '../../styles/pricing.module.css';

export default function Intro({content, block}){
    return (
        <div className={styles['intro-container']}>
            <div className={styles['intro-center-container']}>
                <h3>{block.contentTitle}</h3>
                <p>{block.content}</p>
            </div>
        </div>
    )
}