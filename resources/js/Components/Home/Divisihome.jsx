import React from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./stylehero.css";
import Info1 from "./Info1";

import { useState, useEffect } from "react";

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

const Divisihome = () => {
    const [focusElement, setFocusElement] = useState(0);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const images = [
        Slideimg1,
        Slideimg2,
        Slideimg3,
        Slideimg4,
        Slideimg5,
        Slideimg6,
        Slideimg7,
        Slideimg8,
        Slideimg9,
        Slideimg10,
        Slideimg11,
        Slideimg12,
        Slideimg13,
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const carouselProps =
        windowWidth <= 550
            ? {
                  carouselRadius: 130,
                  peripheralImageRadius: 28,
                  centralImageRadius: 60,
              }
            : {
                  carouselRadius: 250,
                  peripheralImageRadius: 43,
                  centralImageRadius: 110,
              };

    return (
        <div className="carousel  ">
            <a href="/division">
                <div className="main py-[100px] w-screen h-screen pembungkus">
                    <FancyCarousel
                        images={images}
                        setFocusElement={setFocusElement}
                        focusElementStyling={{ border: "5px solid #ba4949" }}
                        autoRotateTime={3}
                        borderWidth={4}
                        borderHexColor={"1c364f"}
                        {...carouselProps} // Spread the conditional props
                    />
                </div>
            </a>
        </div>
    );
};

export default Divisihome;
