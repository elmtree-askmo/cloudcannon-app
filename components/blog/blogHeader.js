import { Button } from 'antd';
import styles from '../../styles/blog.module.css';
import Link from 'next/link';
import { APP_URL } from '@/constant/app.constant';
import mixpanel from 'mixpanel-browser';

export default function BlogHeader({content, block, language='en'}){

    const handleSignUp = (e)=>{
        e.preventDefault();
        mixpanel.track("MarketingPage_SignUp", { placement: 'blogPage' }, {send_immediately:true}, ()=>{
          window.location.href = `https://${APP_URL}/signup`;
        })
    }

    return (
        <div className={styles['blogHeader-container']}>
            <div className={styles['blogHeader-center-container']}>
                <h3>{block.contentTitle[language] || block.contentTitle['en'] }</h3>
                <p>{block.description[language] || block.description['en'] }</p>
                {/* <div className={styles['sign-up-today-container']}>
                    <Link className={styles['sign-up-today']} href="#" onClick={handleSignUp} >Sign Up Today</Link>
                </div> */}
            </div>
        </div>
    )
}