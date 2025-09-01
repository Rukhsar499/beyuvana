"use client";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

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
    profileImg: "/assets/img/ramesh.png",  // ✅ Fixed
    product: "Collagen Builder - Plant Based Premium",
    productImg: "/assets/img/pink-box.png",  // ✅ Fixed
  },
  {
    id: 2,
    name: "Shivangi Dhar",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/shivangi.png", // ✅ Fixed
    product: "Advanced Glow - Nourishing Formula",
    productImg: "/assets/img/green-box.webp",  // ✅ Fixed
  },
  {
    id: 3,
    name: "Anjan Dutta",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/anjan.png", // ✅ Fixed
    product: "Collagen Builder - Plant Based Premium",
    productImg: "/assets/img/pink-box.png",  // ✅ Fixed
  },
  {
    id: 4,
    name: "Priya Sharma",
    text: "Light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    profileImg: "/assets/img/shivangi.png", // ✅ Fixed (typo tha "asets")
    product: "Hair & Skin Booster",
    productImg: "/assets/img/green-box.webp",  // ✅ Fixed
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

  // 3 cards ek sath show karna
  const visibleCards = testimonials.slice(activeIndex, activeIndex + 3);
  if (visibleCards.length < 3) {
    visibleCards.push(...testimonials.slice(0, 3 - visibleCards.length));
  }

  return (
    <Container className=" position-relative mb">
      {/* Heading + Arrows */}
      <div className="d-flex justify-content-between  mb-4">
        <h2 className="text-center">Customer Testimonials</h2>
        <div>
          <Button
            variant="light"
            className="me-2 rounded-circle shadow-sm"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </Button>
          <Button
            variant="success"
            className="rounded-circle shadow-sm"
            onClick={handleNext}
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>

      {/* Cards */}
      <Row>
        {visibleCards.map((t, index) => (
          <Col md={4} sm={6} xs={12} key={t.id} className="mb-4">
            <div
              className={`p-4 t-box h-100 rounded-4 ${
                index === 0
                  ? "border border-success  shadow-sm"
                  : ""
              }`}
              style={{ transition: "0.3s" }}
            >
              <div className="d-flex align-items-center mb-3">
                <Image
                  src={t.profileImg}
                  alt={t.name}
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <h5 className="fw-bold mb-0">{t.name}</h5>
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
              <p className="text-muted small">{t.text}</p>
              <div className="mt-3 text-success fw-semibold d-flex">
                 <Image
                  src={t.productImg}
                  alt={t.product}
                  className="me-3"
                  width="40"
                  height="40"
                />
                {t.product}
                </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
