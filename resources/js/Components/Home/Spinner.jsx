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
        {
            image: Slideimg1,
            Judul: "Acara",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg2,
            Judul: "BPH",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg3,
            Judul: "Dekorasi",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg4,
            Judul: "Dokum",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg5,
            Judul: "FM",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg6,
            Judul: "Konsum",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg7,
            Judul: "Lomba",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg8,
            Judul: "Perkap",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg9,
            Judul: "Publi",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg10,
            Judul: "Sponsor",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg11,
            Judul: "Ticketing",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg12,
            Judul: "Visu",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
        {
            image: Slideimg13,
            Judul: "Website",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dolor metus. Nam quis dictum orci, vitae pretium ipsum. Vestibulum dignissim tortor et arcu efficitur laoreet. Duis maximus nunc nec iaculis molestie. Nunc a nisl quis quam facilisis maximus. Cras eget massa ornare ex maximus dapibus. Phasellus pharetra sapien ac lectus posuere pellentesque. Suspendisse euismod semper vulputate. Phasellus vel purus blandit, sodales tortor volutpat, finibus est. Nunc efficitur, lorem a suscipit aliquam, orci augue blandit tortor, in facilisis leo arcu a velit. Donec feugiat odio in quam fermentum, nec bibendum dui vestibulum. Quisque cursus accumsan odio id efficitur. Duis sed quam feugiat, pulvinar sapien et, facilisis nibh. Donec porttitor lectus massa. ",
        },
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
                                className="opacity-0 bg-white w-[900px] h-[400px] -mx-[290px] -my-[305px] flex 
                            items-center text-center rounded-3xl ml-[120px] transition-transform md:-translate-x-[-500px] 
                            -translate-x-[-400px] duration-500 w-full infodivisi"
                            >
                                <div className="juduldivisi w-full">
                                    <h1 className="">{item.Judul}</h1>
                                </div>
                                <div className="artidivisi w-full">
                                    <p className="">{item.Text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Spinner;
