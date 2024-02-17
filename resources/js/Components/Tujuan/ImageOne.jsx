import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import UMN_image from 'public/Images/umn_image.jpg'
Parallax


function ImageOne() {
  return (
    <Parallax bgImage={UMN_image} strength={800}>

    </Parallax>
  )
}

export default ImageOne