import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Tujuan from "@/Components/Tujuan/Tujuan";
import Home from "@/Components/Home/HomePart1";
import HomePart2 from "@/Components/Home/HomePart2";
import NewsEvent from "@/Components/Home/NewsEvent";
import Alert from "@/Components/Alert/Alert";
import Intro from "@/Components/Home/Intro";
import { Fade } from "react-reveal";
import DivisionSpinner from "@/Components/Home/DivisionSpinner";

export default function Homepage() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Check if intro has been shown before
        const introShownBefore = localStorage.getItem("introShown");
        if (introShownBefore) {
            // If intro has been shown before, hide it
            setShowIntro(false);
        }
    }, []);

    const handleIntroEnd = () => {
        // Set a flag in localStorage indicating that intro has been shown
        localStorage.setItem("introShown", "true");
        setShowIntro(false);
    };

    return (
        <>
            {showIntro ? (
                <Intro onIntroEnd={handleIntroEnd} />
            ) : (
                <div>
                    <head title="UMN FESTIVAL" />
                    <header>
                        <Navbar />
                    </header>
                    <section className="snap-y overflow-hidden focus:scroll-auto">
                        <Alert></Alert>
                        <Fade>
                            <Tujuan></Tujuan>
                        </Fade>
                    </section>
                    <section className="snap-y snap-mandatory overflow-hidden">
                        <Fade>
                            <DivisionSpinner></DivisionSpinner>
                            <NewsEvent></NewsEvent>
                            <Footer></Footer>
                        </Fade>
                    </section>
                </div>
            )}
        </>
    );
}
