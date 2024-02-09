import React from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import CarouselDivisi from "@/Components/divisipage/CarouselDivisi";
import Example from "@/Components/divisipage/VerticalCarousel/Example";
import "./Style.css";
import ReactDOM from "react-dom";

export default function DivisiPage() {
    return (
        <div className="flex-row badan">
            <Head title="Divisi Page" />
            <div>
                <Example />
                {/* <CarouselDivisi /> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
}
