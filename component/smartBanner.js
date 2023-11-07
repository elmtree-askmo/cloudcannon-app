import { Button } from "antd";
import styles from './smartBanner.module.css';
import { CloseOutlined } from '@ant-design/icons';
import Link from "next/link";

export default function SmartBanner({hideBanner}){

    const deepLink = 'https://api.trunk.quicktakes.io/api-node/quicktake/dl?url=quicktakes%3A%2F%2Fsign-up%26action%3Dsign-up%26utm_campaign%3Dxxxx%26utm_medium%3Dyyyy%26utm_source%3Dzzzz%26utm_term%3D1111%26utm_content%3D2222%26param1%3Dparam1%26param2%3Dparam2%26param3%3Dparam3'
    
    const closeBanner = ()=>{
        localStorage.setItem('hideBannerTS',new Date().valueOf());
        hideBanner();
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
            <Link className={styles.cta} href={deepLink} target="_blank" >View</Link>
        </div>
    )
}