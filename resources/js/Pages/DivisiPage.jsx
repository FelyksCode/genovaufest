import React from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/footer/Footer";
import CarouselDivisi from "@/Components/divisipage/CarouselDivisi";
import Example from "@/Components/divisipage/VerticalCarousel/Example";
import Navbar from "@/Components/Navbar/Navbar";

import "./Style.css";
import ReactDOM from "react-dom";

export default function DivisiPage() {
    return (
        <div className="flex-row badan">
            <Head title="Divisi Page" />
            <Navbar />
            <div>
                <Example />
                {/* <CarouselDivisi /> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
}
