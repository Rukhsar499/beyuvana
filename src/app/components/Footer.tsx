'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and description */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd bhb">
              <Image src="/assets/img/logo.png" alt="Beyuvana" width={150} height={70} />
              <p className="text-white">
               At Beyuvana, we are committed to providing high-quality, plant-based collagen products that support your health and beauty goals. Our products are made with sustainably sourced ingredients and are cruelty-free, ensuring you receive the best without compromising your values. 
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd used">
              <h3 style={{ color: "#DFC362" }}>Quick Links</h3>
              <div className="footeil">
                <ul>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                  <li><Link href="/shipping-and-returns">Shipping & Returns</Link></li>
                  <li><Link href="/product">Product</Link></li>
                 
                </ul>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footrd">
              <h3 style={{ color: "#DFC362" }}>Legal Links</h3>
              <div className="footeil">
                <ul>
                  <li><Link href="#">Shipping Policy</Link></li>
                  <li><Link href="/">Refund Policy</Link></li>
                  <li><Link href="/terms-and-condition">Terms & Conditions</Link></li>
                  <li><Link href="#">Cancellation Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-4 col-12">
            <h3 style={{ color: "#DFC362" }}>Address</h3>
            <div className="d-flex">
              <Image src="/assets/img/location.png" alt="Location" width={20} height={20} className="me-2 imhg" />
              <p id="btd" style={{ color: "#fff" }}>#Kolkata, India</p>
            </div>
            <div className="d-flex">
              <Image src="/assets/img/call-calling.png" alt="Call" width={20} height={20} className="me-2 imhg" />
              <Link href="tel:+917003810162" className="rishra">
                <p id="btd" style={{ color: "#fff" }}>+917003810162</p>
              </Link>
            </div>
            <div className="d-flex">
              <Image src="/assets/img/sms-notification.png" alt="Email" width={20} height={20} className="me-2 imhg" />
              <Link href="mailto:info@beyuvana.com" className="rishra">
                <p id="btd" style={{ color: "#fff" }}>info@beyuvana.com</p>
              </Link>
            </div>
            <div className="social">
              <h3 style={{ color: "#DFC362" }}>Social Links</h3>
              <span><Link href="#"><Image src="/assets/img/facebook.png" width={27} height={27} alt="facebook" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/whatsapp.png" width={27} height={27} alt="whatsapp" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/twitter.png" width={27} height={27} alt="twitter" /></Link></span>
              <span><Link href="#"><Image src="/assets/img/instagram.png" width={27} height={27} alt="instagram" /></Link></span>
            </div>
          </div>
        </div>
        <hr className="hr-li" />
        <p className="copy text-center text-white">
          © {new Date().getFullYear()} Copyright@beyuvana • All Rights Reserved -{' '}
          <Link href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</Link>
        </p>
      </div>
   </section>
  
  );
  
}

export default Footer;
