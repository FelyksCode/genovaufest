import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Tujuan from "@/Components/Tujuan/Tujuan";
import Home from "@/Components/Home/HomePart1";
import HomePart2 from "@/Components/Home/HomePart2";
import NewsEvent from "@/Components/Home/NewsEvent";
import Alert from "@/Components/Alert/Alert";
import Intro from "@/Components/Home/Intro";
Intro
Alert
NewsEvent
HomePart2
Home

export default function Homepage() {
    const [showIntro, setShowIntro] = useState(true);

    const handleIntroEnd = () => {
        setShowIntro(false);
    };
    return (
        <>  
            {showIntro ? (
                <Intro onIntroEnd={handleIntroEnd} />
            ) : (
                <div>
                    <head title="UMN FESTIVAL"/>
                    <header>
                        <Navbar />
                    </header>
                    <section className='overflow-hidden'>
                        <Alert></Alert>
                        <Tujuan></Tujuan>
                        <Home></Home>
                        <NewsEvent></NewsEvent>
                        <HomePart2></HomePart2>
                        <Footer></Footer>
                    </section>    
                </div> 
            )}
        </>
    );
}
