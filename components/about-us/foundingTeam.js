import styles from '../../styles/about-us.module.css';

export default function FoundingTeam({content, block}){
    return (
        <div className={styles['founding-team-container']}>
          <div className={styles['founding-team-center-container']}>
            <div className={styles['founding-flex']}>
              {block.members.map((item, key) => {
                const { avatar, name, title, description } = item
                return <div className={styles['founding-box']}  key={key}>
                  <div className={styles.photo}><img src={avatar} /></div>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.description}>{description}</div>
                </div>
              })}
            </div>
          </div>
        </div>
    )
}