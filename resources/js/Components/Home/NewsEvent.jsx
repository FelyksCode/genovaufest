import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/resources/css/app.css'
import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
  } from "react-circular-menu";
function NewsEvent() {

    const [focused, setFocused] = useState(false);
    const handleClick = () => {
        // Toggle the focused state when the image is clicked
        setFocused(!focused);
      };

  return (
    <div>
        <div className="w-[100%] md:h-[100vh] h-[60vh] flex flex-col justify-center items-center p-0 bg-vintage">
            <h1 className='text-white text-4xl font-bold mt-8 mb-4'>News & Events</h1>
            <hr className='border-3 border-white w-[300px] md:w-[1000px]' />
            <div className="news-container ">
                <div className="box box-1" data-text="Renji">
                    <img src="https://i.postimg.cc/sgBkfbtx/img-1.jpg" alt="Renji" />
                </div>
                <div className="box box-2" data-text="Sora">
                    <img src="https://i.postimg.cc/3RZ6bhDS/img-2.jpg" alt="Sora" />
                </div>
                <div className="box box-3" data-text="Kaito">
                    <img src="https://i.postimg.cc/DZhHg0m4/img-3.jpg" alt="Kaito" />
                </div>
                <div className="box box-4" data-text="Tsuki">
                    <img src="https://i.postimg.cc/KjqWx5ft/img-4.jpg" alt="Tsuki" />
                </div>
                <div className="box box-5" data-text="Mitsui">
                    <img src="https://i.postimg.cc/nrcWyW4H/img-5.jpg" alt="Mitsui" />
                </div>
            </div>
        </div>
        <div className='bg-vintage w-full h-[100vh] '>
            <div className={`mx-[210px] md:mx-[678px] py-[200px] transition-transform duration-500 transform ${focused ? 'translate-x-[-670px]' : 'translate-x-0'}`}>
                <CircleMenu
                    startAngle={-90}
                    rotationAngle={360}
                    itemSize={4}
                    radius={14}
                    rotationAngleInclusive={false}
                    onClick={handleClick}>
                    <CircleMenuItem
                        tooltip="Email"
                        tooltipPlacement={TooltipPlacement.Right}>
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