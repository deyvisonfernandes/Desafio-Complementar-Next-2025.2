'use client'

import './index.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Cardfeedback2 from './variante-feedback2';

export default function FeedbackTwo(feedback2Props: {
  style?: React.CSSProperties,
  image_src_card: string[],
  text_style?: React.CSSProperties,
  autoPlayMs?: number,
  autoPlayActive?: boolean;
  title?: string;
}) {
    const{autoPlayActive=true} = feedback2Props
  return (
    <div className="container_feedback" style={{ ...feedback2Props.style }} id='clientes'>
      <p
        className='title_feedback'
        style={{...feedback2Props.text_style }}
      >
        {feedback2Props.title ? feedback2Props.title : "Com quem já trabalhamos?"}
      </p>

      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Swiper
          slidesPerView={1}     
          spaceBetween={10}     
          loop={true}           
          autoplay={
            autoPlayActive?{
            delay: feedback2Props.autoPlayMs || 3000, 
            disableOnInteraction: false, 
          }: false}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="mySwiper-fb"
                    breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,  
            },
       
            768: {
              slidesPerView: 2,
              centeredSlides: false, 
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false, 
            },
            1440: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            1921: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
        >
          {feedback2Props.image_src_card.map((_, index) => (
            <SwiperSlide className='slide' key={index}>
              <Cardfeedback2
                image={feedback2Props.image_src_card[index]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
