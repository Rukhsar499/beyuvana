"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import MarqueeBar from "../components/MarqueeBar";




export default function Home() {

    return (
        <>
            <Header />
            <MarqueeBar />
            <section className="about-us mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="con-text">
                                <h2>Contact Us</h2>
                                <p>
                                    At Beyuvana, we are committed to providing high-quality, plant-based collagen
                                    products that support your health and beauty goals. At Beyuvana, we are committed to providing high-quality, plant-based collagen
                                </p>
                                <p>
                                    At Beyuvana, we are committed to providing high-quality, plant-based collagen
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-7 col-md-7 col-12">

                        </div>
                    </div>
                </div>
            </section>





            <Footer />
            <StickyFooter />
        </>
    );
}