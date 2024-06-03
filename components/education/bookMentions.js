import mixpanel from 'mixpanel-browser';
import styles from '../../styles/education.module.css';
import Link from 'next/link';

export default function BookMentions({content, block}){
    const handleRedirect = (e, item)=>{
        e.preventDefault();
        mixpanel.track("MarketingPage_EducationResources", { title: item.title, category: "bookMentions" }, {send_immediately:true}, ()=>{
          window.open(item.link, '_blank')
        })
    }
    return (
        <div className={styles['bookmentions-container']}>
            <div className={styles['bookmentions-center-container']}>
                <h3>{block.contentTitle}</h3>
                <div className={styles['bookmentions-list-container']}>
                    {
                        block.items.map((item,index)=>(
                            <div className={styles['bookmentions-list-item-container']} key={index}>
                                <div className={styles['bookmentions-list-item-content']}>
                                    <div className={styles['bookmentions-list-item-image']}><img src={item.image} /></div>
                                    <div className={styles['bookmentions-list-item-text']}>
                                        <h4>{item.title}</h4>
                                        <span>{item.auth}</span>
                                    </div>
                                </div>
                                <div className={styles['bookmentions-read-more-button-container']}>
                                    <Link className={styles['bookmentions-read-more-button']} href="#" onClick={(e)=>handleRedirect(e,item)}>Read More</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}