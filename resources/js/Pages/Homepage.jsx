import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Tujuan from "@/Components/Tujuan/Tujuan";

export default function Homepage() {
    return (
        <div className="bg-neutral-100 text-base-100">
            <Head title="HomePage" />
            <Navbar />
            <Tujuan />
            <Footer />
        </div>
    );
}
