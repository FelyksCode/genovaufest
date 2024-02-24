import Accordion from '@/Components/FaQ/Accordion'
import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import { Fade } from 'react-reveal'


function FAQ() {
  return (
    <>
      <head>
        <title>UMNFestival</title>
      </head>
      <header>
          <Navbar />
      </header>
      <section className='scroll-smooth'>
        <Fade>
          <Accordion></Accordion>
        </Fade>
      </section>
    </>
  )
}

export default FAQ