import Alert from "@/Components/Alert/Alert";
import Hero from "@/Components/Home/hero";
import Navbar from "@/Components/Navbar/Navbar";
import Divisihome from "@/Components/Home/Divisihome";
import React from "react";
import { Fade } from "react-reveal";

function Layout() {
    return (
        <>
            <div className="overflow-hidden">
                <head title="UMN FESTIVAL" />
                <header>
                    <Navbar />
                </header>
                <section>
                    <Alert></Alert>
                    <Fade>
                        <Hero></Hero>
                    </Fade>
                </section>
                <section>
                    <Fade>
                        <Divisihome> </Divisihome>
                    </Fade>
                </section>
            </div>
        </>
    );
}

export default Layout;
