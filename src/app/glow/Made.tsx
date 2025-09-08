'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState } from 'react';

const MySplideSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const testimonials = [
        {
            img: '/assets/img/white-box.png',
            name: 'Noticing early signs of aging',
            para: 'BEYUVANA™ is designed for modern individuals who want results without compromise —using only clean, plant-based ingredients that are backed by science and safe for everyday use.',
        },
        {
            img: '/assets/img/white-box.png',
            name: 'Deep Hydration & Skin Barrier Repair',
            para: 'With Hyaluronic Acid and Amla the formula restores moisture balance, plumps the skin, and strengthens the barrier — essential for smooth, youthful skin.',
        },
        {
            img: '/assets/img/white-box.png',
            name: 'Brightens Skin & Fades Pigmentation',
            para: 'Clinically studied actives like Glutathione, Licorice, and Grape Seed Extract gently reduce oxidative stress and pigmentation, giving your skin a radiant glow.',
        },
    ];

    return (
        <section className="mb">
            <div className="container position-relative">
                <div className='prty'>
                <div className='text-center'>
                    <h2>Who Is BEYUVANA™ Premium Collagen Builder Made For?</h2>
                    <p>
                        BEYUVANA™ is designed for modern individuals who want results without compromise —using only clean, plant-based ingredients that are backed by science and safe for everyday use.
                    </p>
                </div>


                <div className="slider-wrapper position-relative">
                    <Splide
                        options={{
                            perPage: 2,
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
                                <div className='row g-0'>
                                    <div className='col-lg-5 col-md-5 col-12'>
                                        <div>
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                width={200}
                                                height={100}
                                                className="w-100 h-100"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-7 col-md-7 col-12'>
                                    <div
                                        className={`test-box w-100 h-100   ${activeIndex === index ? 'active-slide' : ''
                                            }`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <div className=" mb-3 ">
                                         <h5 className="fw-bold mb-2">{item.name}</h5>
                                            <p>
                                                {item.para}
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                              
                         </SplideSlide>
                        ))}
                </Splide>
            </div>
        </div>
  </div>
            {/* ✅ Extra CSS for arrows + active border */ }
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
        </section >
    );
};

export default MySplideSlider;
