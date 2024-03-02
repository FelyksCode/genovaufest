import React from 'react'
import {
    CircleMenu,
    CircleMenuItem,
    TooltipPlacement,
  } from "react-circular-menu";
import img1 from "/public/Images/Carousels/Logo_Divisi/ALBA - TICKETING.png";
import img2 from "/public/Images/Carousels/Logo_Divisi/ARDEA - PERLENGKAPAN.png";
import img3 from "/public/Images/Carousels/Logo_Divisi/CATANIA - PUBLIKASI.png";
import img4 from "/public/Images/Carousels/Logo_Divisi/FLORENCE - DEKORASI.png";
import img5 from '/public/Images/Carousels/Logo_Divisi/GENOVA - WEBSITE.png';
import img6 from '/public/Images/Carousels/Logo_Divisi/LAZIO - KONSUMSI.png';
import img7 from '/public/Images/Carousels/Logo_Divisi/LEECE - MEDIA PARTNER.png';
import img8 from '/public/Images/Carousels/Logo_Divisi/MILAN - LOMBA.png';
import img9 from '/public/Images/Carousels/Logo_Divisi/NAPOLI - DOKUMENTASI.png';
import img10 from '/public/Images/Carousels/Logo_Divisi/PISA - VISUAL.png';
import img11 from '/public/Images/Carousels/Logo_Divisi/ROME - BPH.png';
import img12 from '/public/Images/Carousels/Logo_Divisi/TUCANY - ACARA.png';
import img13 from '/public/Images/Carousels/Logo_Divisi/TURIN SPONSOR.png';
import img14 from '/public/Images/Carousels/Logo_Divisi/VENEZIA - FRESH MONEY.png';
import img15 from '/public/Images/Carousels/Logo_Divisi/VERONA - KEAMANAN.png';

function DivisionSpinner() {
    const Divisions = [
        {name: img1, text: 'Text1'},
        {name: img2, text: 'Text2'},
        {name: img3, text: 'Text3'},
        {name: img4, text: 'Text4'},
        {name: img5, text: 'Text4'},
        {name: img6, text: 'Text4'},
        {name: img7, text: 'Text4'},
        {name: img8, text: 'Text4'},
        {name: img9, text: 'Text4'},
        {name: img10, text: 'Text4'},
        {name: img11, text: 'Text4'},
        {name: img12, text: 'Text4'},
        {name: img13, text: 'Text4'},
        {name: img14, text: 'Text4'},
        {name: img15, text: 'Text4'},
    ]
    return (
    <>
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gradient-to-b from-black from-1% to-vintage to-30%">
            <CircleMenu
                startAngle={-90}
                rotationAngle={360}
                itemSize={3.5}
                radius={13}
                rotationAngleInclusive={false}
                className=''>
                    {Divisions.map((item, index) => (
                        <CircleMenuItem
                            key={index}
                            value={item.text}
                            tooltip={item.text}
                            tooltipPlacement={TooltipPlacement.Right}
                            onClick={() => console.log(`You clicked ${item.text}`)}>
                                <img src={item.name} alt="" />
                        </CircleMenuItem>
                        ))}
            </CircleMenu>
        </div>
    </>
  )
}

export default DivisionSpinner