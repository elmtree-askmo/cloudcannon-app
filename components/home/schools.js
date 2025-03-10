import { useRef } from 'react';
import styles from '../../styles/Home.module.css';
import { Carousel } from 'antd';
import SlideArrowLeft from '@/public/slide-arrow-left';
import SlideArrowRight from '@/public/slide-arrow-right';
import Image from 'next/image';

export default function Schools({content, block, language='en'}){
    const carouselRef = useRef();
    
    const onPrev = ()=>{
        carouselRef.current.prev && carouselRef.current.prev();
    }
    const onNext = ()=>{
        carouselRef.current.next && carouselRef.current.next();
    }
    return (
        <div className={styles['schools-container']}>
            <div className={styles['schools-center-container']} >
                <h3>{block.contentTitle[language] || block.contentTitle['en']}</h3>
                <div className={styles['schools-carousel-container']}>
                    <Carousel dots={false}  ref={carouselRef} autoplaySpeed={5000} waitForAnimate autoplay > 
                        {
                            block.slides.map((item, index)=>(
                                <div className={styles['schools-carousel-item']} key={index}>
                                    {
                                        item.logos.map((subItem, i)=>(
                                            <div key={i}>
                                                <Image 
                                                    src={subItem.image}
                                                    fill
                                                    alt='school logo'
                                                    loading='lazy'
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Carousel>
                    <div className={styles.arrowLeft} onClick={onPrev}>
                        <SlideArrowLeft className={styles['schools-arrowIcon']} />
                    </div>
                    <div className={styles.arrowRight} onClick={onNext}>
                        <SlideArrowRight className={styles['schools-arrowIcon']} />
                    </div>
                </div>
            </div>
        </div>
    )
}