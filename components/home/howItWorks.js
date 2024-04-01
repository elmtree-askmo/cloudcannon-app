import styles from '../../styles/Home.module.css';

export default function HowItWorks({content, block}){
    return (
        <div className={styles['howItWorks-container']}>
            <div className={styles['howItWorks-center-container']}>
                <h3>{block.contentTitle}</h3>
                <div className={styles['howItWorks-content-container']}>
                    <div className={styles['howItWorks-content-box']}>
                        <div className={styles['howItWorks-text-container']}>
                            <h4>{block.leftSideContent_a.title}</h4>
                            <p>{block.leftSideContent_a.content}</p>
                        </div>
                        <div className={styles['howItWorks-text-container']}>
                            <h4>{block.leftSideContent_b.title}</h4>
                            <p>{block.leftSideContent_b.content}</p>
                        </div>
                    </div>
                    <div className={styles['howItWorks-image-container']}><img src={block.image} /></div>
                    <div className={styles['howItWorks-content-box']}>
                        <div className={styles['howItWorks-text-container']}>
                            <h4>{block.rightSideContent_a.title}</h4>
                            <p>{block.rightSideContent_a.content}</p>
                        </div>
                        <div className={styles['howItWorks-text-container']}>
                            <h4>{block.rightSideContent_b.title}</h4>
                            <p>{block.rightSideContent_b.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}