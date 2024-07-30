import Link from 'next/link';
import styles from '../../styles/blog.module.css';
import moment from 'moment';
import { Button } from 'antd';

export default function BlogList({content, block, posts, language='en'}){
    console.log(posts)
    return (
        <div className={styles['blogList-container']}>
            <div className={styles['blogList-center-container']}>
                <div className={styles['blogList-list-container']}>
                    {
                        posts.map((item, index)=>(
                            <Link href={`/blog/${item.slug}`} className={styles['blogList-list-item']} key={index}>
                                <div><img src={item.data?.featuredImg?.image} alt={item.data?.featuredImg?.image_alt} /></div>
                                <h3>{item.data?.title}</h3>
                                <p>{item.data?.description}</p>
                                <span>{block.dateTxt[language]||block.dateTxt['en']} {moment(item.data?.date).format('MMM DD, YYYY')}</span>
                                <Button type="ghost" className={styles['blogList-list-item-viewmore']}>{block.buttonTxt[language]||block.buttonTxt['en']}</Button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}