"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Ashwagandha Extract",
    desc: "Reduces stress-induced aging and cortisol imbalance, supporting hormonal harmony and skin health.",
    img: "/assets/img/ashwa.png",
  },
  {
    id: 2,
    title: "Turmeric Extract",
    desc: "Reduces stress-induced aging and cortisol imbalance, supporting hormonal harmony and skin health.",
    img: "/assets/img/ashwa.png",
  },
  {
    id: 3,
    title: "Hyaluronic Acid",
    desc: "Reduces stress-induced aging and cortisol imbalance, supporting hormonal harmony and skin health.",
    img: "/assets/img/ashwa.png",
  },
  {
    id: 4,
    title: "Collagen Boost",
    desc: "Reduces stress-induced aging and cortisol imbalance, supporting hormonal harmony and skin health.",
    img: "/assets/img/ashwa.png",
  },
];

export default function CardSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mb">
      <div className="container">
        <div className="text-center">
            <h2>India’s Most Advanced Anti-Aging Innovation</h2>
            <p>Collagen Reglow delivers clinically proven ingredients in precision-dosed sachets for maximum skin transformation.</p>
        </div>
        <Splide
          options={{
            perPage: 3,
            gap: "1rem",
            loop:"true",
            pagination: false,
            arrows: true,
            breakpoints: {
              768: { perPage: 1 },
              1024: { perPage: 2 },
            },
          }}
          onMoved={(splide) => setActiveIndex(splide.index)}
        >
          {items.map((item, index) => (
            <SplideSlide key={item.id}>
              <div className="position-relative card-box rounded-4 overflow-hidden">
                {/* ✅ Active Card (no big image) */}
                {activeIndex === index ? (
                  <div className="active-box text-center p-4 r-fg d-flex flex-column justify-content-center shadow-sm rounded-4">
                    <div className="rounded-circle overflow-hidden mx-auto mb-3 circle-img">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="object-fit-cover"
                      />
                    </div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <hr />
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                ) : (
                  <>
                    {/* ❌ Inactive: big image + overlay */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={350}
                      className="w-100"
                    />
                    <div className="overlay d-flex flex-column justify-content-center align-items-center">
                      <h6 className="text-white fw-bold mb-2">{item.title}</h6>
                      <div className="plus-icon">+</div>
                    </div>
                  </>
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <style jsx>{`
          .card-box {
            min-height: 320px;
            background: #fff;
            border-radius: 12px;
          }
          .active-box {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .circle-img {
            width: 80px;
            height: 80px;
            border: 3px solid #fff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          }
          .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            text-align: center;
            border-radius: 12px;
          }
          .plus-icon {
            font-size: 20px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #fff;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    </section>
  );
}
