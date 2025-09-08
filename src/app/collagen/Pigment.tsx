'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const MySplideSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0); // activeIndex should start from 0 for the first slide
    const splideRef = useRef<SplideClass | null>(null);

    const testimonials = [
        {
            img: '/assets/img/wrinkle.png',
            name: 'Lines that used to stay... started to fade.',
            para: 'Unlike animal collagen powders that simply supply broken peptides, BEYUVANA™ uses amino acids (L-Lysine, L-Proline), Vitamin C, and bamboo silica to naturally boost your body’s own collagen-building process — from within.',
        },
        {
            img: '/assets/img/wrinkle.png',
            name: 'Wrinkle that used to stay... started to fade.',
            para: 'With Hyaluronic Acid and Amla the formula restores moisture balance, plumps the skin, and strengthens the barrier — essential for smooth, youthful skin.',
        },
        {
            img: '/assets/img/wrinkle.png',
            name: 'Pigment that used to stay... started to fade.',
            para: 'I noticed the difference by week 4. My skin felt tighter, especially around the eyes and mouth. Now, even without makeup, the fine lines are visibly reduced.',
        },
    ];

    useEffect(() => {
        // Correctly handle the active slide when a user clicks on it
        if (splideRef.current) {
            splideRef.current.go(activeIndex);
        }
    }, [activeIndex]);

    return (
        <section className="mb pigj">
            <div className="">
                <div className="slider-wrapper position-relative">
                    <Splide
                        options={{
                            perPage: 1,
                            type: 'loop',
                            rewind: true,
                            gap: '1rem',
                            arrows: true, // You need to enable arrows
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
                       
                        onMove={(splide: SplideClass, newIndex: number) => setActiveIndex(newIndex)}
                        aria-label="Testimonials"
                    >
                        {testimonials.map((item, index) => (
                            <SplideSlide key={index}>
                                <div
                                    className={`test-box1 ${activeIndex === index ? 'active-slide' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="mb-3 tsti-img">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={420}
                                            height={270}
                                            className="w-100 mb-3"
                                        />
                                        <h5 className="fw-bold mb-2">{item.name}</h5>
                                        <p className='text-white'>
                                            {item.para}
                                        </p>
                                    </div>
                                    <hr />
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>

            <style jsx>{`
                .test-box1 {
                    background-color: #122014;
                    color: #fff;
                    padding: 20px 20px 30px 20px;
                    height:100%;
                }
                
                .slider-wrapper :global(.splide__arrows) {
                  position: absolute;
                 bottom: 5%;
                  right: 0;
                  display: flex;
                  gap: 5px;
                }
                
                .slider-wrapper :global(.splide__arrow) {
                  background: transparent;
                  
                 
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  opacity: 0.9;
                }
                
                .slider-wrapper :global(.splide__arrow svg) {
                  fill: #fff;
                  width: 12px;
                  height: 12px;
                }
                
                  /* Prev arrow only */
.slider-wrapper :global(.splide__arrow--prev) {
 left:-6em; /* push prev arrow left */
}
                
                /* Mobile Styles */
                @media (max-width: 640px) {
                  .slider-wrapper :global(.splide__arrows) {
                    position: absolute;
                    top: auto; 
                    bottom: -35px;
                    left: 50%;
                    right: auto; // Reset right
                    transform: translateX(-50%); // Correct transform
                    justify-content: center;
                    gap: 5px;
                  }
                 .test-box1{
                 height:auto;
                 }
                 
               
                  .slider-wrapper :global(.splide__arrow--next) {
                    right: auto !important; // Reset right
                    margin-left: 5px !important; // Add some margin
                  }
                
                  .slider-wrapper :global(.splide__arrow) {
                    width: 30px;
                    height: 30px;
                  }
                
                  .slider-wrapper :global(.splide__arrow svg) {
                    width: 13px;
                    height: 13px;
                  }
                }
            `}</style>
        </section>
    );
};

export default MySplideSlider;