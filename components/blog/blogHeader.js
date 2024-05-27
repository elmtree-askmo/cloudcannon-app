import { Button } from 'antd';
import styles from '../../styles/blog.module.css';
import Link from 'next/link';
import { APP_URL } from '@/constant/app.constant';

export default function BlogHeader({content, block}){
    return (
        <div className={styles['blogHeader-container']}>
            <div className={styles['blogHeader-center-container']}>
                <h3>{block.contentTitle}</h3>
                <p>{block.description}</p>
                <div className={styles['sign-up-today-container']}>
                    <Link className={styles['sign-up-today']} href={`https://${APP_URL}/signup`}>Sign Up Today</Link>
                </div>
            </div>
        </div>
    )
}