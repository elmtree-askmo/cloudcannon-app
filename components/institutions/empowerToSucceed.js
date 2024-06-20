import { Button } from 'antd';
import styles from '../../styles/institutions.module.css';
import ContactForm from '@/component/contactForm';
import { useState } from 'react';

export default function EmpowerToSucceed({block}){
    const [open, setOpen] = useState(false);
    return (
        <div className={styles['institutions-empower-container']}>
            <div className={styles['institutions-empower-center-container']}>
                <div className={styles['institutions-empower-left-side-container']}>
                    <h2>{block.contentTitle}</h2>
                    <p>{block.description}</p>
                    <Button onClick={()=>setOpen(true)} className={styles['institutions-banner-btn']} >Contact Us</Button>
                    <ContactForm open={open} onCancel={()=>setOpen(false)} />
                </div>
                <div className={styles['institutions-empower-right-side-container']}><img src={block.image} /></div>
            </div>
        </div>
    )
}