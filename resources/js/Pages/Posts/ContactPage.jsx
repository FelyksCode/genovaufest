import Alert from '@/Components/Alert/Alert'
import ContactSection from '@/Components/Contact/ContactSection'
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
                    <ContactSection></ContactSection>
                </Fade>  
            </section>     
        </div>
    </>
  )
}

export default ContactPage