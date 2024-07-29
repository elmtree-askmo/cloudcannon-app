import { Button, Carousel } from 'antd';
import styles from '../../styles/Home.module.css';
import { useRef } from 'react';
import SlideArrowLeft from '@/public/slide-arrow-left';
import SlideArrowRight from '@/public/slide-arrow-right';

export default function Slideshow({content, block, language='en'}){
    const carouselRef = useRef();
    
    const onPrev = ()=>{
        carouselRef.current.prev && carouselRef.current.prev();
    }
    const onNext = ()=>{
        carouselRef.current.next && carouselRef.current.next();
    }

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['carousel-center-container']}>
                <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
                <h4>{block.subTitle[language] || block.subTitle['en']}</h4>
                <div className={styles['carousel-box']}>
                    <Carousel dots={false}  ref={carouselRef} autoplaySpeed={5000} waitForAnimate autoplay > 
                        {
                            block.slides.map((item,index)=>(
                                <div className={styles['carousel-custom-item']} key={index} >
                                    <div className={styles['carousel-item-avatar']}><img src={item.avatar} /></div>
                                    <div className={styles['carousel-item-info']}>
                                        <p className={styles['carousel-item-comment']}>{item.description[language] || item.description['en']}</p>
                                        <p className={styles['carousel-item-user']}>
                                            <span>{item.name[language] || item.name['en']}</span> - <span>{item.grade[language] || item.grade['en']}</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
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