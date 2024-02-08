import React from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import CarouselDivisi from "@/Components/divisipage/CarouselDivisi";
import "./Style.css";

export default function DivisiPage() {
    return (
        <div className="flex-row badan">
            <Head title="Divisi Page" />
            <div>
                <CarouselDivisi />
            </div>
            <Footer />
        </div>
    );
}
