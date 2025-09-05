"use client";

import Image from "next/image";

import styles from "./page.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import MarqueeBar from "../components/MarqueeBar";
import ProductGallery from "../collagen/ProductGallery";



export default function collagen() {

    return (
        <>
            <Header />
            <MarqueeBar />
            <section className="about-us mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <ProductGallery />
                        </div>
                        <div className="col-lg-5 col-md-4 col-12">
                            <div className="coll-deta">
                                <h2 className="it">BEYUVANA™ Premium Collagen Builder—
                                    Complete Anti-Aging Solution</h2>
                                <p className="agihg">Aging is Natural — Radiance is a Choice</p>
                                <p>
                                    Crafted with 21 synergistic, clinically studied botanicals that work from within.
                                    Each precision-dosed sachet supports skin elasticity, deep hydration, and youthful glow.
                                    Stimulates natural collagen with Amla, Bamboo Silica, L-Lysine, and Hyaluronic Acid.
                                </p>
                                <div className="d-flex">
                                    <Image
                                                  src="/assets/img/certificate 1.png"
                                                  alt="Product"
                                                  width={40}
                                                  height={40}
                                                  className="img-fluid me-2"
                                                />
                                  <p>View Lab Certificates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <Footer />
            <StickyFooter />
        </>
    );
}