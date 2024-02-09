import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import HomeBgNew from "../../Assets/HomeBgNew.png";
let slides = [
    {
        key: 1,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Atlas-a1cf2a94.webp",
                namaDivisi: "Atlas",
                penjelasanDivisi:
                    "“goddess of endurance, strength & astronomy”“celestial sphere” “Atlas (Ἄτλας) merupakan makhluk laut yang menopang pilar-pilar yang memisahkan langit dan bumi.” BPH bertanggung jawab untuk mendampingi, merangkul, sekaligus memastikan agar kinerja dari seluruh divisi UMN Festival 2023 dapat berjalan dengan baik. Hal tersebut diumpamakan sebagai sosok Atlas yang tengah mengangkat Sphere di pundaknya.",
            },
        ],
    },
    {
        key: 2,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Metis-de566228.webp",
                namaDivisi: "Nama",
                penjelasanDivisi: "Penjelasan",
            },
        ],
    },
    {
        key: 3,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Antheia-5743d4eb.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 4,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Mnemosyne-324cdeb3.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 5,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Tyche-73ecf132.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 6,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Themis-7bc8f39d.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 7,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Demeter-9b64022d.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 8,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Nike-6ee8d3a2.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 9,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Hermes-208a91e8.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 10,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Iris-4c1328b5.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 11,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Plutus-7af29493.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 12,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Muses-459e02fe.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
    {
        key: 13,
        content: [
            {
                contentUrl:
                    "https://www.umnfestival.com/assets/Coeus-40154209.webp",
                namaDivisi: "",
                penjelasanDivisi: "",
            },
        ],
    },
];

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle,
    };

    // onChangeInput = e => {
    //   this.setState({
    //     [e.target.name]: parseInt(e.target.value, 10) || 0
    //   });
    // };
    render() {
        return (
            <div
                style={{
                    position: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                    margin: "0 auto",
                    background: `url(${HomeBgNew})`,
                    backgroundSize: "cover", // Example to cover the entire div
                    backgroundPosition: "center", // Center the background image
                }}
            >
                <VerticalCarousel
                    slides={slides}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
            </div>
        );
    }
}
