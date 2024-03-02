import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '/resources/css/app.css'

function NewsEvent() {


  return (
    <div>
        <div className="w-[100%] md:h-[800px] h-[60vh] flex flex-col justify-center items-center p-0 bg-midbg bg-cover">
            <h1 className='text-white text-4xl font-bold mt-10 mb-8'>Events</h1>
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
    </div>
  )
}

export default NewsEvent