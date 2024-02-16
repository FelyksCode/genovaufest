import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Carousel from './Carousel'
Parallax
Carousel

function ImageOne() {
  return (
    <Parallax bgImage={Carousel} strength={800}>

    </Parallax>
  )
}

export default ImageOne