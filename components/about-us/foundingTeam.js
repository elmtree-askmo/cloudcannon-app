import { useLayoutEffect, useRef, useState } from 'react';
import styles from '../../styles/about-us.module.css';
import { Button, Carousel } from 'antd';
import SlideArrowLeft from '@/public/slide-arrow-left';
import SlideArrowRight from '@/public/slide-arrow-right';

export default function FoundingTeam({content, block}){
  const carouselRef = useRef();
  const [curSlide, setCurSlide] = useState(0);
  const handleAfterChange = (curNum)=>{
    setCurSlide(curNum)
  }
  const handleBeforeChange = (curNum, nextNum)=>{
    console.log(curNum, nextNum)
  }
  const handleClickAvatar = (index)=>{
    console.log(index);
    carouselRef.current.goTo(index)
  }
  const onPrev = ()=>{
    carouselRef.current.prev && carouselRef.current.prev();
  }
  const onNext = ()=>{
      carouselRef.current.next && carouselRef.current.next();
  }
  const handleViewMore = (index, e)=>{
    const els = document.getElementsByClassName(`members_${index}`);
    for(var i = 0; i< els.length;i++){
      const style = window.getComputedStyle(els[i])
      const line = style.getPropertyValue("-webkit-line-clamp")
      if(line === '10'){
        els[i].style.webkitLineClamp = 'unset';
        e.target.innerText = 'View Less';
        e.target.classList.add(styles['viewMore-active']);
      }else{
        els[i].style.webkitLineClamp = 10;
        e.target.innerText = 'View More';
        e.target.classList.remove(styles['viewMore-active']);
      }
    }
  }

  
  const isShowBtn = ()=>{
    const els = document.getElementsByClassName(`member-intro`);
    for(var i =0; i< els.length; i++){
      const style = window.getComputedStyle(els[i]);
      const lineHeight = parseFloat(style.getPropertyValue("line-height"));
      const line = els[i].offsetHeight / lineHeight;
      const screen = window.innerWidth;
      if(screen < 1024){
        if(line < 10){
          els[i].nextElementSibling.style.display = 'none';
        }else{
          els[i].nextElementSibling.style.display = 'flex';
        }
      }
    }
  }

  useLayoutEffect(()=>{
    isShowBtn();
  },[])

    return (
        <div className={styles['founding-team-container']}>
          <div className={styles['founding-team-center-container']}>
            <h3>{block.contentTitle}</h3>
            <div className={styles['founding-flex']}>
              {block.members.map((item, key) => {
                const { avatar, name, title, description } = item
                return <div className={styles['founding-box']}  key={key} onClick={()=>handleClickAvatar(key)}>
                  <div className={`${styles.photo} ${curSlide === key?styles['active-avatar']:''}`}><img src={avatar} /></div>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.title}>{title}</div>
                </div>
              })}
            </div>
            <div className={styles['founding-carousel']}>
              <Carousel dots={false} ref={carouselRef} autoplaySpeed={5000} waitForAnimate  afterChange={handleAfterChange} beforeChange={handleBeforeChange}> 
                  {
                    block.members.map((item, index)=>(
                      <div className={styles['founding-carousel-item-container']} key={index} >
                        <div className={styles['founding-carousel-item-mobile-headshots']}>
                          <div className={styles['founding-carousel-item-mobile-avatar']} ><img src={item.avatar} /></div>
                          <div className={styles.name}>{item.name}</div>
                          <div className={styles.title}>{item.title}</div>
                        </div>
                        <div className={styles['founding-carousel-item']}>
                            <div className={styles['founding-carousel-item-avatar']}>
                              <img src={item.avatar} />
                            </div>
                            <div className={styles['founding-carousel-item-content']}>
                              <h5>{item.name}</h5>
                              <p className={`members_${index} member-intro`} >{item.description}</p>
                              {/* <Button type={"ghost"} className={styles.viewMore} onClick={(e)=>handleViewMore(index,e)} >View More <SlideArrowLeft className={styles.arrow} /></Button> */}
                              <span className={styles.viewMore} onClick={e=>handleViewMore(index, e)}>View More </span>
                            </div>
                        </div>
                      </div>
                    ))
                  }
              </Carousel>
            </div>
            <div className={styles.arrowLeft} onClick={onPrev}>
                <SlideArrowLeft />
            </div>
            <div className={styles.arrowRight} onClick={onNext}>
                <SlideArrowRight />
            </div>
          </div>
        </div>
    )
}