import { Button } from "antd";
import styles from "../../styles/institutions.module.css";
import Link from "next/link";
import { APP_URL } from "@/constant/app.constant";
import Image from "next/image";

export default function QuicktakesFeatures({ block, language = "en" }) {
  return (
    <div className={styles["insitutions-quicktakes-features-container"]}>
      <div className={styles["insitutions-quicktakes-features-center-container"]}>
        <h3>{block.contentTitle[language] || block.contentTitle["en"]}</h3>
        <p>{block.description[language] || block.description["en"]}</p>
        <Link href={`https://${APP_URL}`} className={styles["insitutions-quicktakes-features-btn"]}>
          {block.buttonTxt[language] || block.buttonTxt["en"]}
        </Link>
        <div className={styles["features-container"]}>
          {block.items.map((item, index) => (
            <div className={styles["features-item"]} key={index}>
              <div>
                <Image src={item.image} alt="QuickTakes Feature" width={600} height={400} loading="lazy" quality={85} />
              </div>
              <h4>{item.title[language] || item.title["en"]}</h4>
              <p>{item.content[language] || item.content["en"]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
