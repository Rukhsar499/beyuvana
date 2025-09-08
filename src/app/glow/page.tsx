"use client";

import Image from "next/image";

import styles from "./page.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import MarqueeBar from "../components/MarqueeBar";
import ProductGallery from "../glow/ProductGallery";
import AccordionItem from "../glow/AccordionItem";
import Youth from "../glow/Youth";
import ColFaq from "../glow/ColFaq";
import PreSlider from "../glow/PreSlider";
import Reviews from "../glow/Reviews";
import Aging from "../glow/Aging";
import Pigment from "../glow/Pigment";
import Made from "../glow/Made";
import HealthTabs from "../glow/HealthTabs";



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
                                <h2 className="it">BEYUVANA™ Advanced Glow-Nourishing
                                    Formula for Radiant, Even-Toned Skin</h2>
                                <p className="agihg">Aging is Natural — Radiance is a Choice</p>
                                <p>
                                    Glow Essence is an advanced, 100% vegetarian, skin-nourishing formula enriched with 18 synergistic plant-
                                    based actives, designed to unlock visible clarity and radiance from within.

                                    Infused with 4X Liposomal Glutathione and clinically studied Vitamin C, it
                                </p>
                                <div className="d-flex">
                                    <Image
                                        src="/assets/img/certificate 1.png"
                                        alt="Product"
                                        width={40}
                                        height={40}
                                        className="img-fluid me-2"
                                    />
                                    <p className="mb-0 mt-2">View Lab Certificates</p>
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
                    <hr className="ptoi" />
                </div>
            </section>

            <section className="boost mb">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-4 col-md-4 col-6">
                            <div className="d-flex bhg">
                                <Image src="/assets/img/gl1.png" alt="Money back" width={70} height={70} className="img-fluid me-3" />
                                <p className="mb-0 mt-2 bgv">
                                    Glow & <br />
                                    Brightening
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <div className="d-flex bhg">
                                <Image src="/assets/img/gl2.png" alt="Money back" width={70} height={70} className="img-fluid me-3" />
                                <p className="mb-0 mt-2 bgv">
                                    Dark Spots & <br />
                                    Pigmentation
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <div className="d-flex bhgs">
                                <Image src="/assets/img/gl3.png" alt="Money back" width={70} height={70} className="img-fluid me-3" />
                                <p className="mb-0 mt-2 bgv">
                                    Acne & Clear <br />
                                    Skin
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <div className="d-flex bhg">
                                <Image src="/assets/img/gl4.png" alt="Money back" width={70} height={70} className="img-fluid me-3" />
                                <p className="mb-0 mt-2 bgv">
                                    Skin <br />
                                    Hydration
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <div className="d-flex bhg">
                                <Image src="/assets/img/gl5.png" alt="Money back" width={70} height={70} className="img-fluid me-3" />
                                <p className="mb-0 mt-2 bgv">
                                    Gut <br />
                                    Health
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                            <div className="d-flex bhgs">
                                <Image src="/assets/img/gl6.png" alt="Money back" width={70} height={70} className="img-fluid me-3" />
                                <p className="mb-0 mt-2 bgv">
                                    Stress <br />
                                    Balance
                                </p>
                            </div>
                        </div>


                    </div>
                    <hr className="ptoi" />
                </div>
            </section>

            <section className="grebs mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="greb-text">
                                <p className="agihgs">10 Transformative Actions. 1 Smart Sachet</p>
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
            <section className="premi mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="pr-img">
                                <Image src="/assets/img/gl7.png" alt="Money back" width={500} height={500} className="img-fluid me-3" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <div className="pt-txt">
                                <h2>Experience Visible Transformation in 10 Weeks</h2>
                                <p>Our clinical-style transformation chart reflects the powerful effects of BEYUVANA™ Glow Essence.</p>
                                <p>
                                    With consistent use, you’ll notice real, measurable improvements—designed by nature, proven by
                                    science.Within just 10 weeks
                                </p>
                                <p>
                                    Results may vary by individual. Based on ingredient research and regular
                                    usage.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="resr mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="resr-text">
                                <h2>Powered by Research-Backed Ingredients in BEYUVANA™ PREMIUM COLLAGEN BUILDER</h2>
                                <p>Improvement in just 10 weeks</p>
                                <div className="row g-3">
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <div className="res-box rest">
                                            <h4 className="sevty pert">75%</h4>
                                            <p>Increase in <br />
                                                Skin Hydration</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <div className="res-box rest">
                                            <h4 className="sevty pert">70%</h4>
                                            <p>Increase in <br />
                                                Skin Glow</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <div className="res-box rest">
                                            <h4 className="sevty pert">68%</h4>
                                            <p>Increase in <br />
                                                Skin Elasticity</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <div className="res-box rest">
                                            <h4 className="sevty pert">60%</h4>
                                            <p>Reduce in <br />
                                                Pigmentation Reduction </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1"></div>
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="prot-img">
                                <Image src="/assets/img/envato.png" alt="Money back" width={500} height={500} className="img-fluid me-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PreSlider />
            <section className="gir-before mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="gir-img">
                                <Image
                                    src="/assets/img/glowing-girl.png"
                                    alt="Product"
                                    width={550}
                                    height={500}
                                    className="img-fluid "
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <Pigment />
                        </div>
                    </div>
                </div>
            </section>
            <Made />
            <HealthTabs />
            <Aging />
            <section className="builder mb">
                <div className="container">
                    <div className="drk-gs">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="d-first">
                                    <h2 className="text-white">WHY CHOOSE BEYUVANA™ Glow Essence</h2>
                                    <p className="text-white">
                                        BEYUVANA™ Glow Essence is India’s 1st sachet-based glow therapy powered by 18 elite plant actives.
                                        It brightens skin, reduces pigmentation, and supports collagen with Glutathione, Vitamin C & Bamboo.
                                        Amla, Inulin, and Guava Leaf help heal your gut—because glow starts from within.
                                        Ashwagandha and Turmeric calm stress and fight inflammation, while Black Pepper boosts absorption.
                                        Each sugar-free, vegetarian sachet is your daily dose of skin radiance, gut vitality, and inner balance.
                                    </p>
                                    <div className="d-firt-img">
                                        <Image src="/assets/img/bulider.png" alt="Money back" width={600} height={600} className="img-fluid me-2" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-1 col-md-1 col-1"></div> */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="bul_second_bx">
                                    <div className="bg-white core">
                                        <h5 className="mb-0">10 CORE ACTIVITES, 10 PROVEN FUNCTION</h5>
                                    </div>
                                    <div className="thir-box-sec text-white">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Activates Natural
                                                    Collagen Production</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Boosts collagen synthesis for firmer, younger-looking skin — without marine or bovine collagen.
                                                    Key Ingredients: L-Lysine · L-Proline · Amla (Vit C) · Bamboo Extract (Silica)</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Delivers Deep Skin
                                                    Hydration</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Hydrates from within to smooth lines and restore skin bounce and suppleness.
                                                    Key Ingredients: Hyaluronic Acid · Amla · Vitamin E</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Fades Pigmentation &
                                                    Enhances Glow</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Brightens skin tone, reduces dark spots, and supports a radiant complexion.
                                                    Key Ingredients: Glutathione · Grape Seed Extract · Vitamin C · Pomegranate · Licorice (via base)</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Smooths Fine Lines
                                                    & Wrinkles</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Minimizes wrinkle depth, strengthens skin texture, and reduces visible signs of aging.
                                                    Key Ingredients: CoQ10 · Astaxanthin · Resveratrol · Horsetail (Silica) · Vitamin E</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Combats Stress-Induced
                                                    Aging</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Reduces cortisol impact, improves skin resilience, and balances stress-aging responses.
                                                    Key Ingredients: Ashwagandha · Shatavari · Gotu Kola</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Protects from UV &
                                                    Pollution Damage</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Defends against environmental aggressors that accelerate premature aging.
                                                    Key Ingredients: Green Tea (EGCG) · Astaxanthin · Amla · Grape Seed</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Strengthens the
                                                    Gut-Skin Axis</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Promotes gut balance to support clearer, healthier, inflammation-free skin.
                                                    Key Ingredients: Amla · Shatavari · Ashwagandha</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Fights Inflammation &
                                                    Breakouts</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Soothes skin, reduces sensitivity, and calms flare-ups.
                                                    Key Ingredients: Green Tea · Licorice (via base) · Selenium · Zinc</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Supports Cellular Detox
                                                    & Skin Repair</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Flushes toxins, promotes clarity, and accelerates natural skin repair cycles.
                                                    Key Ingredients: Glutathione · Grape Seed · Selenium · Zinc · Vitamin C</p>
                                            </div>
                                        </div>
                                        <hr className="buil_hr text-white" />
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p className="text-white"><b>Promotes Whole-Body
                                                    Skin Wellness</b></p>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12">
                                                <p className="text-white">Nourishes the skin from within by supporting hormones, energy, and internal balance.
                                                    Key Ingredients: Adaptogen Blend · Biotin · CoQ10</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Reviews />
            <ColFaq />
            <Footer />
            <StickyFooter />
        </>
    );
}