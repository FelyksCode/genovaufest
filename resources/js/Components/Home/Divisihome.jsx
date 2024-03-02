import React from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import "./stylehero.css";
import Info1 from "./Info1";

import { useState } from "react";

import Slideimg1 from "/public/Images/Carousels/Logo_Divisi/ALBA - TICKETING.png";
import Slideimg2 from "/public/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png";
import Slideimg3 from "/public/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png";
import Slideimg4 from "/public/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png";
import Slideimg5 from "/public/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png";
import Slideimg6 from "/public/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png";
import Slideimg7 from "/public/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png";

const Divisihome = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = [
        Slideimg1,
        Slideimg2,
        Slideimg3,
        Slideimg4,
        Slideimg5,
        Slideimg6,
        Slideimg7,
    ];

    const info = [
        <Info1 />,
        "Mumbai",
        "Bengaluru",
        "Kolkata",
        "gujarat",
        "vadodara",
        "anand",
    ];

    return (
        <div className="carousel  ">
            <a href="/division">
                <div className="main  py-[100px] w-screen h-screen pembungkus">
                    <FancyCarousel
                        images={images}
                        setFocusElement={setFocusElement}
                        carouselRadius={250}
                        peripheralImageRadius={80}
                        centralImageRadius={50}
                        focusElementStyling={{ border: "2px solid #ba4949" }}
                        autoRotateTime={4}
                        borderWidth={4}
                        borderHexColor={"1c364f"}
                    />
                    {/* <div className="info-box-wrapper">
                    <p> {info[focusElement]} </p>
                </div> */}
                </div>
            </a>
        </div>
    );
};

export default Divisihome;
