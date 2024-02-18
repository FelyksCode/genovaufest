import { Link } from '@inertiajs/react'
import IonIcon from '@reacticons/ionicons'
import React, { useEffect, useState } from 'react'
import Button from './Button'

function Navbar() {
    let Links =[
        {name:"HOME", link: "/"},
        {name:"ABOUT US",link :"/"} ,
        {name:"DIVISION",link : "/"},
        {name:"CONTACT",link : "/"}
    ];
    let [open, setOpen]=useState(false);
  return (
    <div className='shadow-md w-[95%] fixed top-2 left-4 md:left-8 z-10 rounded-full'>
        <div className="md:flex items-center justify-between bg-slate-100 py-4 md:px-10 px-7 rounded-full">
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins text-gray-800]'>
                <span className='text-3xl text-indigo-600 mr-4 pt-2'>
                    <IonIcon name="logo-microsoft"></IonIcon>
                </span>
                TESTING
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' >
                <IonIcon name={open ? 'close':'menu'}></IonIcon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:px-0 px-[200px] transition-all duration-500 ease-in ${open ? 'top-15 opacity-100':'top-[-485px]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-center'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                }
                <Button>
                    Register
                </Button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar