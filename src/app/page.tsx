import Image from "next/image";
import styles from "./page.module.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import FAQAccordion from "../app/components/FAQAccordion";


export default function Home() {
  return (
    <>
      <Header />
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
