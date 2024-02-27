import Accordion from "@/Components/FaQ/Accordion";
import CoverFaq from "@/Components/FaQ/CoverFaq";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

import { Fade } from "react-reveal";

function FAQ() {
    return (
        <>
            <head>
                <title>UMNFestival</title>
            </head>
            <header>
                <Navbar />
            </header>
            <section className="scroll-smooth">
                <Fade>
                    {/* <CoverFaq></CoverFaq> */}
                    <Accordion></Accordion>
                </Fade>
            </section>
        </>
    );
}

export default FAQ;
