import React from "react";

//Asset
import img1 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Acara.png";
import img2 from "../../../../public/Images/Carousels/LogoDivisi_Baru/BPH.png";
import img3 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Dekorasi.png";
import img4 from "../../../../public/Images/Carousels/LogoDivisi_Baru/Dokumentasi.png";
import img5 from "../../../../public/Images/Carousels/LogoDivisi_Baru/FreshMoney.png";
import CloudVid from "../../../../public/Images/Bgimage/cloud.mp4";
import "/resources/css/app.css";

function MapsReact() {
    return (
        <>
            <div className="relative">
                <video
                    autoPlay
                    muted
                    loop
                    src={CloudVid}
                    className="absolute top-0 left-0 z-5 w-full h-full object-cover blend-overlay"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                ></video>
                <div className="bg-maps bg-cover h-[140vh] w-full bg-center z-5">
                    <div className="flex justify-center">
                        <div
                            className="tooltip tooltip-bottom mt-[210px] mr-[130px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                            data-tip="UNIFY"
                        >
                            <img src={img1} />
                        </div>
                        <div
                            className="tooltip tooltip-bottom mt-[280px] mr-[120px] ml-[100px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                            data-tip="U-CARE"
                        >
                            <img src={img2} />
                        </div>
                    </div>
                    <div className="flex">
                        <div
                            className="tooltip tooltip-bottom mt-[140px] ml-[230px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                            data-tip="U-CARE"
                        >
                            <img src={img3} />
                        </div>
                        <div
                            className="tooltip tooltip-bottom mt-[120px] ml-[600px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                            data-tip="UNVEILING"
                        >
                            <img src={img4} />
                        </div>
                    </div>
                    <div className="flex">
                        <div
                            className="tooltip tooltip-bottom mt-[120px] ml-[345px] transition-all duration-200 ease-in-out hover:w-[120px] w-[100px]"
                            data-tip="UNVEILING"
                        >
                            <img src={img5} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MapsReact;
