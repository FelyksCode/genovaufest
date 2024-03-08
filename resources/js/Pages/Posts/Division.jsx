import Alert from "@/Components/Alert/Alert";
import Spinner from "@/Components/Home/Spinner";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";
import { Fade } from "react-reveal";

function Division() {
    return (
        <>
            <div>
                <Head title="Divisi" />
                <header>
                    <Navbar />
                </header>
                <section className="snap-y overflow-hidden focus:scroll-auto">
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
