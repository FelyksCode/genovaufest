import React from 'react'
import { Fade } from 'react-reveal';
Fade
import image1 from '/public/Images/NewsEvent/dumbimg1.jpeg'
import image2 from '/public/Images/NewsEvent/dumbimg2.jpeg'
import image3 from '/public/Images/NewsEvent/dumbimg3.jpeg'

function HomePart2() {
  const logo = [];
  const images = [image1,image2,image3];
  const Titles = ['Unveiling', 'Unify', 'ulympic'];
  return (
    <div className='w-full h-full bg-gray-700'>
      {images.map((image, index) => 
          <div key={index} className="relative w-full h-[200px]">
              <div className='flex justify-center items-center h-full'>
                  <img src={image} className="object-cover  h-[200px] w-full block duration-300 transition-transform hover:scale-110" />
                  
              </div>
              <div className="inset-0 flex absolute justify-center items-center text-white text-xl font-extrabold bg-black bg-opacity-50 opacity-100 hover:opacity-0 transition-opacity duration-300">
                  <h1>{Titles[index]}</h1>
              </div>
          </div>
      )}
        
    </div>
  )
}

export default HomePart2