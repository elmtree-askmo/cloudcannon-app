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
                    <div className={styles['blogList-list-item']}>
                        <div><img src="https://www.studyfetch.com/_next/image?url=https%3A%2F%2Fstudyfetchcms.com%2Fcontent%2Fimages%2F2024%2F05%2Fangelawan9_cartoon_study_aesthetic_a34efa92-3cf8-4982-ac35-543aa3dba4dd.png&w=1920&q=75&dpl=dpl_TrkEvLzBXGAxH4eiunmdvuuyqmDt" /></div>
                        <h3>5 Study Methods to Live By</h3>
                        <p>Discover unconventional study methods for college success! From Memory Palaces to Sleep Studying, learn how to enhance learning efficiency and conquer academic challenges. Embrace new strategies to navigate the modern education landscape with confidence.</p>
                        <span>Posted on 5/9/2024</span>
                    </div>
                    <div className={styles['blogList-list-item']}>
                        <div><img src="https://www.studyfetch.com/_next/image?url=https%3A%2F%2Fstudyfetchcms.com%2Fcontent%2Fimages%2F2024%2F05%2Fangelawan9_cartoon_study_aesthetic_a34efa92-3cf8-4982-ac35-543aa3dba4dd.png&w=1920&q=75&dpl=dpl_TrkEvLzBXGAxH4eiunmdvuuyqmDt" /></div>
                        <h3>5 Study Methods to Live By</h3>
                        <p>Discover unconventional study methods for college success! From Memory Palaces to Sleep Studying, learn how to enhance learning efficiency and conquer academic challenges. Embrace new strategies to navigate the modern education landscape with confidence.</p>
                        <span>Posted on 5/9/2024</span>
                    </div>
                    <div className={styles['blogList-list-item']}>
                        <div><img src="https://www.studyfetch.com/_next/image?url=https%3A%2F%2Fstudyfetchcms.com%2Fcontent%2Fimages%2F2024%2F05%2Fangelawan9_cartoon_study_aesthetic_a34efa92-3cf8-4982-ac35-543aa3dba4dd.png&w=1920&q=75&dpl=dpl_TrkEvLzBXGAxH4eiunmdvuuyqmDt" /></div>
                        <h3>5 Study Methods to Live By</h3>
                        <p>Discover unconventional study methods for college success! From Memory Palaces to Sleep Studying, learn how to enhance learning efficiency and conquer academic challenges. Embrace new strategies to navigate the modern education landscape with confidence.</p>
                        <span>Posted on 5/9/2024</span>
                    </div>
                    <div className={styles['blogList-list-item']}>
                        <div><img src="https://www.studyfetch.com/_next/image?url=https%3A%2F%2Fstudyfetchcms.com%2Fcontent%2Fimages%2F2024%2F05%2Fangelawan9_cartoon_study_aesthetic_a34efa92-3cf8-4982-ac35-543aa3dba4dd.png&w=1920&q=75&dpl=dpl_TrkEvLzBXGAxH4eiunmdvuuyqmDt" /></div>
                        <h3>5 Study Methods to Live By</h3>
                        <p>Discover unconventional study methods for college success! From Memory Palaces to Sleep Studying, learn how to enhance learning efficiency and conquer academic challenges. Embrace new strategies to navigate the modern education landscape with confidence.</p>
                        <span>Posted on 5/9/2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}