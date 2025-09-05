'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

const MySplideSlider = () => {
  return (
    <section className='mb'>
    <div className='container'>
      <div className='text-center'>
     <h2 style={{ color: "#1A2819" }}>
            Why You Need BEYUVANA —{" "}
            <span style={{ color: "#0C4B33" }}>Right Now</span>
          </h2>
          <p>
            BEYUVANA gives your body everything it needs to rebuild collagen
            naturally:
          </p>
      </div>
    <Splide
      options={{
        perPage: 5,
        type: 'loop',
        arrows: false,
        rewind: true,
        gap: '1rem',
        breakpoints: {
          640: {
            arrows: false,
            perPage: 2,
          },
          1024: {
            perPage: 2,
          },
        },
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
         <div className="why-img text-center">
                  <Image
                    src="/assets/img/lysine.png"
                    alt="L-Lysine"
                    width={230}
                    height={400}
                    className="img-fluid mx-auto"
                  />
                  <div className="why-txt">
                    <h3>L-Lysine</h3>
                    <Image
                      src="/assets/img/add.png"
                      alt="Add"
                      width={20}
                      height={20}
                      className="img-fluid"
                    />
                    <h3>L-Proline</h3>
                    <hr style={{ color: "#fff" }} />
                    <p style={{ color: "#fff" }}>Core collagen amino acids</p>
                  </div>
                </div> 
      </SplideSlide>
     <SplideSlide>
         <div className="why-img text-center">
                  <Image
                    src="/assets/img/amla.png"
                    alt="Amla"
                    width={230}
                    height={400}
                    className="img-fluid mx-auto"
                  />
                  <div className="why-txt">
                    <h3>Amla</h3>
                    <Image
                      src="/assets/img/add.png"
                      alt="Add"
                      width={20}
                      height={20}
                      className="img-fluid"
                    />
                    <h3>Vitamin C</h3>
                    <hr style={{ color: "#fff" }} />
                    <p style={{ color: "#fff" }}>Boosts natural collagen production</p>
                  </div>
                </div> 
      </SplideSlide>
      <SplideSlide>
         <div className="why-img text-center">
                  <Image
                    src="/assets/img/bambo.png"
                    alt="L-Lysine"
                    width={230}
                    height={400}
                    className="img-fluid mx-auto"
                  />
                  <div className="why-txt">
                    <h3>Bamboo Silica</h3>
                    <Image
                      src="/assets/img/add.png"
                      alt="Add"
                      width={20}
                      height={20}
                      className="img-fluid"
                    />
                    <h3>Glutathione</h3>
                    <hr style={{ color: "#fff" }} />
                    <p style={{ color: "#fff" }}>For glow, repair and strength</p>
                  </div>
                </div> 
      </SplideSlide>
      <SplideSlide>
         <div className="why-img text-center">
                  <Image
                    src="/assets/img/biotin.png"
                    alt="L-Lysine"
                    width={230}
                    height={400}
                    className="img-fluid mx-auto"
                  />
                  <div className="why-txt">
                    <h3>Hyaluronic Acid</h3>
                    <Image
                      src="/assets/img/add.png"
                      alt="Add"
                      width={20}
                      height={20}
                      className="img-fluid"
                    />
                    <h3>Biotin</h3>
                    <hr style={{ color: "#fff" }} />
                    <p style={{ color: "#fff" }}>For hydration, firmness & beauty</p>
                  </div>
                </div> 
      </SplideSlide>
      <SplideSlide>
         <div className="why-img text-center">
                  <Image
                    src="/assets/img/gotu.png"
                    alt="L-Lysine"
                    width={230}
                    height={400}
                    className="img-fluid mx-auto"
                  />
                  <div className="why-txt">
                    <h3>Ashwagandha</h3>
                    <Image
                      src="/assets/img/add.png"
                      alt="Add"
                      width={20}
                      height={20}
                      className="img-fluid"
                    />
                    <h3>Gotu Kola</h3>
                    <hr style={{ color: "#fff" }} />
                    <p style={{ color: "#fff" }}>Reduces stress-aging and supports hormones</p>
                  </div>
                </div> 
      </SplideSlide>
    </Splide>
    <div className="green mt-4 text-center">
            <h3 style={{ color: "#fff" }}>
              One sachet a day ={" "}
              <span className="heal">inner healing + outer glow</span>
            </h3>
            <p style={{ color: "#fff" }}>Start early. Stay youthful longer.</p>
          </div>
    </div>
    </section>
  );
};

export default MySplideSlider;