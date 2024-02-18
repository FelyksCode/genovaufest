import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Tujuan from "@/Components/Tujuan/Tujuan";
import Home from "@/Components/Home/HomePart1";
Home

export default function Homepage() {
    return (
        <>
            <head title="UMN FESTIVAL"/>
            <header>
                <Navbar />
            </header>
            <section className='overflow-hidden'>
                <Tujuan></Tujuan>
                <Home></Home>
                <Footer></Footer>
            </section>
        </>
    );
}
