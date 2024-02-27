import React from "react";

// Package
import "swiper/css";
import "swiper/css/pagination";
import {
    Autoplay,
    Pagination,
    Navigation,
    Keyboard,
    Mousewheel,
} from "swiper/modules";

// Assets
import slideimg1 from "/public/Images/Carousels/Logo_Divisi/ALBA - TICKETING.png";
import slideimg2 from "/public/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png";
import slideimg3 from "/public/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png";
import slideimg4 from "/public/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "/resources/css/vertical.css";

function Spinner() {
    const verticalimages = [
        { image: slideimg1, Text: "Text1" },
        { image: slideimg2, Text: "Text2" },
        { image: slideimg3, Text: "Text3" },
        { image: slideimg4, Text: "Text4" },
    ];

    return (
        <div className="w-full h-[100vh] bg-vintage">
            <div className="backdrop-blur-md bg-white/30 w-full h-full flex justify-center items-center">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    direction="vertical"
                    navigation={true}
                    mousewheel={true}
                    keyboard={{
                        enabled: true,
                    }}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    centeredSlides={true}
                    loop="true"
                    modules={[
                        Autoplay,
                        Pagination,
                        Navigation,
                        Keyboard,
                        Mousewheel,
                    ]}
                    className="mySwiper"
                >
                    {verticalimages.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="transition-all duration-3000 hover:blur-none blur cursor-pointer"
                        >
                            <img src={item.image} alt="" />
                            <div className="bg-white w-[200px] h-[200px] -my-[205px] flex items-center text-center rounded-3xl ml-[120px] transition-transform hover:-translate-x-[200px] translate-x-0 duration-500">
                                <p className="">{item.Text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Spinner;
