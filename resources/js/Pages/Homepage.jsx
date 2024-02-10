import React from "react";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/homepage/Carousel";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

export default function Homepage() {
    return (
        <div className="flex-row">
            <Head title="HomePage" />
            <Navbar />
            <div>
                <Carousel />
                <div className="h-96">tes</div>
                <div className="h-96">tes</div>
            </div>
            <Footer />
        </div>
    );
}
