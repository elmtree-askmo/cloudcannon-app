import { Button } from 'antd'
import styles from '../../styles/institutions.module.css'
import ContactForm from '@/component/contactForm'
import { useState } from 'react';

export default function InstitutionsBanner({block, language='en'}){
    const [openContact, setOpenContact] = useState(false);
    return (
        <>
            <div className={styles['institutions-banner-container']}>
                <div className={styles['institutions-banner-center-container']}>
                    <h2>{block.contentTitle[language] || block.contentTitle['en'] }</h2>
                    <p>{block.subTitle[language] || block.subTitle['en'] }</p>
                    <Button className={styles['institutions-banner-btn']} onClick={()=>setOpenContact(true)} >{block.buttonTxt[language] || block.buttonTxt['en']}</Button>
                </div>
            </div>
            <ContactForm open={openContact} onCancel={()=>setOpenContact(false)} language={language} />
        </>
    )
}