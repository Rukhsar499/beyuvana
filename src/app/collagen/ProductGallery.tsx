'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductGallery = () => {
  // ✅ Images array
  const images: string[] = [
    '/assets/img/collagen-pro.png',
    '/assets/img/1.png',
    '/assets/img/2.png',
    '/assets/img/3.png',
  ];

  const [activeImage, setActiveImage] = useState<string>(images[0]);

  return (
    <section className="container my-5">
      
        {/* Left Side: Main Image */}
        
          <div className="position-relative">
            {/* ✅ Main Image */}
            <Image
              src={activeImage}
              alt="Product"
              width={500}
              height={500}
              className="img-fluid rounded shadow product-main-image"
            />

            {/* ✅ Zoom lens */}
            <div className="zoom-container">
              <Image
                src={activeImage}
                alt="Zoomed Product"
                fill
                className="zoomed-img"
              />
            </div>
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
                  480: { perPage: 2 },
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
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
    

        {/* Right Side: Product Details */}
       

      {/* ✅ Extra CSS */}
      <style jsx>{`
        .product-main-image {
          max-height: 500px;
          object-fit: contain;
          cursor: zoom-in;
        }
        .thumb {
          cursor: pointer;
          transition: border 0.3s ease;
        }
        .thumb:hover {
          border-color: #057a37 !important;
        }
        .zoom-container {
          display: none; /* optional: if you want a hover zoom preview */
        }
      `}</style>
    </section>
  );
};

export default ProductGallery;
