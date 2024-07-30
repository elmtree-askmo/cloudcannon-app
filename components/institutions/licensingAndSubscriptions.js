import { Button } from 'antd';
import styles from '../../styles/institutions.module.css';
import ContactForm from '@/component/contactForm';
import { useState } from 'react';

export default function LicensingAndSubscriptions({block, language='en'}){
    const [open, setOpen] = useState(false);
    return (
        <div className={styles['institutions-licensingAndSubscriptions-container']}>
            <div className={styles['institutions-licensingAndSubscriptions-center-container']}>
                <h2>{block.contentTitle[language] || block.contentTitle['en'] }</h2>
                <div dangerouslySetInnerHTML={{__html:block.description[language] || block.description['en'] }}></div>
                <Button className={styles['institutions-licensingAndSubscriptions-btn']} onClick={()=>setOpen(true)} >{block.buttonTxt[language] || block.buttonTxt['en']}</Button>
                <ContactForm open={open} onCancel={()=>setOpen(false)} language={language}/>
            </div>
        </div>
    )
}