import styles from '../../styles/institutions.module.css';

export default function Briefing({block, language='en'}){
    return (
        <div className={styles['institutions-briefing-container']}>
            <div className={styles['institutions-briefing-center-container']}>
                <div className={styles['institutions-briefing-left-side-container']}>
                    {
                        block.items.map((item, index)=>(
                            <div className={styles['institutions-briefing-item']} key={index}>
                                <h3>{item.title[language] || item.title['en']}</h3>
                                <p>{item.content[language] || item.content['en']}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={styles['institutions-briefing-right-side-container']}>
                    <img src={block.image} />
                </div>
            </div>
        </div>
    )
}