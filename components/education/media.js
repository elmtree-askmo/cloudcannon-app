import mixpanel from 'mixpanel-browser';
import styles from '../../styles/education.module.css';
import Link from 'next/link';

export default function Media({content, block, language='en'}){
    const handleRedirect = (e, item)=>{
        e.preventDefault();
        mixpanel.track("MarketingPage_EducationResources", { title: item.title, category: "Media" }, {send_immediately:true}, ()=>{
          window.open(item.link, '_blank')
        })
    }

    return (
        <div className={styles['media-container']}>
            <div className={styles['media-center-container']}>
                <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
                <div className={styles['media-list-container']}>
                    {
                        block.items.map((item,index)=>(
                            <div className={styles['media-list-item-container']} key={index}>
                                <div className={styles['media-list-item-content']}>
                                    <div className={styles['media-list-item-image']}><img src={item.image} /></div>
                                    <div className={styles['media-list-item-text']}>
                                        <h4>{item.title}</h4>
                                        <span>{item.auth}</span>
                                    </div>
                                </div>
                                <div className={styles['media-read-more-button-container']}>
                                    <Link className={styles['media-read-more-button']} href="#" onClick={(e)=>handleRedirect(e,item)}>{block.buttonTxt[language] || block.buttonTxt['en']}</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}