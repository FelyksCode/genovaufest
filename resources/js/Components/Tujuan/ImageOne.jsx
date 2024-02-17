import React from 'react'
import { Parallax } from 'react-parallax'
import UMN_Image from '/public/Images/umn1.jpg'
import Carousel from './Carousel'
Carousel


function ImageOne() {
  return (
    <Parallax className='relative h-[100vh]' strength={800}>
        <div className="">
            <Carousel></Carousel>
        </div>
        <div className="flex items-center justify-center absolute h-[100vh] w-[100%]">
            <span>WELCOME TO UMN Festival</span>
        </div>
    </Parallax>
  )
}

export default ImageOne