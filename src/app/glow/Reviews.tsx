"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa"; // ✅ down arrow use karo

interface Review {
    id: number;
    name: string;
    stars: number;
    text: string;
    date: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Anonymous",
        stars: 4,
        text: "Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives...",
        date: "5 days ago",
    },
    {
        id: 2,
        name: "Anonymous",
        stars: 4,
        text: "Clean, light flavor powered by nature. No artificial sweeteners or additives...",
        date: "5 days ago",
    },
    {
        id: 3,
        name: "Anonymous",
        stars: 4,
        text: "Refreshing taste and natural ingredients, very nice product...",
        date: "5 days ago",
    },
    {
        id: 4,
        name: "Anonymous",
        stars: 5,
        text: "Excellent taste and quality, highly recommended...",
        date: "3 days ago",
    },
    {
        id: 5,
        name: "Anonymous",
        stars: 3,
        text: "Good product but little expensive...",
        date: "2 days ago",
    },
];

export default function CustomerReviews() {
    const [showAll, setShowAll] = useState(false);

    const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

    return (
        <section className="reviews mb">
            <div className="container">
                <div className="text-center">
                    <h2>Customer Reviews</h2>
                </div>

                {displayedReviews.map((review) => (
                    <div key={review.id} className="mb-3">
                        <div className="d-flex align-items-center">
                            <span className="me-2">{review.name}</span>
                            {[...Array(5)].map((_, i) => (
                                <Image
                                    key={i}
                                    src={
                                        i < review.stars
                                            ? "/assets/img/green-star.png"
                                            : "/assets/img/b-star.png"
                                    }
                                    alt="star"
                                    width={15}
                                    height={15}
                                    className="img-fluid me-2"
                                />
                            ))}
                        </div>
                        <p>{review.text}</p>
                        <p>
                            <b>{review.date}</b>
                        </p>
                        <hr />
                    </div>
                ))}


                <div
                    className="fw-bold text-success d-inline-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Less reviews" : "See more reviews"}
                    <span
                        className={`ms-2 transition-transform`}
                        style={{
                            display: "inline-block",
                            marginTop: "2px",
                            transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                        }}
                    >
                        <FaChevronDown />
                    </span>
                </div>
                <div className="text-center">
                    <button className="btn-review">Write a review</button>
                </div>
            </div>
        </section>
    );
}
