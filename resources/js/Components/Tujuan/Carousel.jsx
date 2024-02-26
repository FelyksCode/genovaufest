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
import { Fade } from 'react-reveal';
import slideimg1 from '/public/Images/Carousels/Logo_Divisi/ALBA - TICKETING.png';
import slideimg2 from '/public/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png';
import slideimg3 from '/public/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png';
import slideimg4 from '/public/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png';
import slideimg5 from '/public/Images/Carousels/Logo_Divisi/GENOVA - WEBSITE.png';
import slideimg6 from '/public/Images/Carousels/Logo_Divisi/LAZIO - KONSUMSI.png';
import slideimg7 from '/public/Images/Carousels/Logo_Divisi/LEECE - MEDIA PARTNER.png';
import slideimg8 from '/public/Images/Carousels/Logo_Divisi/MILAN - LOMBA.png';
import slideimg9 from '/public/Images/Carousels/Logo_Divisi/NAPOLI - DOKUMENTASI.png';
import slideimg10 from '/public/Images/Carousels/Logo_Divisi/PISA - VISUAL.png';
import slideimg11 from '/public/Images/Carousels/Logo_Divisi/ROME - BPH.png';
import slideimg12 from '/public/Images/Carousels/Logo_Divisi/TUCANY - ACARA.png';
import slideimg13 from '/public/Images/Carousels/Logo_Divisi/TURIN SPONSOR.png';
import slideimg14 from '/public/Images/Carousels/Logo_Divisi/VENEZIA - FRESH MONEY.png';
import slideimg15 from '/public/Images/Carousels/Logo_Divisi/VERONA - KEAMANAN.png';

function Carousel() {
    const slideimages = [slideimg1, slideimg2, slideimg3, slideimg4, slideimg5, slideimg6, slideimg7, slideimg8, slideimg9, slideimg10, slideimg11, slideimg12, slideimg13, slideimg14, slideimg15];
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
        <Fade bottom>
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
        </Fade>
        <Fade right>
            <div className='pt-40 md:pt-20 pb-20'>
                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                {slideimages.map((slideimage, index) =>
                    <SwiperSlide key={index}>
                        <img src={slideimage} alt={`Slide ${index}`} />
                    </SwiperSlide>
                )}
                </Swiper>
            </div>
        </Fade>
    </>
  )
}

export default Carousel