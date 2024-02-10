import React from "react";
import Logo from "../Assets/LogoUfes.png";
import "./NavbarStyle.css";

export default function Navbar() {
    // Function to determine if a navigation item should be active
    const isActive = (href) => {
        return window.location.pathname === href ? "active" : "";
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl navbarhover " href="/">
                    <img src={Logo} alt="Logo" className="logonavbar w-12 " />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className={`${isActive("/")} navbarhover`}>
                        <a href="/">Home</a>
                    </li>
                    <li className={`${isActive("/divisi")} navbarhover`}>
                        <a href="/divisi">Division</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
