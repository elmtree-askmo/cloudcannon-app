import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Landscape({ content, block, language = "en" }) {
  return (
    <div className={styles["section-4-container"]}>
      <div className={`${styles["section-4"]} ${styles["main-container"]}`}>
        {block.items.map((item, index) => (
          <div key={index} className={styles["section-4-content-container"]} style={item.reverse ? { flexDirection: "row-reverse" } : {}}>
            <div className={styles["section-4-content-container-l"]}>
              <Image 
                src={item.image} 
                alt={item.title[language] || item.title["en"]}
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
              />
            </div>
            <div className={styles["section-4-content-container-r"]}>
              <h3>{item.title[language] || item.title["en"]}</h3>
              <p>{item.description[language] || item.description["en"]}</p>
            </div>
            <p className={styles["section-4-content-container-b"]}>{item.description[language] || item.description["en"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
