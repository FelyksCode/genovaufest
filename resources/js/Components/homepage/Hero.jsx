import "./HeroStyle.css";
import BgHero from "../Assets/Homebg.webp";

export default function Hero() {
    return (
        <div className="hero min-h-screen pembungkushero">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-9/12 sm:w-11/12">
                    <h1 className="mt-20 md:mt-10 mb-5 text-5xl font-bold">
                        Are You Ready Legions?
                    </h1>
                    <p className="mb-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <button className="btn btn-primary">Daftar Sekarang</button>
                </div>
            </div>
        </div>
    );
}
