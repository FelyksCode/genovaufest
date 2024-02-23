import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsEvent() {
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
    </div>
  )
}

export default NewsEvent