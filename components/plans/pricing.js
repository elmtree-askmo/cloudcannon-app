import Link from 'next/link';
import styles from '../../styles/pricing.module.css';
import { APP_URL } from '@/constant/app.constant';
import mixpanel from 'mixpanel-browser';

export default function Pricing({content, block}){
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
                                    <h4>{item.label}</h4>
                                    <span className={item.itemActiveStyle?styles['pricing-item-paid-plan-label']:''} >{item.minutesLabel}</span>
                                    <p className={styles['pricing-item-header-description']}>{item.description}</p>
                                    <p className={styles['pricing-item-header-remark']}>{item.remark}</p>
                                </div>
                                <div className={styles['pricing-item-content']}>
                                    {
                                        item.supportAbility.map((subItem, i)=>(
                                            <div className={`${styles['pricing-item-content-block']} ${subItem.activeStyle?styles['pricing-item-green-tick']:''}`} key={i}>
                                                <h5>{subItem.label}</h5>
                                                <p>{subItem.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.signup}>
                    <Link href="#" onClick={handleSignUp} >Sign Up Today</Link>
                </div>
            </div>
        </div>
    )
}