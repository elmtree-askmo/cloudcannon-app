import { useState, useEffect } from 'react';
import styles from '../styles/campaignBanner.module.css';

const CampaignBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Always show on page load; add body class so header/content are offset
    setIsVisible(true);
    document.body.classList.add('banner-visible');

    // Add scroll event listener for fade effect
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50); // Start fading after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.classList.remove('banner-visible');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    document.body.classList.remove('banner-visible');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.banner} ${isScrolled ? styles.bannerFaded : ''}`}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <span className={styles.message}>
            <span className={styles.emoji}>🎥</span>
            <strong> Post Your Study Tip on Social & Get $500</strong>
            <span className={styles.emoji}>💰</span>
            <span className={styles.note}>(Eligible for U.S. or Canada Quicktakes Users)</span>
            <a 
              href="https://social.quicktakes.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.campaignLink}
            >
              Learn more →
            </a>
          </span>
        </div>
        <button 
          className={styles.closeButton}
          onClick={handleDismiss}
          aria-label="Close campaign banner"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CampaignBanner;
