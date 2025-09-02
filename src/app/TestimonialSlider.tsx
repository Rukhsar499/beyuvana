"use client";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  profileImg: string;
  product: string;
  productImg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/ramesh.png",
    product: "Collagen Builder - Plant Based Premium",
    productImg: "/assets/img/pink-box.png",
  },
  {
    id: 2,
    name: "Shivangi Dhar",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/shivangi.png",
    product: "Advanced Glow - Nourishing Formula",
    productImg: "/assets/img/green-box.webp",
  },
  {
    id: 3,
    name: "Anjan Dutta",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/anjan.png",
    product: "Collagen Builder - Plant Based Premium",
    productImg: "/assets/img/pink-box.png",
  },
  {
    id: 4,
    name: "Priya Sharma",
    text: "Light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/shivangi.png",
    product: "Hair & Skin Booster",
    productImg: "/assets/img/green-box.webp",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Responsive ke liye ek hi card logic rakha
  const visibleCards = testimonials.slice(activeIndex, activeIndex + 3);
  if (visibleCards.length < 3) {
    visibleCards.push(...testimonials.slice(0, 3 - visibleCards.length));
  }

  return (
    <Container className="position-relative mb-5">
      {/* Heading + Arrows */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="mb-3 mb-md-0">Customer Testimonials</h2>
        <div>
          <Button
            variant="light"
            className="me-2  shadow-sm"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </Button>
          <Button
            variant="success"
            className=" shadow-sm"
            onClick={handleNext}
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>

      {/* Cards */}
      <Row>
        {visibleCards.map((t, index) => (
          <Col
            lg={4}  // 3 cards desktop
            md={6}  // 2 cards tablet
            sm={12} // 1 card mobile
            key={t.id}
            className="mb-4"
          >
            <div
              className={`p-4 t-box h-100 rounded-4 ${
                index === 0 ? "border border-success shadow-sm" : ""
              }`}
              style={{ transition: "0.3s" }}
            >
              <div className="d-flex align-items-center mb-3">
                <Image
                  src={t.profileImg}
                  alt={t.name}
                  className="rounded-circle me-3"
                  width={60}
                  height={60}
                />
                <div>
                  <h5 className="fw-bold mb-0">{t.name}</h5>
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
              <p className="text-muted small">{t.text}</p>
              <div className="mt-3 text-success fw-semibold d-flex align-items-center">
                <Image
                  src={t.productImg}
                  alt={t.product}
                  className="me-2"
                  width={40}
                  height={40}
                />
                <span>{t.product}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
