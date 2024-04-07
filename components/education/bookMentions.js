import styles from '../../styles/education.module.css';
import Link from 'next/link';

export default function BookMentions({content, block}){
    return (
        <div className={styles['bookmentions-container']}>
            <div className={styles['bookmentions-center-container']}>
                <h3>{block.contentTitle}</h3>
                <div className={styles['bookmentions-list-container']}>
                    {
                        block.list.map((item,index)=>(
                            <div className={styles['bookmentions-list-item-container']} key={index}>
                                <div className={styles['bookmentions-list-item-content']}>
                                    <div className={styles['bookmentions-list-item-image']}><img src={item.image} /></div>
                                    <div className={styles['bookmentions-list-item-text']}>
                                        <h4>{item.title}</h4>
                                        <span>{item.auth}</span>
                                    </div>
                                </div>
                                <div className={styles['bookmentions-read-more-button-container']}>
                                    <Link className={styles['bookmentions-read-more-button']} href={item.link} target={"_blank"}>Read More</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}