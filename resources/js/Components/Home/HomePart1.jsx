import React from 'react'
import Carousel from '../Tujuan/Carousel'
import { Fade } from 'react-reveal'
Fade
Carousel

function HomePart1() {
  return (
    <div className='bg-vintage h-[800px] w-full m-auto'>
        <div className='text-center text-[40px] relative'>
            <Fade left duration={1000}>
              <div className="w-full h-full absolute flex top-2 left-2 justify-center items-center">
                  <h1 className='font-custom font-bold'>Coordinator</h1>
              </div>
              <img src="/Images/Carousels/text-frame-1.png" alt="" className='m-auto'/>
            </Fade>
        </div>
        <Fade left duration={3500}>
            <Carousel></Carousel>
        </Fade>
    </div>
  )
}

export default HomePart1