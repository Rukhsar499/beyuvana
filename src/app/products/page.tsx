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
            <section className="product about-us mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="pro-img">
                                <Image src="/assets/img/collagenproduct.png" alt="Money back" width={350} height={350} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="pro-txt">
                                <h2>BEYUVANA™ Collagen Builder— India’s  1st Complete Plant-Based Premium</h2>
                                <p className="agihg">Aging is Natural — Radiance is a Choice</p>
                                <div className="star">
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/half-star.png" alt="Money back" width={20} height={20} className="img-fluid me-2" /></span>
                                    <span>60 reviews</span>
                                </div>
                                <p>
                                    Crafted with 21 synergistic, clinically studied botanicals that work from within. Each precision-dosed sachet supports skin elasticity, deep hydration, and youthful glow. Stimulates natural collagen with Amla, Bamboo Silica, L-Lysine, and Hyaluronic Acid.
                                </p>
                                <h3 className="five">₹5,999</h3>
                                <del>₹10,000</del> <span className="forty">40% Off</span>
                                <div className="d-flex mt-3">
                                    <button type="button" className="bag"><Image src="/assets/img/shopping-bag.png" alt="" width={20} height={20} className="me-2" />Shop Now</button>
                                    <button type="button" className="cart"><Image src="/assets/img/shopping-cart.png" alt="" width={20} height={20} className="me-2" />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products  mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="pros-img">
                                <Image src="/assets/img/product-glow-essence.png" alt="Money back" width={320} height={320} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="pro-txt">
                                <h2>BEYUVANA™ Advanced Glow-Nourishing Formula for Radiant,
                                    Even-Toned Skin</h2>

                                <div className="star">
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/star1.png" alt="Money back" width={20} height={20} className="img-fluid" /></span>
                                    <span> <Image src="/assets/img/half-star.png" alt="Money back" width={20} height={20} className="img-fluid me-2" /></span>
                                    <span>60 reviews</span>
                                </div>
                                <p>
                                    Glow Essence is an advanced, 100% vegetarian, skin-nourishing formula enriched with 18 synergistic plant-based actives, designed to unlock visible clarity and radiance from within. Infused with 4X Liposomal
                                </p>
                                <p>
                                    Glutathione and clinically studied Vitamin C, it works deep at the cellular level to visibly reduce dark spots,
                                    pigmentation, and dullness — revealing a brighter, more even-toned complexion.
                                </p>
                                <h3 className="five">₹5,999</h3>
                                <del>₹10,000</del> <span className="forty">40% Off</span>
                                <div className="d-flex mt-3">
                                    <button type="button" className="bag"><Image src="/assets/img/shopping-bag.png" alt="" width={20} height={20} className="me-2" />Shop Now</button>
                                    <button type="button" className="cart"><Image src="/assets/img/shopping-cart.png" alt="" width={20} height={20} className="me-2" />Add to cart</button>
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