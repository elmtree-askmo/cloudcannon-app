import { Button } from 'antd'
import styles from '../../styles/institutions.module.css'
import ContactForm from '@/component/contactForm'
import { useState } from 'react';

export default function InstitutionsBanner({block}){
    const [openContact, setOpenContact] = useState(false);
    return (
        <>
            <div className={styles['institutions-banner-container']}>
                <div className={styles['institutions-banner-center-container']}>
                    <h2>{block.contentTitle}</h2>
                    <p>{block.subTitle}</p>
                    <Button className={styles['institutions-banner-btn']} onClick={()=>setOpenContact(true)} >Contact Us</Button>
                </div>
            </div>
            <ContactForm open={openContact} onCancel={()=>setOpenContact(false)} />
        </>
    )
}