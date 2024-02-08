import React from "react";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/homepage/Carousel";
import Footer from "@/Components/Footer";

export default function Homepage() {
    return (
        <div className="flex-row">
            <Head title="HomePage" />
            #ini navbar
            <div>
                <Carousel />
            </div>
            <Footer />
        </div>
    );
}
