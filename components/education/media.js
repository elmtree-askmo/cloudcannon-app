import styles from '../../styles/education.module.css';
import Link from 'next/link';

export default function Media({content, block}){
    return (
        <div className={styles['media-container']}>
            <div className={styles['media-center-container']}>
                <h3>{block.contentTitle}</h3>
                <div className={styles['media-list-container']}>
                    {
                        block.list.map((item,index)=>(
                            <div className={styles['media-list-item-container']} key={index}>
                                <div className={styles['media-list-item-content']}>
                                    <div className={styles['media-list-item-image']}><img src={item.image} /></div>
                                    <div className={styles['media-list-item-text']}>
                                        <h4>{item.title}</h4>
                                        <span>{item.auth}</span>
                                    </div>
                                </div>
                                <div className={styles['media-read-more-button-container']}>
                                    <Link className={styles['media-read-more-button']} href={item.link} target={"_blank"}>Read More</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}