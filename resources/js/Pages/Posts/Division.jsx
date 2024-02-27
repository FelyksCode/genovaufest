import Alert from "@/Components/Alert/Alert";
import Spinner from "@/Components/Home/Spinner";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";
import { Fade } from "react-reveal";
Alert;
Navbar;

function Division() {
    return (
        <>
            <div>
                <head title="UMN FESTIVAL" />
                <header>
                    <Navbar />
                </header>
                <section className="snap-y overflow-scroll focus:scroll-auto">
                    <Alert></Alert>
                    <Fade>
                        <Spinner></Spinner>
                    </Fade>
                </section>
            </div>
        </>
    );
}

export default Division;
