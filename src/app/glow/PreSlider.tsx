'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState } from 'react';
import styles from "./Slider.module.css";

const MySplideSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const testimonials = [
        {
            img: '/assets/img/gl8.png',
            alt:'glow',
            name: (
                <>
                    Brightens Skin & Fades <br /> Pigmentation
                </>
            ),
            para: 'L-Glutathione + Vitamin C: Reduce melanin, boost glow, Licorice Extract, Amla, Lemon Powder: Naturally fade dark spots, Vitamin B3 : Evens out skin tone, improves radiance. Visible glow & reduced pigmentation',
        },
        {
            img: '/assets/img/gl8.png',
            alt:'glow',
            name: (
                <>
                    Hydrates & Plumps
                    <br /> Skin
                </>
            ),
            para: 'Hyaluronic Acid : Deep hydration. Inulin + Bamboo Extract: Locks moisture, improves texture. Skin feels dewy, hydrated, and elastic',
        },
        {
            img: '/assets/img/gl8.png',
            alt:'glow',
            name: (
                <>
                    Fights Acne &

                    <br /> Inflammation
                </>
            ),
            para: 'Neem, Green Tea, Curcuma, Guava Leaf: Clear acne & calm redness. Ashwagandha: Reduces stress-triggered breakouts. Clearer, calmer skin',
        },
        {
            img: '/assets/img/gl8.png',
            alt:'glow',
            name: 'Fights Acne &  pigmentation',
            para: 'Neem, Green Tea, Curcuma, Guava Leaf: Clear acne & calm redness. Ashwagandha: Reduces stress-triggered breakouts. Clearer, calmer skin',
        },
    ];

    return (
        <section className="mb">
            <div className="container position-relative">
                <div className='text-center'>
                    <h2>WHY BEYUVANA™ GLOW ESSENCE WORK</h2>
                    <p>
                        Glow Essence is not just a skin product. It’s a skin nutrition revolution from within — combining glow boosters, antioxidants, collagen supporters, gut balancers, and anti-inflammatories in one intelligent formula.
                    </p>
                </div>


                <div className="slider-wrapper position-relative">
                    <Splide
                        options={{
                            perPage: 3,
                            type: 'loop',
                            rewind: true,
                            gap: '1rem',
                            arrows: false, 
                            pagination: true,
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
                            <SplideSlide key={index} className="pinhg">
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
                                            <h5 className=" mb-2">{item.name}</h5>
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
background-color:#FFE7E7;
color:#B00404;
font-family: GrafielsRegular-JpODj;
height:300px;
}

.active-slide {
  background-color:#B00404;
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
