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
import ColFaq from "../collagen/ColFaq";
import PreSlider from "../collagen/PreSlider"
import Reviews from "../collagen/Reviews"



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
            <section className="premi mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="pr-img">
                                <Image src="/assets/img/pre-ik.png" alt="Money back" width={500} height={500} className="img-fluid me-3" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <div>
                                <h2>Experience Visible Transformation in 10 Weeks</h2>
                                <p>Our clinical-style progress chart reveals the powerful results of BEYUVANA™’s advanced
                                    anti-ageing formula. Within 10 weeks:</p>
                            </div>
                            <div className="d-flex mb-3">
                                <Image src="/assets/img/tick-square.png" alt="Money back" width={20} height={20} className="img-fluid me-2" />
                                <p className="mb-0">
                                    Hydration surges 75%, leaving skin plump and supple.
                                </p>
                            </div>
                            <div className="d-flex mb-3">
                                <Image src="/assets/img/tick-square.png" alt="Money back" width={20} height={20} className="img-fluid me-2" />
                                <p className="mb-0">
                                    Glow rises 70%, restoring luminous radiance.
                                </p>
                            </div>
                            <div className="d-flex mb-3">
                                <Image src="/assets/img/tick-square.png" alt="Money back" width={20} height={20} className="img-fluid me-2" />
                                <p className="mb-0">
                                    Elasticity improves 68%, for a firmer, lifted feel.
                                </p>
                            </div>
                            <div className="d-flex mb-3">
                                <Image src="/assets/img/tick-square.png" alt="Money back" width={20} height={20} className="img-fluid me-2" />
                                <p className="mb-0">
                                    Pigmentation reduces by 60%, revealing clearer, even skin tone.
                                </p>
                            </div>
                            <div className="d-flex mb-3">
                                <Image src="/assets/img/tick-square.png" alt="Money back" width={20} height={20} className="img-fluid me-2" />
                                <p className="mb-0">
                                    Wrinkle depth reduces 62%, visibly softening fine lines.
                                </p>
                            </div>
                            <div className="d-flex mb-3">
                                <Image src="/assets/img/tick-square.png" alt="Money back" width={20} height={20} className="img-fluid me-2" />
                                <p className="mb-0">
                                    Overall ageing markers drop 61%, showcasing comprehensive renewal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p>
                            This transformation is powered by a synergy of botanicals, antioxidants, and Ayurvedic adaptogens — uniting nature and science for timeless, radiant skin.
                        </p>
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
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="res-box">
                                            <h4 className="sevty">75%</h4>
                                            <p>Increase in <br />
                                                Skin Hydration</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="res-box">
                                            <h4 className="sevty">70%</h4>
                                            <p>Increase in <br />
                                                Skin Glow</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="res-box">
                                            <h4 className="sevty">68%</h4>
                                            <p>Increase in <br />
                                                Skin Elasticity</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="res-box">
                                            <h4 className="sevty">60%</h4>
                                            <p>Reduce in <br />
                                                Pigmentation Reduction </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="res-box">
                                            <h4 className="sevty">62%</h4>
                                            <p>Reduce in <br />
                                                Wrinkle Depth Reduction</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="res-box">
                                            <h4 className="sevty">61%</h4>
                                            <p>Reduce in <br />
                                                Visible Signs of Aging</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="prot-img">
                                <Image src="/assets/img/envato.png" alt="Money back" width={600} height={600} className="img-fluid me-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PreSlider />
            <section className="builder mb">
                <div className="container">
                    <div className="drk-g">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="d-first">
                                    <h2 className="text-white">Why Choose BEYUVANA™ Premium Collagen Builder?</h2>
                                    <p className="text-white">
                                        A Smarter, Safer Path to Ageless Skin. Not Just Collagen — A Complete Skin Nutrition Ritual
                                        BEYUVANA™ is more than a collagen supplement. It's a powerful, plant-based formula that activates
                                        your skin’s natural renewal systems from within. We don’t just give you collagen — we help your body
                                        create, protect, and preserve its own.
                                        100% vegetarian, sugar-free, gelatin-free — crafted for those who want visible results, naturally. Every
                                        ingredient has a purpose, and every sachet is a step toward long-term skin health.
                                    </p>
                                    <div className="d-firt-img">
                                        <Image src="/assets/img/bulider.png" alt="Money back" width={600} height={600} className="img-fluid me-2" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <Image
                                            src="/assets/img/certificate 1.png"
                                            alt="Product"
                                            width={40}
                                            height={40}
                                            className="img-fluid me-2"
                                        />
                                        <p className="text-white mb-0 mt-2">View Lab Certificates</p>
                                    </div>
                                    <hr className="buil_hr" />
                                    <div className="bui_ul">
                                        <ul>
                                            <li className="text-white">Each Sachet Delivers 21 Synergistic Plant-Based Actives</li>
                                            <li className="text-white">Each Sachet Delivers 21 Synergistic Plant-Based Actives</li>
                                            <li className="text-white">Each Sachet Delivers 21 Synergistic Plant-Based Actives</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-1 col-md-1 col-1"></div> */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="bul_second_bx">
                                    <div className="bg-white core">
                                        <h5 className="mb-0">10 Core Actions. 1 Intelligent Sachet</h5>
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