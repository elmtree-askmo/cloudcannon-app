import { Button, Carousel } from 'antd';
import styles from '../../styles/Home.module.css';
import { useRef, useEffect, useState } from 'react';
import SlideArrowLeft from '@/public/slide-arrow-left';
import SlideArrowRight from '@/public/slide-arrow-right';
import Image from 'next/image';

export default function Slideshow({content, block, language='en'}){
    const carouselRef = useRef();
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const onPrev = ()=>{
        carouselRef.current?.prev();
    }
    const onNext = ()=>{
        carouselRef.current?.next();
    }

    // 预加载第一张图片
    useEffect(() => {
        if (block.slides?.[0]?.avatar) {
            const preloadImage = new window.Image();
            preloadImage.src = block.slides[0].avatar;
        }
    }, [block.slides]);

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['carousel-center-container']}>
                <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
                <h4>{block.subTitle[language] || block.subTitle['en']}</h4>
                <div className={styles['carousel-box']}>
                    {isClient && (
                        <Carousel 
                            dots={false}  
                            ref={carouselRef} 
                            autoplaySpeed={5000} 
                            waitForAnimate 
                            autoplay
                            lazyLoad="progressive"
                        > 
                            {block.slides.map((item,index)=>(
                                <div className={styles['carousel-custom-item']} key={index} >
                                    <div className={styles['carousel-item-avatar']}>
                                        <Image
                                            src={item.avatar}
                                            alt={item.name[language] || item.name['en']}
                                            width={100}
                                            height={100}
                                            loading={index === 0 ? "eager" : "lazy"}
                                            priority={index === 0}
                                            quality={75}
                                        />
                                    </div>
                                    <div className={styles['carousel-item-info']}>
                                        <p className={styles['carousel-item-comment']}>{item.description[language] || item.description['en']}</p>
                                        <p className={styles['carousel-item-user']}>
                                            <span>{item.name[language] || item.name['en']}</span> - <span>{item.grade[language] || item.grade['en']}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    )}
                    <div className={styles.arrowLeft} onClick={onPrev}>
                        <SlideArrowLeft />
                    </div>
                    <div className={styles.arrowRight} onClick={onNext}>
                        <SlideArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}