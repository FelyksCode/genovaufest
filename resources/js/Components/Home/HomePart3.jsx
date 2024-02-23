import React from 'react'
import { ParallaxBanner, useParallax } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax';

function HomePart3() {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });
  return (
        <>
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    { image: '/Images/Backgroundimg.png', speed: -20 },
                    { image: '/Images/UfestLogo.png', speed: -10, },
                ]}
                className="aspect-[4/1]"
                >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-8xl text-white font-thin">UMN Festival</h1>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
        </>
  )
}

export default HomePart3