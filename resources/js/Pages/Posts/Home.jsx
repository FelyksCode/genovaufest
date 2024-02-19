import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Tujuan from "@/Components/Tujuan/Tujuan";
import Home from "@/Components/Home/HomePart1";
import HomePart2 from "@/Components/Home/HomePart2";
HomePart2
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
                <HomePart2></HomePart2>
                <Footer></Footer>
            </section>
        </>
    );
}
