import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
  } from "react-circular-menu";
import IonIcon from '@reacticons/ionicons';

function NewsEvent() {

    const [focused, setFocused] = useState(false);
    const handleClick = () => {
        // Toggle the focused state when the image is clicked
        setFocused(!focused);
      };

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
        <div className="w-[100%] md:h-[120vh] h-[70vh] m-0 p-0 bg-vintage">
            <div className="sm:md:text-[50px] w-[90%] m-auto">
                <h1 className='font-custom font-bold'>News & Events</h1>
                <div className='line border-b-2 border-black' />
                <div className="slider-container">
                    <Slider {...settings} className='md:w-full mt-6 rounded-xl'>
                        <div className='card'>
                            <div className='m-2 rounded-tl-[60px] w-[600px] flex relative justify-center items-center transition ease-in-out hover:scale-110 duration-300 hover:z-10'>
                                <img src="/Images/NewsEvent/dumbimg1.jpeg" alt="" className='md:w-[350px] md:h-[500px] w-[300px] h-[400px] m-auto object-cover'/>
                                <div className='absolute inset-0 flex justify-center items-center text-center font-custom flex-col w-[300px] m-auto bottom-[-40rem] hover:bottom-0 hover:transition-all duration-500 ease-in-out'>
                                    <h3 className='text-[18px] font-bold'>JUDUL BERITA ATAU EVENT</h3>
                                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis aut distinctio velit, libero commodi molestiae in maiores laboriosam harum, culpa possimus aliquid esse, beatae illum nemo dicta. Hic, excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='m-2 rounded-tl-[60px] w-[600px] flex relative justify-center items-center transition ease-in-out hover:scale-110 duration-300 hover:z-10'>
                                <img src="/Images/NewsEvent/dumbimg2.jpeg" alt="" className='md:w-[350px] md:h-[500px] w-[300px] h-[400px] m-auto object-cover'/>
                                <div className='absolute inset-0 flex justify-center items-center text-center font-custom flex-col w-[300px] m-auto bottom-[-40rem] hover:bottom-0 hover:transition-all duration-500 ease-in-out'>
                                    <h3 className='text-[18px] font-bold'>JUDUL BERITA ATAU EVENT</h3>
                                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis aut distinctio velit, libero commodi molestiae in maiores laboriosam harum, culpa possimus aliquid esse, beatae illum nemo dicta. Hic, excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='m-2 rounded-tl-[60px] w-[600px] flex relative justify-center items-center transition ease-in-out hover:scale-110 duration-300 hover:z-10'>
                                <img src="/Images/NewsEvent/dumbimg3.jpeg" alt="" className='md:w-[350px] md:h-[500px] w-[300px] h-[400px] m-auto object-cover'/>
                                <div className='absolute inset-0 flex justify-center items-center text-center font-custom flex-col w-[300px] m-auto bottom-[-40rem] hover:bottom-0 hover:transition-all duration-500 ease-in-out'>
                                    <h3 className='text-[18px] font-bold'>JUDUL BERITA ATAU EVENT</h3>
                                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis aut distinctio velit, libero commodi molestiae in maiores laboriosam harum, culpa possimus aliquid esse, beatae illum nemo dicta. Hic, excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='m-2 rounded-tl-[60px] w-[600px] flex relative justify-center items-center transition ease-in-out hover:scale-110 duration-300 hover:z-10'>
                                <img src="/Images/NewsEvent/dumbimg4.jpeg" alt="" className='md:w-[350px] md:h-[500px] w-[300px] h-[400px] m-auto object-cover'/>
                                <div className='absolute inset-0 flex justify-center items-center text-center font-custom flex-col w-[300px] m-auto bottom-[-40rem] hover:bottom-0 hover:transition-all duration-500 ease-in-out'>
                                    <h3 className='text-[18px] font-bold'>JUDUL BERITA ATAU EVENT</h3>
                                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis aut distinctio velit, libero commodi molestiae in maiores laboriosam harum, culpa possimus aliquid esse, beatae illum nemo dicta. Hic, excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='m-2 rounded-tl-[60px] w-[600px] flex relative justify-center items-center transition ease-in-out hover:scale-110 duration-300 hover:z-10'>
                                <img src="/Images/NewsEvent/dumbimg1.jpeg" alt="" className='md:w-[350px] md:h-[500px] w-[300px] h-[400px] m-auto object-cover'/>
                                <div className='absolute inset-0 flex justify-center items-center text-center font-custom flex-col w-[300px] m-auto bottom-[-40rem] hover:bottom-0 hover:transition-all duration-500 ease-in-out'>
                                    <h3 className='text-[18px] font-bold'>JUDUL BERITA ATAU EVENT</h3>
                                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis aut distinctio velit, libero commodi molestiae in maiores laboriosam harum, culpa possimus aliquid esse, beatae illum nemo dicta. Hic, excepturi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='m-2 rounded-tl-[60px] w-[600px] flex relative justify-center items-center transition ease-in-out hover:scale-110 duration-300 hover:z-10'>
                                <img src="/Images/NewsEvent/dumbimg2.jpeg" alt="" className='w-[300px] h-[400px] md:w-[350px] md:h-[500px] m-auto object-cover'/>
                                <div className='absolute inset-0 flex justify-center items-center text-center font-custom flex-col w-[300px] m-auto bottom-[-40rem] hover:bottom-0 hover:transition-all duration-500 ease-in-out'>
                                    <h3 className='text-[18px] font-bold'>JUDUL BERITA ATAU EVENT</h3>
                                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis aut distinctio velit, libero commodi molestiae in maiores laboriosam harum, culpa possimus aliquid esse, beatae illum nemo dicta. Hic, excepturi.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        <div className='bg-vintage w-full h-[100vh]'>
            <div className={`mx-[200px] md:mx-[670px] py-[200px] transition-transform duration-500 transform ${focused ? 'translate-x-0' : 'translate-x-[670px]'}`}>
                <CircleMenu
                    startAngle={-90}
                    rotationAngle={190}
                    itemSize={6}
                    radius={24}
                    rotationAngleInclusive={false}>
                    <CircleMenuItem
                        tooltip="Email"
                        tooltipPlacement={TooltipPlacement.Right}onClick={handleClick}>
                            <img src="/Images/Carousels/Logo_Divisi/ALBA - TICKETING.png" alt="" className='m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Help">
                            <img src="/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Location">
                            <img src="/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/GENOVA - WEBSITE.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/LAZIO - KONSUMSI.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/LEECE - MEDIA PARTNER.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/MILAN - LOMBA.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/NAPOLI - DOKUMENTASI.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/PISA - VISUAL.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/ROME - BPH.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                    <CircleMenuItem tooltip="Info">
                            <img src="/Images/Carousels/Logo_Divisi/TUCANY - ACARA.png" alt="" className='w-[200px] m-auto' />
                    </CircleMenuItem>
                </CircleMenu>
            </div>
        </div>
    </div>
  )
}

export default NewsEvent