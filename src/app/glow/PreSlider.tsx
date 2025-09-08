'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState } from 'react';

const MySplideSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const testimonials = [
        {
            img: '/assets/img/Ellipse 226.png',
            name: 'Stimulates Natural Collagen Production',
            para: 'Unlike animal collagen powders that simply supply broken peptides, BEYUVANA™ uses amino acids (L-Lysine, L-Proline), Vitamin C, and bamboo silica to naturally boost your body’s own collagen-building process — from within.',
        },
        {
            img: '/assets/img/Ellipse 226.png',
            name: 'Deep Hydration & Skin Barrier Repair',
            para: 'With Hyaluronic Acid and Amla the formula restores moisture balance, plumps the skin, and strengthens the barrier — essential for smooth, youthful skin.',
        },
        {
            img: '/assets/img/Ellipse 226.png',
            name: 'Brightens Skin & Fades Pigmentation',
            para: 'Clinically studied actives like Glutathione, Licorice, and Grape Seed Extract gently reduce oxidative stress and pigmentation, giving your skin a radiant glow.',
        },
    ];

    return (
        <section className="mb">
            <div className="container position-relative">
                <div className='text-center'>
                    <h2>Why the BEYUVANA™ PREMIUM COLLAGEN BUILDER Works</h2>
                    <p>
                        BEYUVANA™ isn&apos;t just another supplement — it&apos;s a multi-action, plant-powered skin nutrition system designed to target the root causes of aging, not just the symptoms. Here&apos;s why it delivers real, visible results:
                    </p>
                </div>


                <div className="slider-wrapper position-relative">
                    <Splide
                        options={{
                            perPage: 3,
                            type: 'loop',
                            rewind: true,
                            gap: '1rem',
                            arrows: true,
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
                                    className={`test-box mt-2   ${activeIndex === index ? 'active-slide' : ''
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className=" mb-3 text-center">

                                        <div>
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                width={60}
                                                height={60}
                                                className="rounded-circle mb-3"
                                            />
                                            <h5 className="fw-bold mb-2">{item.name}</h5>
                                            <p>
                                                {item.para}
                                            </p>
                                        </div>
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
