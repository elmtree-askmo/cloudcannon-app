import Link from "next/link";
import styles from "../../styles/blog.module.css";
import moment from "moment";
import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function BlogList({ content, block, posts, language = "en" }) {
  return (
    <div className={styles["blogList-container"]}>
      <div className={styles["blogList-center-container"]}>
        <div className={styles["blogList-list-container"]}>
          {posts.map((item, index) => (
            <Link href={`/blog/${item.en.slug}`} className={styles["blogList-list-item"]} key={index}>
              <div>
                <Image src={item.en.data?.featuredImg?.image} alt={item.en.data?.featuredImg?.image_alt} width={800} height={400} priority={index === 0} loading={index === 0 ? "eager" : "lazy"} quality={85} />
              </div>
              <h3>{item[language] ? item[language].data?.article_title : item["en"].data?.article_title}</h3>
              <p>{item[language]?.data?.description || item["en"]?.data?.description}</p>
              <span>
                {item[language]?.data?.post_on_text || item["en"]?.data?.post_on_text} {moment(item[language]?.data?.date || item["en"]?.data?.date).format(item[language]?.data?.date_format || "MMM DD, YYYY")}
              </span>
              <Button type="ghost" className={styles["blogList-list-item-viewmore"]}>
                {block.buttonTxt[language] || block.buttonTxt["en"]}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
