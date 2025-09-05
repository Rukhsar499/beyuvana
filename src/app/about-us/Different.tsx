'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState } from 'react';

const MySplideSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
    name:'vegan',
     img: '/assets/img/vegan1.png',
     text:'Plant Based Activities',
     paragraph:'Pure natural'
     
    },
    {
    name:'vegan',
     img: '/assets/img/poison1.png',
     text:'No Animal Products',
     paragraph:'Cruelty-free'
     
    },
    {
    name:'vegan',
     img: '/assets/img/herbal-treatment.png',
     text:'Ayurvedic + Modern',
     paragraph:'Best of both worlds'
     
    },
    {
    name:'vegan',
     img: '/assets/img/insurance1.png',
     text:'Safe Daily Use',
     paragraph:'Long term safe'
     
    },
    {
    name:'vegan',
     img: '/assets/img/ingredient1.png',
     text:'High Quality Ingredients',
     paragraph:'Premium quality'
     
    },
  ];

  return (
    <section className="mb">
      <div className="container position-relative">
        {/* Heading */}
        <div className="mb-3 text-center">
          <h2>What Makes Us Different?</h2>
        </div>

        <div className="slider-wrapper position-relative">
          <Splide
            options={{
              perPage: 5,
              type: 'loop',
              rewind: true,
              gap: '1rem',
              arrows: false,
              pagination: false,
              breakpoints: {
                1024: {
                arrows: false,
                  perPage: 2,
                },
                640: {
                  perPage: 2,
                },
              },
            }}
            aria-label="Testimonials"
  onMove={(splide: SplideClass, newIndex: number) => setActiveIndex(newIndex)}
          >
            {testimonials.map((item, index) => (
              <SplideSlide key={index}>
                <div
                  className={`card h-100 text-center shadow-sm rounded-4 p-3 border border-success  ${activeIndex === index ? 'active-slide' : ''
                    }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="mb-2"
                    />
                   <h6 className="fw-bold">{item.text}</h6>
                   <p className="small text-muted">{item.paragraph}</p>
                  </div>
                
                  
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {/* ✅ Extra CSS for arrows + active border */}
      
    </section>
  );
};

export default MySplideSlider;
