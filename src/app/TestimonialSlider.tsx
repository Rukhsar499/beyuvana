"use client";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  img: string;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    img: "/assets/img/ramesh.png",  // ✅ Fixed
    product: "Collagen Builder - Plant Based Premium",
  },
  {
    id: 2,
    name: "Shivangi Dhar",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    img: "/assets/img/shivangi.png", // ✅ Fixed
    product: "Advanced Glow - Nourishing Formula",
  },
  {
    id: 3,
    name: "Anjan Dutta",
    text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    img: "/assets/img/anjan.png", // ✅ Fixed
    product: "Collagen Builder - Plant Based Premium",
  },
  {
    id: 4,
    name: "Priya Sharma",
    text: "Light flavor powered by nature. Just the right hint of sweetness, naturally derived.",
    img: "/assets/img/shivangi.png", // ✅ Fixed (typo tha "asets")
    product: "Hair & Skin Booster",
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
    <Container className="my-5 position-relative">
      {/* Heading + Arrows */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-success fw-bold">Customer Testimonials</h3>
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
                  src={t.img}
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
              <div className="mt-3 text-success fw-semibold">{t.product}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
