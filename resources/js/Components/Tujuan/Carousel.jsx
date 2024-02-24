import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    var settings2= {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
        }
    };
  return (
    <>
        <div className="slider-container">
            <Slider {...settings} className='md:w-[800px] m-auto'>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing1.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing2.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing3.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing4.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing5.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing6.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing7.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing8.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center font-custom'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='m-2 bg-gray-200 rounded-tl-[50px] rounded-br-[50px] shadow-md px-4 py-6 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                        <img src="/Images/Carousels/testing9.png" alt="" className='w-[200px] cursor-pointer m-auto' />
                        <div className="card-body">
                            <div className='m-auto text-center'>
                                <h4>Nama</h4>
                                <h3>Jurusan</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>
    </>
  )
}

export default Carousel