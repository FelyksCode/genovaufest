import React from "react";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/homepage/Carousel";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/homepage/Hero";

import "./Style.css";

export default function Homepage() {
    return (
        <div className="flex-row badan">
            <Head title="HomePage" />
            <Navbar />

            <Hero />

            <Footer />
        </div>
    );
}
