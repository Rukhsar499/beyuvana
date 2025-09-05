'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideClass } from '@splidejs/splide';
import Image from 'next/image';
import { useState } from 'react';

const MySplideSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      img: '/assets/img/ramesh.png',
      boxImg: '/assets/img/green-box.webp',
    },
    {
      name: 'Shivangi Dhar',
      img: '/assets/img/shivangi.png',
      boxImg: '/assets/img/pink-box.png',
    },
    {
      name: 'Anjan Dutta',
      img: '/assets/img/anjan.png',
      boxImg: '/assets/img/green-box.webp',
    },
  ];

  return (
    <section className="mb">
      <div className="container position-relative">
        {/* Heading */}
        <div className="mb-3 text-center">
          <h2 style={{ color: '#057A37' }}>Customer Testimonials</h2>
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
                  className={`test-box  ${activeIndex === index ? 'active-slide' : ''
                    }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="d-flex mb-3">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-circle me-3"
                    />
                    <div>
                      <h5 className="fw-bold mb-0">{item.name}</h5>
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Image
                            key={i}
                            src="/assets/img/stafd.png"
                            alt="star"
                            width={16}
                            height={16}
                            className="me-1"
                          />
                        ))}
                    </div>
                  </div>
                  <p>
                    Naturally flavored with plant extracts and stevia for a
                    refreshing taste—no artificial sweeteners or additives.
                  </p>
                  <div className="d-flex">
                    <Image
                      src={item.boxImg}
                      alt="box"
                      width={30}
                      height={30}
                      className="me-2"
                    />
                    <p>
                      BEYUVANA™ Collagen Builder— India’s 1st Complete
                      Plant-Based Premium
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
       .slider-wrapper :global(.splide__arrows) {
  position: absolute;
  top: -50px;
  right: 0;
  display: flex;
  gap: 10px;
}

/* Common arrow style */
.slider-wrapper :global(.splide__arrow) {
  background: #057a37;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
}

/* Prev arrow only */
.slider-wrapper :global(.splide__arrow--prev) {
 left:-6em; /* push prev arrow left */
}

/* Next arrow only */
.slider-wrapper :global(.splide__arrow--next) {
  margin-left: auto; /* stays on right */
}

.slider-wrapper :global(.splide__arrow svg) {
  fill: #fff;
  width: 16px;
  height: 16px;
}

/* Active slide border */
.active-slide {
  border: 2px solid #057a37;
  border-radius: 10px;
}
  @media (max-width: 640px) {
  .slider-wrapper :global(.splide__arrows) {
    position: absolute;
    top: auto;         /* reset top */
    bottom: -35px;     /* move below slider */
    left: 50%;         /* center horizontally */
    transform: translateX(-50%, -50%);
    justify-content: center;
    gap: 5px;
  }

  .slider-wrapper :global(.splide__arrow--prev),
  .slider-wrapper :global(.splide__arrow--next) {
    left: auto !important;
    margin: 0 !important;
  }
    .slider-wrapper :global(.splide__arrow) {

  width: 30px;
  height: 30px;
}
  .slider-wrapper :global(.splide__arrow svg) {
  
  width: 13px;
  height: 13px;
}
  /* Next arrow only */
.slider-wrapper :global(.splide__arrow--next) {
  right: 2em; /* stays on right */
}
}
      `}</style>
    </section>
  );
};

export default MySplideSlider;
