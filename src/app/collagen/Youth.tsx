'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState } from 'react';

const MySplideSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const testimonials = [
        {
            name: 'Youthful Skin Powered by Plants and Modern Science',
            para:'This transformation is powered by a synergy of botanicals, antioxidants, and Ayurvedic adaptogens — uniting nature and science for timeless, radiant skin.',
        },
        {
            name: '11 Holistic Functions in Every Serving',
            para:'Collagen Boost from Within, Skin Hydration & Plumping, Brightens Skin Tone & Fades Pigmentation, Reduces Fine Lines & Wrinkles, Balances Stress-Aging & Hormones, UV & Pollution Defense, Anti-Inflammatory.',
        },
        {
            name: 'Formulated for Maximum Absorption',
            para:'Crafted with clinically backed, plant-based actives—absorbed deeply to deliver real, visible results from within. No added sugar, no shortcuts—just pure, purposeful nutrition your skin genuinely responds to',
        },
    ];

    return (
        <section className="mb">
            <div className="container position-relative">
                {/* Heading */}


                <div className="slider-wrapper position-relative">
                    <Splide
                        options={{
                            perPage: 3,
                            type: 'loop',
                            rewind: true,
                            gap: '1rem',
                            arrows: false,
                            pagination: false,
                            breakpoints: {
                                1024: {
                                    perPage: 2,
                                },
                                640: {
                                    perPage: 1,
                                },
                            },
                        }}
                        aria-label="Testimonials"
                        onMove={(splide: SplideClass, newIndex: number) => setActiveIndex(newIndex)}
                    >
                        {testimonials.map((item, index) => (
                            <SplideSlide key={index}>
                                <div
                                    className={`test-box mt-4   ${activeIndex === index ? 'active-slide' : ''
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className=" mb-3">

                                        <div>
                                            <h5 className="fw-bold mb-0">{item.name}</h5>

                                        </div>
                                    </div>

                                    <div className="d-flex">

                                        <p>
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>

            {/* ✅ Extra CSS for arrows + active border */}
            <style jsx>{`
       
/* Active slide border */
.test-box{
background-color:#E2F9E5;
color:#0C4B33;
}

.active-slide {
  background-color:#0C4B33;
  color:#fff;
}
  .active-slide p{
  color:#fff;
}
  
      `}</style>
        </section>
    );
};

export default MySplideSlider;
