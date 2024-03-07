import Alert from '@/Components/Alert/Alert'
import MapVid from '@/Components/Maps/Maps'
import MapsReact from '@/Components/Maps/MapsReact'
import Navbar from '@/Components/Navbar/Navbar'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'


function MapPage() {
  const [showMapVid, setShowMapVid] = useState(true);

  const handleVideoEnd = () => {
    setShowMapVid(false);
  };

  return (
    <>
      <Head title="Map Events" />
      <header>
        <Navbar />
      </header>
      <section className='snap-y overflow-scroll focus:scroll-auto'>
        <Alert></Alert>
        {showMapVid ? (
          <Fade>
            <MapVid onVideoEnd={handleVideoEnd} />
          </Fade>
        ) : (
          <Fade duration={5000}>
            <MapsReact />
          </Fade>
        )}
      </section>
    </>
  );
}

export default MapPage