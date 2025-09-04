"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function WhySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // desktop default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const items = [
    {
      img: "/assets/img/lysine.png",
      title1: "L-Lysine",
      title2: "L-Proline",
      desc: "Core collagen amino acids",
    },
    {
      img: "/assets/img/amla.png",
      title1: "Amla",
      title2: "Vitamin C",
      desc: "Boosts natural collagen production",
    },
    {
      img: "/assets/img/bambo.png",
      title1: "Bamboo Silica",
      title2: "Glutathione",
      desc: "For glow, repair and strength",
    },
    {
      img: "/assets/img/biotin.png",
      title1: "Hyaluronic Acid",
      title2: "Biotin",
      desc: "For hydration, firmness & beauty",
    },
    {
      img: "/assets/img/gotu.png",
      title1: "Ashwagandha",
      title2: "Gotu Kola",
      desc: "Reduces stress-aging and supports hormones",
    },
  ];

  return (
    <section className="mb why">
      <div className="container">
        <div className="text-center">
          <h2 style={{ color: "#1A2819" }}>
            Why You Need BEYUVANA —{" "}
            <span style={{ color: "#0C4B33" }}>Right Now</span>
          </h2>
          <p>
            BEYUVANA gives your body everything it needs to rebuild collagen
            naturally:
          </p>

          {/* Multi-Item Slider */}
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="p-2">
                <div className="why-img text-center">
                  <Image
                    src={item.img}
                    alt={item.title1}
                    width={230}
                    height={400}
                    className="img-fluid mx-auto"
                  />
                  <div className="why-txt">
                    <h3>{item.title1}</h3>
                    <Image
                      src="/assets/img/add.png"
                      alt="Add"
                      width={20}
                      height={20}
                      className="img-fluid"
                    />
                    <h3>{item.title2}</h3>
                    <hr style={{ color: "#fff" }} />
                    <p style={{ color: "#fff" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Bottom Text */}
          <div className="green mt-4">
            <h3 style={{ color: "#fff" }}>
              One sachet a day ={" "}
              <span className="heal">inner healing + outer glow</span>
            </h3>
            <p style={{ color: "#fff" }}>Start early. Stay youthful longer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
