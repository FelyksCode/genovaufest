import Alert from '@/Components/Alert/Alert'
import MapPage from '@/Components/Maps/Maps'
import MapsReact from '@/Components/Maps/MapsReact'
import Navbar from '@/Components/Navbar/Navbar'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'


function MapPages() {
  const [showMapPage, setShowMapPage] = useState(true);

  useEffect(() => {
    const hasShownMapPage = sessionStorage.getItem('hasShownMapPage');
    if (hasShownMapPage) {
      setShowMapPage(false);
    } else {
      sessionStorage.setItem('hasShownMapPage', true);
    }
  }, []);
  
  return (
    <>
        <Head title="Map Events" />
        <header>
          <Navbar />
        </header>
        <section className='snap-y overflow-scroll focus:scroll-auto'>
          <Alert></Alert>
          <MapsReact></MapsReact>
          {showMapPage && (
            <Fade>
              <MapPage></MapPage>
            </Fade>
          )}
        </section>     
    </>
  )
}

export default MapPages