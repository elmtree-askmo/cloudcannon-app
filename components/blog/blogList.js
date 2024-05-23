import Link from 'next/link';
import styles from '../../styles/blog.module.css';
import moment from 'moment';

export default function BlogList({content, block, posts}){
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
                                <span>Posted on {moment(item.data?.date).format('MMM DD, YYYY')}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}