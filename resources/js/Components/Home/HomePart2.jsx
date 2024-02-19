import React from 'react'
import  Trailer  from "/public/Images/Trailer_2024.mp4";
import { Fade } from 'react-reveal';
Fade


function HomePart2() {
  return (
    <div className='w-full h-full bg-gray-700 relative'>
      <div className="relative">
        <video src={Trailer} autoPlay loop muted className='w-full h-[900px] md:h-full  object-cover object-center filter brightness-50 '></video>
        <Fade>
          <h1 className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white font-custom text-right text-[50px] pr-[60px]'>SHOW YOUR VALOR FIGHT WITH HONOR</h1>
        </Fade>
      </div>
    </div>
  )
}

export default HomePart2