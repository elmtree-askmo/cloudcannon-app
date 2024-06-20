import { Button } from 'antd';
import styles from '../../styles/institutions.module.css';
import Link from 'next/link';
import { APP_URL } from '@/constant/app.constant';

export default function QuicktakesFeatures({block}){
    return (
        <div className={styles['insitutions-quicktakes-features-container']}>
            <div className={styles['insitutions-quicktakes-features-center-container']}>
                <h3>{block.contentTitle}</h3>
                <p>{block.description}</p>
                <Link href={`https://${APP_URL}`} className={styles['insitutions-quicktakes-features-btn']}>Go to QuickTakes</Link>
                <div className={styles['features-container']}>
                    {
                        block.items.map((item,index)=>(
                            <div className={styles['features-item']} key={index}>
                                <div><img src={item.image} /></div>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}