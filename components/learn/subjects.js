import Link from 'next/link';

import moment from 'moment';
import { Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';

import styles from '../../styles/learn.module.css';
export default function TopQuestionsSubjectsList({ content, block, posts, language = 'en' }) {
  return (
    <div className={styles['learn-subjects-container']}>
      <div className={styles['learn-subjects-center-container']}>
        <h1 className={styles['learn-subjects-title']}>{block.title}</h1>
        <div className={styles['learn-subjects-list-container']}>
          {
            posts.map((item, index) => (
              <Link href={`/learn/${item.key}`} className={styles['learn-subjects-list-item']} key={index}>
                {item.title[language]}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}