import Accordion from "@/Components/FaQ/Accordion";
import CoverFaq from "@/Components/FaQ/CoverFaq";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

import { Fade } from "react-reveal";

function FAQ() {
    return (
        <>
            <Head title="FAQ" />
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
