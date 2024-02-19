import React from 'react'
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <Slider {...settings2} className='m-auto mt-[80px] bottom-10 md:w-[800px]'>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/ALBA - TICKETING.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>ALBA</h4>
                            <h3>Ticketing</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>Ardea</h4>
                            <h3>Perlengkapan</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>Catania</h4>
                            <h3>Publikasi</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>Florence</h4>
                            <h3>Dekorasi</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/GENOVA - WEBSITE.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>Genova</h4>
                            <h3>Website</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/LAZIO - KONSUMSI.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>Lazio</h4>
                            <h3>Konsumsi</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/LEECE - MEDIA PARTNER.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>ALBA</h4>
                            <h3>Ticketing</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/MILAN - LOMBA.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>ALBA</h4>
                            <h3>Ticketing</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/NAPOLI - DOKUMENTASI.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>ALBA</h4>
                            <h3>Ticketing</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='mt-20 justify-center items-center transition ease-in-out hover:scale-110 duration-300'>
                    <img src="/Images/Carousels/Logo_Divisi/PISA - VISUAL.png" alt="" className='w-[200px] m-auto' />
                    <div className="card-body">
                        <div className='m-auto text-center font-custom'>
                            <h4>ALBA</h4>
                            <h3>Ticketing</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </>
  )
}

export default Carousel