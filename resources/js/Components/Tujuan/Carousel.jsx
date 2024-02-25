import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '/public/Images/Carousels/testing1.png';
import image2 from '/public/Images/Carousels/testing2.png';
import image3 from '/public/Images/Carousels/testing3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '/resources/css/card.css';
import { EffectCards } from 'swiper/modules';

function Carousel() {
    const images = [image1, image2, image3];
    const names = ['Johan', 'April', 'March 7th'];
    const division = ['Napoli', 'Genova', 'Rome'];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <>
        <div className="slider-container">
            <Slider {...settings} className='md:w-[800px] m-auto'>
                {images.map((image, index) => 
                    <div key={index} className='card'>
                        <div className='m-1 h-[300px] md:h-[400px] bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-[45px] md:py-[70px] justify-center items-center transition ease-in-out hover:scale-110 duration-300 z-10'>
                            <img src={image} alt="" className='w-[200px] cursor-pointer m-auto transition-all ease-in-out hover:scale-150 hover:z-100 z-50' />
                            <div className="card-body">
                                <div className='m-auto text-center font-custom'>
                                    <h4>{names[index]}</h4>
                                    <h3>{division[index]}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
        <div className='pt-40 md:pt-20 pb-20'>
            <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Carousel