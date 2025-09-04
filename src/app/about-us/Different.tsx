"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

interface CardItem {
    id: number;
    title: string;
    text: string;
    img: string;
}

const cards: CardItem[] = [
    { id: 1, title: "Plant Based Activities", text: "Pure natural", img: "/assets/img/vegan1.png" },
    { id: 2, title: "No Animal Products", text: "Cruelty-free", img: "/assets/img/poison1.png" },
    { id: 3, title: "Ayurvedic + Modern", text: "Best of both worlds", img: "/assets/img/herbal-treatment.png" },
    { id: 4, title: "Safe Daily Use", text: "Long term safe", img: "/assets/img/insurance1.png" },
    { id: 5, title: "High Quality Ingredients", text: "Premium quality", img: "/assets/img/ingredient1.png" },
];

export default function WhatMakesUsDifferent() {
    const [activeId, setActiveId] = useState<number>(1); // default active card id

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // very small
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Container className="mb diff">
            <h3 className="text-center mb-4 fw-bold">What Makes Us Different?</h3>
            <Slider {...settings}>
                {cards.map((card) => (
                    <div key={card.id} className="p-2">
                        <div
                            className={`card h-100 text-center shadow-sm rounded-4 p-3 ${activeId === card.id ? "border border-success" : ""
                                }`}
                            style={{
                                cursor: "pointer",
                                backgroundColor: activeId === card.id ? "#F0FFF9" : "white",
                                transition: "all 0.3s ease",
                            }}
                            onClick={() => setActiveId(card.id)}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        >
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={60}
                                height={60}
                                className="mx-auto mb-3"
                            />
                            <h6 className="fw-bold">{card.title}</h6>
                            <p className="small text-muted">{card.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
}
