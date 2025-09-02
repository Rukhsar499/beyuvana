"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import MarqueeBar from "../components/MarqueeBar";
import Link from 'next/link';




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
                                <h2  style={{ color: "#057A37" }}>Contact Us</h2>
                                <p>
                                    At Beyuvana, we are committed to providing high-quality, plant-based collagen
                                    products that support your health and beauty goals. At Beyuvana, we are committed to providing high-quality, plant-based collagen
                                </p>
                                <p>
                                    At Beyuvana, we are committed to providing high-quality, plant-based collagen
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="get-text">
                                            <h5>Get in touch with us:</h5>
                                            <div className="d-flex">
                                                <Image src="/assets/img/location1.png" alt="Location" width={20} height={20} className="me-2 imhg" />
                                                <p id="btd">#Kolkata, India</p>
                                            </div>
                                            <div className="d-flex">
                                                <Image src="/assets/img/call-calling1.png" alt="Call" width={20} height={20} className="me-2 imhg" />
                                                <Link href="tel:+917003810162" className="rishra">
                                                    <p id="btd">+917003810162</p>
                                                </Link>
                                            </div>
                                            <div className="d-flex">
                                                <Image src="/assets/img/sms-notification1.png" alt="Email" width={20} height={20} className="me-2 imhg" />
                                                <Link href="mailto:info@beyuvana.com" className="rishra">
                                                    <p id="btd" >info@beyuvana.com</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="gets-text">
                                            <h5>For business queries:</h5>
                                            <p>
                                                Monday - Friday <br />
                                                10am - 7pm
                                            </p>
                                            <p>
                                                Saturday & sunday closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-5 col-md-5 col-12">

                        </div>
                    </div>
                </div>
            </section>





            <Footer />
            <StickyFooter />
        </>
    );
}