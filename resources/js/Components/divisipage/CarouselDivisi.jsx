import "./CarouselStyle.css";

export default function CarouselDivisi() {
    return (
        <div className="pembungkuscarousel flex justify-center align-middle items-center">
            <div className="flex h-3/4 carousel carousel-vertical">
                <div
                    id="slide1"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide13" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Coeus-40154209.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Atlas-a1cf2a94.webp"
                                />
                                <a href="#slide2 " className="py-5">
                                    <img
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        src="https://www.umnfestival.com/assets/Metis-de566228.webp"
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>Atlas</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    “goddess of endurance, strength &
                                    astronomy”“celestial sphere” “Atlas (Ἄτλας)
                                    merupakan makhluk laut yang menopang
                                    pilar-pilar yang memisahkan langit dan
                                    bumi.” BPH bertanggung jawab untuk
                                    mendampingi, merangkul, sekaligus memastikan
                                    agar kinerja dari seluruh divisi UMN
                                    Festival 2023 dapat berjalan dengan baik.
                                    Hal tersebut diumpamakan sebagai sosok Atlas
                                    yang tengah mengangkat Sphere di pundaknya.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide2"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide1" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Atlas-a1cf2a94.webp"
                                        alt="↑"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48 "
                                    src="https://www.umnfestival.com/assets/Metis-de566228.webp"
                                />
                                <a href="#slide3" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Antheia-5743d4eb.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide3"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide2" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Metis-de566228.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Antheia-5743d4eb.webp"
                                />
                                <a href="#slide4" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Mnemosyne-324cdeb3.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide4"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide3" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Antheia-5743d4eb.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Mnemosyne-324cdeb3.webp"
                                />
                                <a href="#slide5" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Tyche-73ecf132.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide5"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide4" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Mnemosyne-324cdeb3.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Tyche-73ecf132.webp"
                                />
                                <a href="#slide6" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Themis-7bc8f39d.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide6"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide5" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Tyche-73ecf132.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Themis-7bc8f39d.webp"
                                />
                                <a href="#slide7" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Demeter-9b64022d.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide7"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide6" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Themis-7bc8f39d.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Demeter-9b64022d.webp"
                                />
                                <a href="#slide8" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Nike-6ee8d3a2.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide8"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide7" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Demeter-9b64022d.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Nike-6ee8d3a2.webp"
                                />
                                <a href="#slide9" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Hermes-208a91e8.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide9"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide8" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Nike-6ee8d3a2.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Hermes-208a91e8.webp"
                                />
                                <a href="#slide10" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Iris-4c1328b5.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide10"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide9" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Hermes-208a91e8.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Iris-4c1328b5.webp"
                                />
                                <a href="#slide11" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Plutus-7af29493.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide11"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide10" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Iris-4c1328b5.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Plutus-7af29493.webp"
                                />
                                <a href="#slide12" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Muses-459e02fe.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide12"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide11" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Plutus-7af29493.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Muses-459e02fe.webp"
                                />
                                <a href="#slide13" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Coeus-40154209.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="slide13"
                    className="carousel-item h-full justify-center bg-base-600/50 rounded-md "
                >
                    <div className="flex flex-col justify-center  rounded-md ">
                        <div className="flex flex-row justify-evenly">
                            <div className="flex flex-col items-center justify-center px-5">
                                <a href="#slide12" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Muses-459e02fe.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↑"
                                    />
                                </a>
                                <img
                                    className="object-contain h-36 sm:h-48"
                                    src="https://www.umnfestival.com/assets/Coeus-40154209.webp"
                                />
                                <a href="#slide1" className="py-5">
                                    <img
                                        src="https://www.umnfestival.com/assets/Atlas-a1cf2a94.webp"
                                        className="object-contain h-14 sm:h-16 xl:h-18 "
                                        alt="↓"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center w-64 sm:w-96 penjelasan flex-col">
                                <h1>
                                    <b>NAME</b>
                                </h1>
                                <h2 className="text-xs sm:text-neutral lg:text-base text-wrap">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi saepe itaque
                                    perspiciatis quaerat? Doloribus officia,
                                    quidem culpa pariatur, consectetur aliquam
                                    exercitationem voluptatibus maiores quasi
                                    voluptas nesciunt esse dolor at commodi.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
