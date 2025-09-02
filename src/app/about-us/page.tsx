"use client";

import Image from "next/image";

import styles from "./page.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import MarqueeBar from "../components/MarqueeBar";
import Different from "../about-us/Different";



export default function Home() {
  
    return (
        <>
            <Header />
            <MarqueeBar />
            <section className="about-us mb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-7 col-12">
                            <h2>Welcome to BEYUVANA</h2>
                            <h3 id="plant"><i>Plant-Based Nutrition. Honest Wellness. Real Results.</i></h3>
                            <p>
                                Our philosophy is simple: clean, transparent, and
                                effective nutrition that supports your skin, gut, and overallbalance—without shortcuts, unnecessary fillers, or hidden additives.
                                Unlike ordinary capsules that typically carry only 600–800 mg of actives, every BEYUVANA™ sachet delivers a full 8,000 mg of carefully
                                selected nutrients—that&apos;s 10X more nourishment in a form your body can truly absorb.
                            </p>
                            <p>
                                We bring together the wisdom of ancient botanicals and the precision of modern nutrition, ensuring each blend is safe,
                                complete, and effective. While serums only work on the surface and capsules often provide limited nutrition, BEYUVANA™ works from within—supporting collagen, hydration, gut balance, and a radiant glow that lasts.
                            </p>
                            <p>
                                With a strong focus on purity, quality, and honesty, BEYUVANA™ is not just another
                                supplement—it&apos;s a commitment to long-term vitality, timeless beauty, and natural well-
                                being.
                            </p>
                            <p><b>BEYUVANA™— Wellness, Naturally.</b></p>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="abt-img">
                                <Image src="/assets/img/beyuna.webp" alt="Money back" width={350} height={350} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bey mb">
                <div className="container">
                    <div className="text-center">
                        <h2>What is BEYUVANA?</h2>
                        <p id="yuna" style={{ color: "#fff" }}><span style={{ color: "#DFC362" }}>BEYUVANA</span> = Be + Yuvana = &quot;Be Youthful. Be Alive. Be You.&quot;</p>
                        <p>
                            We are a plant-based nutrition brand rooted in Indian heritage and powered by science.
                            But we’re more than just anti-aging— We support your daily health, gut balance, glowing skin, energy, and inner wellness.
                        </p>
                        <p>
                            We believe true beauty and wellness begin inside your body—not just on your skin.
                            And we believe that clean, high-quality nutrition should be accessible to everyone— Not just the elite.
                        </p>
                    </div>
                </div>
            </section>
            <Different />
            <section className="why-sec mb">
                <div className="container">
                    <div className="text-center">
                        <h2 style={{ color: "#fff" }}>Why We Exist?</h2>
                        <p style={{ color: "#fff" }}>We created <span style={{ color: "#DFC362" }}>BEYUVANA</span> for people like you—</p>
                    </div>
                    <div className="why-box">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="d-flex why-sec1">
                                    <h3 className="one">01</h3>
                                    <p style={{ color: "#fff" }}>People tired of chemical shortcuts
                                        and expensive pills.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="d-flex why-sec1">
                                    <h3 className="one">02</h3>
                                    <p style={{ color: "#fff" }}>People who want to feel alive,
                                        confident, strong, and naturally well.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="d-flex why-sec1">
                                    <h3 className="one">03</h3>
                                    <p style={{ color: "#fff" }}>People who believe in real
                                        nourishment, not trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p style={{ color: "#fff" }}>
                            We understand your struggle.
                        </p>
                        <p style={{ color: "#fff" }}>
                            We’ve lived it.care.
                        </p>
                        <p style={{ color: "#fff" }}>
                            That’s why every BEYUVANA product is made with heart, tested with honesty, and priced with
                        </p>
                        <p style={{ color: "#fff" }}>
                            We don’t want to just sell wellness—we want to help you live it, feel it, and love it.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mission mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="mis-box">
                                <Image src="/assets/img/misison.png" alt="Money back" width={350} height={350} className="img-fluid" />
                                <h3 className="m-txt">Mission</h3>
                                <p>
                                    To empower every household with clean, affordable, plant-based nutrition—Helping people glow naturally, live energetically, and age gracefully, without ever compromising on quality or values.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="miss-box">
                                <Image src="/assets/img/vision.png" alt="Money back" width={350} height={350} className="img-fluid" />
                                <h3 className="m-txt">Vision</h3>
                                <p>
                                   To empower every household with clean, affordable, plant-based nutrition—Helping people glow naturally, live energetically, and age gracefully, without ever compromising on quality or values.
                                </p>
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