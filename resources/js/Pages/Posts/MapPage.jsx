import Alert from '@/Components/Alert/Alert'
import MapPage from '@/Components/Maps/Maps'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import { Fade } from 'react-reveal'


function ContactPage() {
  return (
    <>
        <div>
            <head title="UMN FESTIVAL"/>
            <header>
                <Navbar />
            </header>
            <section className='snap-y overflow-scroll focus:scroll-auto'>
                    <Alert></Alert>
                <Fade>
                    <MapPage></MapPage>
                </Fade>  
            </section>     
        </div>
    </>
  )
}

export default ContactPage