import { useRef, useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { Carousel } from "antd";
import SlideArrowLeft from "@/public/slide-arrow-left";
import SlideArrowRight from "@/public/slide-arrow-right";
import Image from "next/image";

// 预加载图片的工具函数
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

export default function Schools({ content, block, language = "en" }) {
  const carouselRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 计算每个slide应显示的logo数量
  const itemsPerSlide = isMobile ? 2 : 4;
  const slides = [];
  for (let i = 0; i < block.slides.length; i++) {
    const slide = block.slides[i];
    for (let j = 0; j < slide.logos.length; j += itemsPerSlide) {
      slides.push(slide.logos.slice(j, j + itemsPerSlide));
    }
  }

  // 预加载下一组图片
  useEffect(() => {
    const preloadNextSlideImages = async () => {
      const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
      const nextSlideLogos = slides[nextSlideIndex];

      for (const logo of nextSlideLogos) {
        if (!preloadedImages.has(logo.image)) {
          try {
            await preloadImage(logo.image);
            setPreloadedImages((prev) => new Set([...prev, logo.image]));
          } catch (error) {
            console.warn("Failed to preload image:", logo.image);
          }
        }
      }
    };

    preloadNextSlideImages();
  }, [currentSlideIndex, slides, preloadedImages]);

  const onPrev = () => {
    const newIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    setCurrentSlideIndex(newIndex);
    carouselRef.current?.prev();
  };

  const onNext = () => {
    const newIndex = (currentSlideIndex + 1) % slides.length;
    setCurrentSlideIndex(newIndex);
    carouselRef.current?.next();
  };

  const handleBeforeChange = (from, to) => {
    setCurrentSlideIndex(to);
  };

  return (
    <div className={styles["schools-container"]}>
      <div className={styles["schools-center-container"]}>
        <h3>{block.contentTitle[language] || block.contentTitle["en"]}</h3>
        <div className={styles["schools-carousel-container"]}>
          <Carousel dots={false} ref={carouselRef} autoplaySpeed={5000} waitForAnimate autoplay lazyLoad="progressive" beforeChange={handleBeforeChange}>
            {slides.map((logos, index) => (
              <div className={styles["schools-carousel-item"]} key={index}>
                {logos.map((logo, i) => (
                  <div key={i}>
                    <Image
                      src={logo.image}
                      width={180}
                      height={60}
                      alt="school logo"
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={75}
                      sizes="(max-width: 768px) 120px, 180px"
                      priority={index === 0}
                      onLoadingComplete={() => {
                        if (!preloadedImages.has(logo.image)) {
                          setPreloadedImages((prev) => new Set([...prev, logo.image]));
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
          {!isMobile && (
            <>
              <div className={styles.arrowLeft} onClick={onPrev}>
                <SlideArrowLeft className={styles["schools-arrowIcon"]} />
              </div>
              <div className={styles.arrowRight} onClick={onNext}>
                <SlideArrowRight className={styles["schools-arrowIcon"]} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
