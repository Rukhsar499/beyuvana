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
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <ProductGallery />  
                    </div>
                </div>
            </section>





            <Footer />
            <StickyFooter />
        </>
    );
}