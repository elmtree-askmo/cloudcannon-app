import styles from '../../styles/institutions.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import SlideArrowLeft from '@/public/slide-arrow-left';
import SlideArrowRight from '@/public/slide-arrow-right';
import { Autoplay } from 'swiper/modules';

export default function QuicktakesTestimonials({block, language='en'}){
    const [swiper, setSwiper] = useState(null);
    // useEffect(()=>{
    //     if(swiper && swiper.initialized){
    //         setIsBeginning(swiper.isBeginning);
    //         setIsEnd(swiper.isEnd)
    //     }
    // },[swiper])

    return (
        <div className={styles['institutions-testimonials-container']}>
            <div className={styles['institutions-testimonials-center-container']}>
                <h2>{block.contentTitle[language] || block.contentTitle['en'] }</h2>
                <p>{block.description[language] || block.description['en'] }</p>
                <div className={styles['institutions-testimonials-swiper-box']}>
                    <Swiper
                        autoplay={true}
                        spaceBetween={16}
                        slidesPerView={1}
                        breakpoints={{
                            1024:{
                                slidesPerView:3,
                                spaceBetween:16
                            }
                        }}
                        onSwiper={(swiper)=>setSwiper(swiper)}
                        // onSlideChange={(swiper)=>{setIsBeginning(swiper.isBeginning);setIsEnd(swiper.isEnd)}}
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            // dynamicBullets: true,
                            clickable: true
                        }}
                        className={styles['institutions-swiper-box']}
                    >
                        {
                            block.items.map((item, index)=>(
                                <SwiperSlide key={index}>
                                    <div className={styles['slide-item-content']}>
                                        <div><img src={item.avatar} /></div>
                                        <span>{item.name}</span>
                                        <p>{item.content[language] || item.content['en']} </p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div className={styles['slide-empty-box']}></div>
                        <div className={styles.arrowLeft} onClick={()=>swiper.slidePrev()}>
                            <SlideArrowLeft className={styles['slide-nav']} />
                        </div>
                        <div className={styles.arrowRight} onClick={()=>swiper.slideNext()}>
                            <SlideArrowRight className={styles['slide-nav']} />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}