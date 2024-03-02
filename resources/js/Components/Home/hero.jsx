import React, { useRef, useEffect, useState } from "react";
import UMN_Image from "/public/Images/umn1.jpg";
import IonIcon from "@reacticons/ionicons";
import Trailer from "/public/Images/Trailer.mp4";
// import Carousel from "./Carousel"; // Import your Carousel component here
import { Fade } from "react-reveal";

// css
import "./stylehero.css";

function hero() {
    const videoRef = useRef(null);

    return (
        <section className=" mx-auto py-[100px] pembungkus text-white">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-11 lg:flex-row lg:justify-between">
                <div className="bg-white rounded-md flex items-center justify-center p-6 mt-8 lg:mt-0">
                    {/* <div className=" md:col-span-6 col-span-12 lg:flex"> */}
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        className="relative"
                    >
                        <source
                            src={Trailer}
                            type="video/mp4"
                            className="rounded-md"
                        />
                        Your browser does not support the video tag.
                    </video>
                    {/* </div> */}
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl text-center lg:text-left">
                        UMN FESTIVAL
                        {/* <span className="dark:text-violet-400">senectus</span>
                        erat pharetra */}
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam cursus neque diam. Praesent neque metus,
                        venenatis quis laoreet ac, euismod vitae eros. Mauris at
                        dictum nisl. Praesent nec vehicula mi. Etiam elementum
                        facilisis pretium. Sed efficitur arcu ligula, et luctus
                        magna semper quis. Donec placerat a nisi in fringilla.
                        Phasellus ornare mollis justo vel egestas. Morbi eget
                        tristique nisl.
                        {/* <br className="hidden md:inline lg:hidden" />
                        turpis pulvinar, est scelerisque ligula sem */}
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        {/* <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                        >
                            Suspendisse
                        </a> */}
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:bg-gray-400 transition ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default hero;
