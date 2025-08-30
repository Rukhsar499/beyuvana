"use client";

import { FC, useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is BEYUVANA™?",
    answer:
      "BEYUVANA™ is a premium wellness brand offering plant-powered, science-backed formulations. Each product is carefully crafted with clinically researched nutrients, botanicals, and adaptogens that support skin radiance, collagen health, gut balance, and overall well-being—naturally and safely.",
  },
  {
    question: "Are BEYUVANA™ products vegetarian?",
    answer:
      "Yes! All our products are 100% vegetarian and carefully formulated to meet the highest quality standards.",
  },
  {
    question: "Are your products safe?",
    answer:
      "Absolutely. Our products undergo rigorous testing and are backed by scientific research to ensure both safety and effectiveness.",
  },
  {
    question: "Why is BEYUVANA™ better than serums or capsules?",
    answer:
      "Unlike traditional serums or capsules, our formulations are designed to work holistically, supporting your health from the inside out with powerful botanicals and adaptogens.",
  },
];

const FAQAccordion: FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  const handleToggle = (key: string) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="container my-5">
      <Accordion activeKey={activeKey}>
        {faqData.map((item, index) => {
          const key = index.toString();
          const isOpen = activeKey === key;

          return (
            <Accordion.Item eventKey={key} key={key}>
              <Accordion.Header onClick={() => handleToggle(key)}>
                <span className="me-auto">{item.question}</span>
                <span className="ms-2 fw-bold afe">{isOpen ? "−" : "+"}</span>
              </Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
