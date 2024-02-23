import { Link } from '@inertiajs/react'
import IonIcon from '@reacticons/ionicons'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import Logo from '/public/Images/UfestLogo.png'

function Navbar() {
    let Links =[
        {name:"HOME", link: "/home"},
        {name:"FAQ",link :"/faq"} ,
        {name:"DIVISION",link : "/division"},
        {name:"CONTACT",link : "#"}
    ];
    let [open, setOpen]=useState(false);
  return (
    <div className='shadow-md w-[95%] fixed top-2 left-3 md:left-8 z-10 rounded-full'>
        <div className="md:flex items-center justify-between bg-slate-100 md:bg-opacity-50 py-4 md:px-10 px-7 rounded-full">
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins text-gray-800] font-custom'>
                <span className='w-[50px] mr-5 pt-auto'>
                    <img src={Logo} alt="ufest logo" />
                </span>
                UMN FESTIVAL
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' >
                <IonIcon name={open ? 'close':'menu'}></IonIcon>
            </div>
            <ul className={`rounded-3xl md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-100 md:bg-opacity-0 md:z-auto z-[-1] left-0 w-full md:w-auto md:px-0 px-[200px] transition-all duration-500 ease-in ${open ? 'top-[80px] opacity-100':'top-[-485px]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-center'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 font-custom'>{link.name}</a>
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