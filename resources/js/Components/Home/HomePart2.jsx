import React from 'react'
import  Trailer  from "/public/Images/Trailer_2024.mp4";
import { Fade } from 'react-reveal';
Fade


function HomePart2() {
  return (
    <div className='w-full h-full bg-gray-700 relative'>
      <div className="relative">
        <video src={Trailer} autoPlay loop muted className='w-full h-[900px] md:h-full  object-cover object-center filter brightness-50 '></video>
        <Fade left  duration={4500}>
          <h1 className='absolute md:top-1/3 top-1/3 md:left-1/3 left-[80px] md:transform md:-translate-x-1/2 -translate-y-1/2 text-white font-custom text-center md:text-right text-[50px] pr-[60px]'>SHOW YOUR VALOR FIGHT WITH HONOR</h1>
        </Fade>
      </div>
    </div>
  )
}

export default HomePart2