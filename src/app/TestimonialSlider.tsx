'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const MySplideSlider = () => {
  return (
    <section className='mb'>
    <div className='container'>
      <div className='text-center'>
      <h2 style={{ color: "#057A37" }}>Customer Testimonials</h2>
      </div>
    <Splide
      options={{
        perPage: 3,
        type: 'loop',
        dots: false,
        rewind: true,
        gap: '1rem',
        breakpoints: {
          640: {
             dots: false,
            perPage: 1,
          },
          1024: {
             dots: false,
            perPage: 2,
          },
        },
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
         <div className="test-box">
          <div className="d-flex mb-3">
            <div>
            <Image src="/assets/img/ramesh.png" alt="Beyuvana" width={60} height={60} className="rounded-circle me-3" />
             </div>
             <div>
              <h5 className='fw-bold mb-0'>Ramesh Kumar</h5>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
             </div>
          </div>
          <p>Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives.Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived. </p>
          <p>light flavor powered by nature. Just the right hint of sweetness, naturally derived.</p>
          <div className="d-flex">
            <Image src="/assets/img/green-box.webp" alt="Beyuvana" width={30} height={30} className="me-2" />
            <p>BEYUVANA™ Collagen Builder— India’s  1st
              Complete Plant-Based Premium</p>
          </div>
        </div> 
      </SplideSlide>
      <SplideSlide>
        <div className="test-box">
          <div className="d-flex mb-3">
            <div>
            <Image src="/assets/img/shivangi.png" alt="Beyuvana" width={60} height={60} className="rounded-circle me-3" />
             </div>
             <div>
              <h5 className='fw-bold mb-0'>Shivangi Dhar</h5>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
             </div>
          </div>
          <p>Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives.Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived. </p>
          <p>light flavor powered by nature. Just the right hint of sweetness, naturally derived.</p>
          <div className="d-flex">
            <Image src="/assets/img/pink-box.png" alt="Beyuvana" width={30} height={30} className="me-2" />
            <p>BEYUVANA™ Collagen Builder— India’s  1st
              Complete Plant-Based Premium</p>
          </div>
        </div> 
      </SplideSlide>
      <SplideSlide>
        <div className="test-box">
          <div className="d-flex mb-3">
            <div>
            <Image src="/assets/img/anjan.png" alt="Beyuvana" width={60} height={60} className="rounded-circle me-3" />
             </div>
             <div>
              <h5 className='fw-bold mb-0'>Anjan Dutta</h5>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
              <span><Image src="/assets/img/stafd.png" alt="Beyuvana" width={16} height={16} className="me-1" /></span>
             </div>
          </div>
          <p>Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives.Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived. </p>
          <p>light flavor powered by nature. Just the right hint of sweetness, naturally derived.</p>
          <div className="d-flex">
            <Image src="/assets/img/green-box.webp" alt="Beyuvana" width={30} height={30} className="me-2" />
            <p>BEYUVANA™ Collagen Builder— India’s  1st
              Complete Plant-Based Premium</p>
          </div>
        </div> 
      </SplideSlide>
    </Splide>
    </div>
    </section>
  );
};

export default MySplideSlider;