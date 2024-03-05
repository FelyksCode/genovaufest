import React from 'react'
import { Fade } from 'react-reveal'
import MapsVid from '/public/Images/Bgimage/Bg_Maps_Ufest.mp4'


function Maps() {
  return (
    <>
      <Fade duration = {2000}>
        <div className="h-[100vh] w-full flex justify-center items-center">
            <video 
              className='w-full h-full object-cover z-10'
              autoPlay
              muted
              src={MapsVid}> 
            </video>
            <Fade bottom>
                <h1 className='font-custom absolute top-1/2 left-2/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-black text-4xl font-extrabold'>Map of UFEST</h1>
            </Fade>
        </div>
      </Fade>
    </>
  )
}

export default Maps