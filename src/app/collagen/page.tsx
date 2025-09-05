"use client";

import Image from "next/image";

import styles from "./page.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import MarqueeBar from "../components/MarqueeBar";
import ProductGallery from "../collagen/ProductGallery";
import AccordionItem from "../collagen/AccordionItem";
import Youth from "../collagen/Youth";



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
                                <AccordionItem />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="s_box">
                                <div className="d-flex">
                                    <h5 className="selst">Select Pack</h5>
                                    <div className="rev">
                                        <Image src="/assets/img/star1.png" alt="Money back" width={15} height={15} className="img-fluid" />
                                        <Image src="/assets/img/star1.png" alt="Money back" width={15} height={15} className="img-fluid" />
                                        <Image src="/assets/img/star1.png" alt="Money back" width={15} height={15} className="img-fluid" />
                                        <Image src="/assets/img/star1.png" alt="Money back" width={15} height={15} className="img-fluid" />
                                        <Image src="/assets/img/half-star.png" alt="Money back" width={15} height={15} className="img-fluid me-2" />
                                        <span className="six">60 reviews</span>
                                    </div>
                                </div>
                                <div className="p-pac">
                                    <div className="pack">
                                        <div className="d-flex p-p">
                                            <div>
                                                <h4>1 PACK</h4>
                                                <p>15 Sachets</p>
                                            </div>
                                            <div>
                                                <h3 className="fives">₹1,199</h3>
                                                <del>₹1,499</del> <span className="forty">20% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white text-center gfi">
                                        <p className="mb-0">
                                            See first glow in 2 weeks
                                        </p>
                                    </div>
                                </div>
                                <div className="p-pac">
                                    <div className="pack">
                                        <div className="d-flex p-p">
                                            <div>
                                                <h4>2 PACK</h4>
                                                <p>30 Sachets</p>
                                            </div>
                                            <div>
                                                <h3 className="fives">₹2,029</h3>
                                                <del>₹2,899</del> <span className="forty">30% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white text-center gfi">
                                        <p className="mb-0">
                                            Best for visible results in 30 days
                                        </p>
                                    </div>
                                </div>
                                <div className="p-pac">
                                    <div className="pack">
                                        <div className="d-flex p-p">
                                            <div>
                                                <h4>4 PACK</h4>
                                                <p>60 Sachets</p>
                                            </div>
                                            <div>
                                                <h3 className="fives">₹3,519</h3>
                                                <del>₹5,499</del> <span className="forty">36% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white text-center gfi">
                                        <p className="mb-0">
                                            Transform your skin in 60 days
                                        </p>
                                    </div>
                                </div>
                                <div className="red-box d-flex">
                                    <Image src="/assets/img/sale.png" alt="" width={30} height={30} className="me-2" />
                                    <p className="get">
                                        Get Extra 5% off on Prepaid orders
                                    </p>

                                </div>
                                <div className="d-flex mt-3">
                                    <button type="button" className="bag bags"><Image src="/assets/img/shopping-bag.png" alt="" width={15} height={15} className="me-2" />Shop Now</button>
                                    <button type="button" className="cart carts"><Image src="/assets/img/shopping-cart.png" alt="" width={15} height={15} className="me-2" />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            <section className="boost mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box bos-br">
                                <Image src="/assets/img/c1.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Boosts Skin Elasticity <br />
                                    by up to 53%
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box bos-br">
                                <Image src="/assets/img/c2.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Fast Absorption with <br />
                                    Bioavailable Plant Actives
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box bos-br">
                                <Image src="/assets/img/c3.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Reduces Visible Wrinkles & <br />
                                    Fine Lines by 30%
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box">
                                <Image src="/assets/img/c4.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Improves Skin Hydration & <br />
                                    Moisture Retention by 45%
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box bos-br">
                                <Image src="/assets/img/pi.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Promotes Hair Strength <br />
                                    & Growth Naturally
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box bos-br">
                                <Image src="/assets/img/c5.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Fades Pigmentation <br />
                                    & Brightens Skin Tone
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box bos-br">
                                <Image src="/assets/img/c6.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Combats Environmental <br />
                                    Stress & Toxins
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="bosst-box ">
                                <Image src="/assets/img/c7.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                                <p className="mb-0 mt-2">
                                    Supports Clearer Skin Through <br />
                                    Gut & Hormonal Balance
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            <section className="greb mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="greb-text">
                                <p className="agihg">10 ACTIONS. 1 SMART SACHET</p>
                                <h2 className="by">A Premium Collagen Builder Powered by 21
                                    Synergistic Plant-Based Actives</h2>
                            </div>
                        </div>
                         <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="greb-img">
                                <Image src="/assets/img/womens.png" alt="Money back" width={400} height={400} className="img-fluid me-3" />
                            </div>
                        </div>
                    </div>
                    <hr className="gil" />
                   <Youth /> 
                </div>
            </section>


            <Footer />
            <StickyFooter />
        </>
    );
}