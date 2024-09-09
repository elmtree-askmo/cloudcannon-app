import Link from 'next/link';
import styles from '../../styles/pricing.module.css';
import { APP_URL } from '@/constant/app.constant';
import mixpanel from 'mixpanel-browser';

export default function Pricing({content, block, language='en'}){
    const handleSignUp = (e)=>{
        e.preventDefault();
        mixpanel.track("MarketingPage_SignUp", { placement: 'plansPage' }, {send_immediately:true}, ()=>{
          window.location.href = `https://${APP_URL}/signup`;
        })
    }

    return (
        <div className={styles['pricing-container']}>
            <div className={styles['pricing-center-container']}>
                <div className={styles['pricing-list']}>
                    {
                        block.items.map((item,index)=>(
                            <div className={`${styles['pricing-list-item']} ${item.itemActiveStyle?styles['pricing-item-blue-border']:''}`} key={index}>
                                <div className={styles['pricing-item-header']}>
                                    <h4>{item.label[language] || item.label['en']}</h4>
                                    <span className={item.itemActiveStyle?styles['pricing-item-paid-plan-label']:''} >{item.minutesLabel[language] || item.minutesLabel['en']}</span>
                                    <p className={styles['pricing-item-header-description']}>{item.description[language] || item.description['en']}</p>
                                    <p className={styles['pricing-item-header-remark']}>{item.remark[language] || item.remark['en']}</p>
                                </div>
                                <div className={styles['pricing-item-content']}>
                                    {
                                        item.supportAbility.map((subItem, i)=>(
                                            <div className={`${styles['pricing-item-content-block']} ${subItem.activeStyle?styles['pricing-item-green-tick']:''}`} key={i}>
                                                <h5>{subItem.label[language] || subItem.label['en']}</h5>
                                                <p>{subItem.description[language] || subItem.description['en']}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.signup}>
                    <Link href="#" onClick={handleSignUp} >{block.buttonTxt[language] || block.buttonTxt['en']}</Link>
                </div>
            </div>
        </div>
    )
}