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
import Slideimg1 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Acara.png";
import Slideimg2 from "../../../../public/Images/Carousels/LogoDivisi_Baru/BPH.png";
import Slideimg3 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Dekorasi.png";
import Slideimg4 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Dokumentasi.png";
import Slideimg5 from "../../../../public/Images/Carousels/LogoDivisi_Baru/FreshMoney.png";
import Slideimg6 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Konsumsi.png";
import Slideimg7 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Lomba.png";
import Slideimg8 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Perlengkapan.png";
import Slideimg9 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Publikasi.png";
import Slideimg10 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Sponsor.png";
import Slideimg11 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Ticketing.png";
import Slideimg12 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Visual.png";
import Slideimg13 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Website.png";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS
import "/resources/css/vertical.css";

function Spinner() {
    const verticalimages = [
        { image: Slideimg1, Text: "Text1" },
        { image: Slideimg2, Text: "Text2" },
        { image: Slideimg3, Text: "Text3" },
        { image: Slideimg4, Text: "Text4" },
        { image: Slideimg5, Text: "Text5" },
        { image: Slideimg6, Text: "Text6" },
        { image: Slideimg7, Text: "Text7" },
        { image: Slideimg8, Text: "Text8" },
        { image: Slideimg9, Text: "Text9" },
        { image: Slideimg10, Text: "Text10" },
        { image: Slideimg11, Text: "Text11" },
        { image: Slideimg12, Text: "Text12" },
        { image: Slideimg13, Text: "Text13" },
    ];

    return (
        <div className="w-full h-[100vh] bungkusan">
            <div className=" bg-white/30 w-full h-full flex justify-center items-center">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    direction="vertical"
                    navigation={true}
                    mousewheel={true}
                    keyboard={{
                        enabled: true,
                    }}
                    // autoplay={{
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}

                    autoplay={false}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    // pagination={false}
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
                            <div
                                className="opacity-0 bg-white w-[800px] h-[300px] -mx-[290px] -my-[275px] flex 
                            items-center text-center rounded-3xl ml-[120px] transition-transform md:-translate-x-[-500px] 
                            -translate-x-[-400px] duration-500 w-full "
                            >
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
