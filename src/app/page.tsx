import Image from "next/image";
import styles from "./page.module.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import FAQAccordion from "../app/components/FAQAccordion";
import TestimonialSlider from "../app/TestimonialSlider";


export default function Home() {
  return (
    <>
      <Header />

      <section className="hero-section mb">
        <div className="container">
          <div className="v-sec">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="banner-video"
            >
              <source
                src="/assets/img/banner-video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="banner-text">
              {/* <Image src="/assets/img/video-circle.png" alt="Money back" width={60} height={60} className="img-fluid mb-3" /> */}
              <h1>Discover the Power <br />
                of Plant-Based Collagen</h1>
              <hr className="text-white tg" />
              <p className="btr">
                At Beyuvana, we are committed to providing high-quality, plant-based collagen products that support your health and beauty goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about mb">
        <div className="container">
          <div className="text-center">
            <h2>About Beyuvana</h2>
            <h5 id="nou">Nourishment That Goes Deeper Than Skin.</h5>
            <p>
              At BEYUVANA™, we create plant-powered wellness formulations backed by modern science, crafted with clinically researched ingredients,
              lab-tested for safety, and made 100% vegetarian—so you always know exactly what you’re putting into your body.
            </p>
          </div>
        </div>
      </section>
      <section className="choose">
        <div className="container">
          <div className="text-center">
            <h2>Why Choose BEYUVANA™</h2>
          </div>
          <div className="chose_box">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-3 col-12">
                <div className="chos-tetx">
                  <div className="mb-3">
                    <h3 className="plant">Plant-Powered Formulations</h3>
                    <p className="dec">Developed with carefully selected botanicals, vitamins, and adaptogens.</p>
                  </div>
                  <div className="mb-3">
                    <h3 className="plant">Science-Inspired</h3>
                    <p className="dec">Created using ingredients that are supported by nutritional research.</p>
                  </div>
                  <div className="mb-3">
                    <h3 className="plant">Clean & Transparent </h3>
                    <p className="dec">100% vegetarian, with no added sugar, no harmful chemicals, and no hidden additives.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <div className="chose-img">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="banner-videos"
                  >
                    <source
                      src="/assets/img/Sqaure-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="image1">
                   <Image src="/assets/img/hand.png" width={90} height={90} alt="No Toxins" className="icon me-2" />
                  </div>
                   <div className="image2">
                   <Image src="/assets/img/bulb.png" width={90} height={90} alt="No Toxins" className="icon me-2" />
                  </div>
                   <div className="image3">
                   <Image src="/assets/img/star.png" width={90} height={90} alt="No Toxins" className="icon me-2" />
                  </div>
                   <div className="image4">
                   <Image src="/assets/img/lotus.png" width={90} height={90} alt="No Toxins" className="icon me-2" />
                  </div>
                   <div className="image5">
                   <Image src="/assets/img/tick.png" width={90} height={90} alt="No Toxins" className="icon me-2" />
                  </div>
                   <div className="image6">
                   <Image src="/assets/img/bowl.png" width={90} height={90} alt="No Toxins" className="icon me-2" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-12">
                <div className="chos-tetx left-alk">
                  <div className="mb-3">
                    <h3 className="plant">Holistic Approach</h3>
                    <p className="dec">Designed to support overall wellness, balance, and daily vitality.</p>
                  </div>
                  <div className="mb-3">
                    <h3 className="plant">Trusted Quality</h3>
                    <p className="dec">Every batch is lab-tested for safety and purity before it reaches you.</p>
                  </div>
                  <div className="mb-3">
                    <h3 className="plant">Commitment to Integrity</h3>
                    <p className="dec">Honest, clear, and mindful formulations made with your long-term well-being in mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-strip mb">
        <div className="container">
          <div className="row text-center">
            <div className="col feature-item w-br">
              <div className="d-flex">
                <Image src="/assets/img/non-toxic.png" width={60} height={60} alt="No Toxins" className="icon me-2" />
                <p className="mb-0 mt-2 text-white">No Toxins <br /> or chemicals</p>
              </div>
            </div>
            <div className="col feature-item w-br">
              <div className="d-flex">
                <Image src="/assets/img/no-conversion.png" width={60} height={60} alt="No Toxins" className="icon me-2" />
                <p className="mb-0 mt-2 text-white">No Toxins <br /> or chemicals</p>
              </div>
            </div>
            <div className="col feature-item w-br">
              <div className="d-flex">
                <Image src="/assets/img/non-toxic.png" width={60} height={60} alt="No Toxins" className="icon me-2" />
                <p className="mb-0 mt-2 text-white">No Toxins <br /> or chemicals</p>
              </div>
            </div>
            <div className="col feature-item w-br">
              <div className="d-flex">
                <Image src="/assets/img/no-conversion.png" width={60} height={60} alt="No Toxins" className="icon me-2" />
                <p className="mb-0 mt-2 text-white">No Toxins <br /> or chemicals</p>
              </div>
            </div>
            <div className="col feature-item">
              <div className="d-flex">
                <Image src="/assets/img/non-toxic.png" width={60} height={60} alt="No Toxins" className="icon me-2" />
                <p className="mb-0 mt-2 text-white">No Toxins <br /> or chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collagen mb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="coll-img">
                <Image src="/assets/img/collagenproduct.png" alt="collagen" width={300} height={300} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-1"></div>
            <div className="col-lg-7 col-md-7 col-12">
              <div className="coll-text">
                <h2>BEYUVANA™ Collagen Builder— India’s  1st Complete Plant-Based Premium</h2>
                <p className="agihg">Aging is Natural — Radiance is a Choice</p>
                <p>Crafted with 21 synergistic, clinically studied botanicals that work from within. Each precision-dosed sachet supports skin elasticity, deep hydration, and youthful glow. Stimulates natural collagen with Amla, Bamboo Silica, L-Lysine, and Hyaluronic Acid.</p>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box br-b">
                      <Image src="/assets/img/c1.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Boosts Skin Elasticity <br />
                        by up to 53%
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box br-b">
                      <Image src="/assets/img/c2.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Fast Absorption with <br />
                        Bioavailable Plant Actives
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box br-b">
                      <Image src="/assets/img/c3.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Reduces Visible Wrinkles & <br />
                        Fine Lines by 30%
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box">
                      <Image src="/assets/img/c4.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Improves Skin Hydration & <br />
                        Moisture Retention by 45%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <a href="" className="view">View More</a>
                </div>
                <div className="d-flex mt-3">
                  <button type="button" className="bag"><Image src="/assets/img/shopping-bag.png" alt="" width={20} height={20} className="me-2" />Shop Now</button>
                  <button type="button" className="cart"><Image src="/assets/img/shopping-cart.png" alt="" width={20} height={20} className="me-2" />Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="glow mb">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
              <div className="coll-text">
                <h2>BEYUVANA™ Advanced Glow-Nourishing Formula
                  for Radiant, Even-Toned Skin</h2>
                <p>Glow Essence is an advanced, 100% vegetarian, skin-nourishing formula enriched with 18 synergistic plant-based actives, designed to unlock visible clarity and radiance from within. Infused with 4X Liposomal</p>
                <p>
                  Glutathione and clinically studied Vitamin C, it works deep at the cellular level to visibly reduce dark spots,
                  pigmentation, and dullness — revealing a brighter, more even-toned complexion. </p>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box br-b">
                      <Image src="/assets/img/c1.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Glow & Brightening
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box br-b">
                      <Image src="/assets/img/c2.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Dark Spots & Pigmentation
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box br-b">
                      <Image src="/assets/img/c3.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Acne & Clear Skin
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-12">
                    <div className="ship-box">
                      <Image src="/assets/img/c4.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                      <p className="mb-0 mt-2 fd">
                        Skin Hydration
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <a href="" className="view">View More</a>
                </div>
                <div className="d-flex mt-3">
                  <button type="button" className="bag"><Image src="/assets/img/shopping-bag.png" alt="" width={20} height={20} className="me-2" />Shop Now</button>
                  <button type="button" className="cart"><Image src="/assets/img/shopping-cart.png" alt="" width={20} height={20} className="me-2" />Add to cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-1"></div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="coll-img">
                <Image src="/assets/img/product-glow-essence.png" alt="collagen" width={300} height={300} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb why">
        <div className="container">
          <div className="text-center">
            <h2 style={{ color: "#1A2819" }}>Why You Need BEYUVANA — <span style={{ color: "#0C4B33" }}>Right Now</span></h2>
            <p>
              BEYUVANA gives your body everything it needs to rebuild collagen naturally:
            </p>
            <div className="d-flex flex-wrap justify-content-center why-wrapper">
              <div className="why-img">
                <Image src="/assets/img/lysine.png" alt="Money back" width={200} height={400} className="img-fluid" />
                <div className="why-txt">
                  <h3>L-Lysine</h3>
                  <Image src="/assets/img/add.png" alt="Money back" width={20} height={20} className="img-fluid" />
                  <h3>L-Proline</h3>
                  <hr style={{ color: "#fff" }} />
                  <p style={{ color: "#fff" }}>Core collagen
                    amino acids</p>
                </div>
              </div>
              <div className="why-img">
                <Image src="/assets/img/amla.png" alt="Money back" width={200} height={400} className="img-fluid" />
                <div className="why-txt">
                  <h3>Amla</h3>
                  <Image src="/assets/img/add.png" alt="Money back" width={20} height={20} className="img-fluid" />
                  <h3>Vitamin C</h3>
                  <hr style={{ color: "#fff" }} />
                  <p style={{ color: "#fff" }}>Boosts natural
                    collagen production</p>
                </div>
              </div>
              <div className="why-img">
                <Image src="/assets/img/bambo.png" alt="Money back" width={200} height={400} className="img-fluid" />
                <div className="why-txt">
                  <h3>Bamboo Silica</h3>
                  <Image src="/assets/img/add.png" alt="Money back" width={20} height={20} className="img-fluid" />
                  <h3>Glutathione</h3>
                  <hr style={{ color: "#fff" }} />
                  <p style={{ color: "#fff" }}>For glow, repair
                    and strength
                  </p>
                </div>
              </div>
              <div className="why-img">
                <Image src="/assets/img/biotin.png" alt="Money back" width={200} height={400} className="img-fluid" />
                <div className="why-txt">
                  <h3>Hyaluronic Acid</h3>
                  <Image src="/assets/img/add.png" alt="Money back" width={20} height={20} className="img-fluid" />
                  <h3>Biotin</h3>
                  <hr style={{ color: "#fff" }} />
                  <p style={{ color: "#fff" }}>For hydration,
                    firmness & beauty</p>
                </div>
              </div>
              <div className="why-img">
                <Image src="/assets/img/gotu.png" alt="Money back" width={200} height={400} className="img-fluid" />
                <div className="why-txt">
                  <h3>Ashwagandha</h3>
                  <Image src="/assets/img/add.png" alt="Money back" width={20} height={20} className="img-fluid" />
                  <h3>Gotu Kola</h3>
                  <hr style={{ color: "#fff" }} />
                  <p style={{ color: "#fff" }}>Reduces
                    stress-aging
                    and supports
                    hormones</p>
                </div>
              </div>
            </div>
            <div className="green">
              <h3 style={{ color: "#fff" }}>One sachet a day = <span className="heal">inner healing + outer glow</span></h3>
              <p style={{ color: "#fff" }}>Start early. Stay youthful longer.</p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <section className="ship mb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="ship-box br">
                <div className="d-flex">
                  <Image src="/assets/img/free-shipping.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                  <p className="mb-0 mt-2">
                    Free Shipping of <br />
                    order above ₹1500
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="ship-box br">
                <div className="d-flex">
                  <Image src="/assets/img/cash-on-delivery.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                  <p className="mb-0 mt-2">
                    Cash On
                    <br />
                    Delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="ship-box br">
                <div className="d-flex">
                  <Image src="/assets/img/load.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                  <p className="mb-0 mt-2">
                    24 Hour
                    <br />
                    Dispatch
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="ship-box">
                <div className="d-flex">
                  <Image src="/assets/img/free-shipping.png" alt="Money back" width={70} height={50} className="img-fluid me-3" />
                  <p className="mb-0 mt-2 active-text">
                    Money Back
                    <br />
                    Guarantee*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="money mb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="money-img">
                <Image src="/assets/img/money-back.png" alt="Money back" width={350} height={350} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="money-text">
                <h2 style={{ color: "#1F1F1F" }}>BEYUVANA™ 60-Day Money-Back Guarantee</h2>
                <p style={{ color: "#222222" }}>
                  At BEYUVANA™, your trust means everything to us. We stand by the quality of our plant-powered formulations, and we want you to feel completely confident on your wellnes journey. That’s why we offer a 60-Day Money-Back Promise on your first purchase,
                  exclusively from our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQAccordion />
      <Footer />
    </>
  );
}
