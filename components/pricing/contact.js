import Link from 'next/link';
import styles from '../../styles/pricing.module.css';

export default function Contact({content, block}){
    function replaceContent(str, search) {
        return str.replace(search, `<span>${block.email}</span>`)
    }
    return(
        <div className={styles['contact-container']}>
            <div className={styles['contact-center-container']}>
                <p dangerouslySetInnerHTML={{__html:replaceContent(block.description, '${email}')}}></p>
                <Link href={`mailto:${block.email}`}>{block.buttontxt}</Link>
            </div>
        </div>
    )
}