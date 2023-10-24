'use client'

import { useState } from 'react';

import SignUpNow from '../component/sign-up-now';

import styles from './page.module.css';

export default function AboutUs() {

  const [foundingList] = useState([
    {
      key: 'Garwin',
      name: 'Garwin Chan',
      title: 'CEO',
      description: 'Investor & M&A background; tech advocate & enabler',
      photo: './images/photo-Garwin.webp',
    },
    {
      key: 'George',
      name: 'George Chen',
      title: 'President',
      description: 'Serial entrepreneur in digital marketing, blockchain, AI, edtech',
      photo: './images/photo-George.webp',
    },
    {
      key: 'James',
      name: 'James Ku',
      title: 'Head of Product',
      description: 'Seasoned AI &technical product lead, w/ edtech focus',
      photo: './images/photo-James.webp',
    },
    {
      key: 'Ale',
      name: 'Alé Di Mare',
      title: 'Head of Engineering',
      description: 'Engineering leader at edtech cos & social learning pioneer',
      photo: './images/photo-Ale.webp',
    },
    {
      key: 'Darian',
      name: 'Darian Patchin',
      title: 'Head of GTM',
      description: 'Seasoned edtech marketer',
      photo: './images/photo-Darian.webp',
    },
  ])

  return <div className={styles['about-us']}>
    <div className={`${styles.content} desktop-view`}>
      <div className={styles['about-us-image']}><img src='./images/about-us-image.webp' /></div>
      <div className={styles['about-us-title']}>About <span>Edkey</span></div>
      <div className={styles['auout-us-content']}>Edkey's mission is to help life-long learners reach their full academic potential through new technologies that advance human intelligence through more effective learning & knowledge sharing.</div>
      <div className={styles['auout-us-content']}>Our flagship products are QuickTakes and ClassMo. The QuickTakes consumer app (available in the iOS and Android app stores and via web browser) offers college students an easy and effective way to increase their understanding of their course lectures with the help of a personalized AI assistant. The QuickTakes app uses AI to return robust learning materials from class lecture recordings including study guides, outlines, glossaries, practice questions, recommended videos as well as an AI assistant for more in depth studying about the lecture subject matter.</div>
      <div className={styles['auout-us-content']}>Edkey Inc. is an educational technology company made of a group of former principal Edmodo executives (over 140m student and teacher users) who collectively have more than 50 years of experience building educational services at institutions including Edmodo, Stanford University, Redbird Advanced Learning, McGraw Hill and technology companies including Netscape, DoubleClick, NetDragon, Alexa and more. EdKey develops technologies, services, and applications focused on the K-12 and Higher Ed educational spaces.</div>
      <div className={styles['auout-us-content']}>Founded in fall of 2022 in California, Edkey Inc., has roots in the San Francisco Bay Area. The founding team has a shared belief in personalized, life-long learning and believe that further edtech innovation is needed to democratize access to learning tools that unlock each learner’s full potential. </div>
    </div>
    <div className={styles['founding-team']}>
      <div className={`${styles.content} desktop-view`}>
        <div className={styles['founding-title']}>Founding Team</div>
        <div className={styles['founding-flex']}>
          {foundingList.map((item) => {
            const { key, photo, name, title, description } = item
            return <div className={styles['founding-box']}  key={key}>
              <div className={styles.photo}><img src={photo} /></div>
              <div className={styles.name}>{name}</div>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
            </div>
          })}
        </div>
      </div>
    </div>
    <div className={styles['experiences']}>
      <div className={`${styles.content} desktop-view`}>
        <di className={styles['experience-title']}>Decades of cumulative experience spanning</di>
        <div className={styles['experience-flex']}>
          <div className={styles['experience-image']}><img src="./images/experience-image1.webp" /></div>
          <div className={styles['experience-image']}><img src="./images/experience-image2.webp" /></div>
          <div className={styles['experience-image']}><img src="./images/experience-image3.webp" /></div>
          <div className={styles['experience-image']}><img src="./images/experience-image4.webp" /></div>
          <div className={styles['experience-image']}><img src="./images/experience-image5.webp" /></div>
          <div className={styles['experience-image']}><img src="./images/experience-image6.webp" /></div>
          <div className={styles['experience-image']}><img src="./images/experience-image7.webp" /></div>
        </div>
      </div>
    </div>
    <SignUpNow />
  </div>
}