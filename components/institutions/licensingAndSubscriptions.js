import { Button } from 'antd';
import styles from '../../styles/institutions.module.css';
import ContactForm from '@/component/contactForm';
import { useState } from 'react';

export default function LicensingAndSubscriptions({block}){
    const [open, setOpen] = useState(false);
    return (
        <div className={styles['institutions-licensingAndSubscriptions-container']}>
            <div className={styles['institutions-licensingAndSubscriptions-center-container']}>
                <h2>{block.contentTitle}</h2>
                <div dangerouslySetInnerHTML={{__html:block.description}}></div>
                <Button className={styles['institutions-licensingAndSubscriptions-btn']} onClick={()=>setOpen(true)} >Contact Us</Button>
                <ContactForm open={open} onCancel={()=>setOpen(false)} />
            </div>
        </div>
    )
}