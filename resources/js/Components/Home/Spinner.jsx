import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import '/resources/css/app.css'
import Info1 from './Info1';

import image1 from '/public/Images/Carousels/testing1.png';
import image2 from '/public/Images/Carousels/testing1.png';
import image3 from '/public/Images/Carousels/testing1.png';
import image4 from '/public/Images/Carousels/testing1.png';
import image5 from '/public/Images/Carousels/testing1.png';
import image6 from '/public/Images/Carousels/testing1.png';
import image7 from '/public/Images/Carousels/testing1.png';
import { useState } from 'react';

function Spinner() {
  const [focusElement, setFocusElement] = useState(0);
    const images = [image1, image2, image3, image4,image5,image6,image7];
    const info = [ <Info1/>,'Mumbai', 'Bengaluru', 'Kolkata','gujarat','vadodara','anand'];
  return (
    <div className='w-full h-[100vh] bg-vintage'>
        <div className="carousel">
          <div className='main'>
            <FancyCarousel 
            images={images} 
            setFocusElement={setFocusElement}
            carouselRadius={200}
                peripheralImageRadius={50}
                centralImageRadius={50}
                focusElementStyling={{border: '2px solid #ba4949'}}
                autoRotateTime={10}
                borderWidth={0}
                borderHexColor={'1c364f'} />
              <div className="info-box-wrapper">
                <p> {info[focusElement]} </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Spinner