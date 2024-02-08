import React from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import CarouselDivisi from "@/Components/divisipage/CarouselDivisi";
export default function DivisiPage() {
    return (
        <div className="flex-row">
            <Head title="Divisi Page" />
            <div>
                <CarouselDivisi />
            </div>
            <Footer />
        </div>
    );
}
