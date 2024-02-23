import Accordion from '@/Components/FaQ/Accordion'
import Navbar from '@/Components/Navbar/Navbar'
import daisyui from 'daisyui'
Navbar
import React from 'react'
Accordion
daisyui

function FAQ() {
  return (
    <>
      <head title="UMN FESTIVAL"/>
      <header>
          <Navbar />
      </header>
      <section className='scroll-smooth'>
          <Accordion></Accordion>
      </section>
    </>
  )
}

export default FAQ