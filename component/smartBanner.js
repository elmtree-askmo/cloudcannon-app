import { Button } from "antd";
import styles from './smartBanner.module.css';
import { CloseOutlined } from '@ant-design/icons';
import Link from "next/link";
import mixpanel from "mixpanel-browser";

export default function SmartBanner({hideBanner}){

    // const deepLink = 'https://link.quicktakes.io/api-node/quicktake/dl?url=quicktakes%3A%2F%2Fmain%2Fquicktakes?action%3Dsign-up%26utm_medium%3Dmkt_site%26utm_source%3Dbtn_view'
    const deepLink = 'https://link.quicktakes.io/KWZ8ZCWp1Fb';
    const closeBanner = ()=>{
        localStorage.setItem('hideBannerTS',new Date().valueOf());
        hideBanner();
    }
    const handleClickView = ()=>{
        mixpanel.track(`MarketingPage_SmartBanner_View`)
    }

    return (
        <div className={styles.smart_banner_container}>
            <CloseOutlined className={styles.close} onClick={closeBanner} />
            <div className={styles.desc}>
                <img src="../quicktakesIcon.svg" />
                <div>
                    <h3>QuickTakes by Edkey</h3>
                    <p>Better College Class Notes!</p>
                </div>
            </div>
            <a className={styles.cta} href={deepLink} target="_blank" onClick={handleClickView} >View</a>
        </div>
    )
}