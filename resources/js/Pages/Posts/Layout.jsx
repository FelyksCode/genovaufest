import Alert from "@/Components/Alert/Alert";
// import Hero from "@/Components/Home/hero";
import Tujuan from "@/Components/Tujuan/Tujuan";
import Navbar from "@/Components/Navbar/Navbar";
import Divisihome from "@/Components/Home/Divisihome";
import Rangkaian from "@/Components/Home/Rangkaian";
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
                        <Tujuan></Tujuan>
                    </Fade>
                </section>
                <section>
                    <Fade>
                        <Divisihome> </Divisihome>
                    </Fade>
                </section>
                <section>
                    <Fade>
                        <Rangkaian> </Rangkaian>
                    </Fade>
                </section>
            </div>
        </>
    );
}

export default Layout;
