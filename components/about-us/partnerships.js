import Link from 'next/link';
import styles from '../../styles/about-us.module.css';

export default function Partnerships({content, block}){
    
    function replaceContent(str, search) {
        return str.replace(search, `<span>${block.email}</span>`)
    }
    return (
      <div className={styles['partnerships-container']}>
        <div className={`${styles['partnerships-center-container']}`}>
            <h3>{block.contentTitle}</h3>
            <p dangerouslySetInnerHTML={{__html:replaceContent(block.description, '${email}')}}></p>
            <Link href={`mailto:${block.email}`}>{block.buttontxt}</Link>
        </div>
      </div>
    )
}