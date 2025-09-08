'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductGallery = () => {
  // ✅ Images array
  const images: string[] = [
    '/assets/img/product-pink1.png',
    '/assets/img/1.png',
    '/assets/img/2.png',
    '/assets/img/3.png',
  ];

  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ display: 'none' });

  // ✅ Mouse move handler for zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 80;
    const y = ((e.pageY - top - window.scrollY) / height) * 80;

    setZoomStyle({
      display: 'block',
      backgroundImage: `url(${activeImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%', // zoom level
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  return (
    <section className="container">
     
          <div
            className="main-image-wrapper position-relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={activeImage}
              alt="Product"
              width={500}
              height={500}
              className="img-fluid rounded shadow product-main-image"
            />

            {/* ✅ Zoom Window */}
            <div className="zoom-window" style={zoomStyle}></div>
          </div>

          {/* ✅ Thumbnails Slider */}
          <div className="mt-3">
            <Splide
              options={{
                perPage: 4,
                gap: '1rem',
                pagination: false,
                arrows: true,
                rewind: true,
                breakpoints: {
                  768: { perPage: 3 },
                  480: { perPage: 3 },
                },
              }}
              aria-label="Product Thumbnails"
            >
              {images.map((img, index) => (
                <SplideSlide key={index}>
                  <div
                    className={`thumb p-1 border rounded ${
                      activeImage === img ? 'border-success' : 'border-secondary'
                    }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        

      {/* ✅ Extra CSS */}
      <style jsx>{`
        .product-main-image {
          max-height: 500px;
          object-fit: contain;
          cursor: crosshair;
        }
        .thumb {
          cursor: pointer;
          transition: border 0.3s ease;
        }
        .thumb:hover {
          border-color: #057a37 !important;
        }
        .zoom-window {
          position: absolute;
          top: 0;
          left: 100%;
          margin-left: 15px;
          width: 400px;
          height: 400px;
          border: 1px solid #ddd;
          background-repeat: no-repeat;
          display: none;
          z-index: 10;
        }
          @media (max-width: 640px) {
          .zoom-window {
          left: 0%;
          margin-left: 0px;
          width: 300px;
          height: 300px;
        }
      `}</style>
    </section>
  );
};

export default ProductGallery;
