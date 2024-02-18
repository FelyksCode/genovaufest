import React from 'react'
import { Parallax } from 'react-parallax'
import UMN_Image from '/public/Images/umn1.jpg'
import trailer_umn_festival from '/public/Images/trailer_umn_festival.mp4'
import Carousel from './Carousel'
import IonIcon from '@reacticons/ionicons'
Carousel


function ImageOne() {
  return (
    <div className="">
        <Parallax className='relative h-[100vh]' bgImage={UMN_Image} strength={800}>
            <div className="flex items-center justify-center absolute h-[100vh] w-[100%]">
                <span className='text-white font-extrabold text-[20px] md:text-[50px] font-custom text-center'>WELCOME TO UMN Festival</span>
            </div>
            <div className="flex md:ml-[710px] md:pt-[560px] ml-[200px] pt-[420px]">
                <IonIcon name='caret-down-outline' className='text-white text-[40px] pt-[70px] animate-bounce'></IonIcon>
            </div>
        </Parallax>
    </div>
  )  
}

export default ImageOne