import Link from 'next/link';

import moment from 'moment';
import { Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';

import styles from '../../styles/learn.module.css';
export default function TopQuestionsList({ content, block, posts, language = 'en' }) {

  return (
    <div className={styles['learn-container']}>
      <div className={styles['learn-center-container']}>
        <div className={styles['learn-list-container']}>
          {
            posts.map((item, index) => (
              <Link href={`/learn/${item.en.slug}`} className={styles['learn-list-item']} key={index}>
                <h3>{item[language] ? item[language].data?.article_title : item['en'].data?.article_title}</h3>
                <p>{item[language]?.data?.description || item['en']?.data?.description}</p>
                <span>{item[language]?.data?.post_on_text || item['en']?.data?.post_on_text} {moment(item[language]?.data?.date || item['en']?.data?.date).format(item[language]?.data?.date_format || 'MMM DD, YYYY')}</span>
                <Button type="ghost" className={styles['learn-list-item-viewmore']}>{block.buttonTxt[language] || block.buttonTxt['en']}</Button>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}