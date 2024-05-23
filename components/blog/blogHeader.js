import styles from '../../styles/blog.module.css';

export default function BlogHeader({content, block}){
    return (
        <div className={styles['blogHeader-container']}>
            <div className={styles['blogHeader-center-container']}>
                <h3>{block.contentTitle}</h3>
                <p>{block.description}</p>
            </div>
        </div>
    )
}