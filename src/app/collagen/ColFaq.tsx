'use client';

import { useState } from 'react';


interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Collagen?',
    answer:
      'Naturally flavored with plant extracts and stevia for a refreshing taste—no artificial sweeteners or additives. Clean, light flavor powered by nature.',
  },
  {
    question: 'When should I start taking Collagen supplements?',
    answer:
      'You can start collagen supplements anytime after your mid-20s when natural collagen production begins to slow down.',
  },
  {
    question: 'How should I consume this supplement?',
    answer:
      'Mix one scoop in water, juice, or your favorite smoothie daily.',
  },
  {
    question: 'Does this Collagen Powder contain sugar?',
    answer:
      'No, it contains no added sugar. It is sweetened naturally with stevia.',
  },
  {
    question: 'What is the difference between Marine Collagen and Fish or Bovine Collagen?',
    answer:
      'Marine Collagen is derived from fish skin and scales, while Bovine Collagen is sourced from cow hides. Marine Collagen is more bioavailable.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // ✅ First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="container my-5">
        <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item mb-3 p-3  ${
            openIndex === index ? 'bg-light-green' : 'bg-white'
          }`}
          style={{ backgroundColor: ' #d3e7d9' }}
        >
          {/* Question Row */}
          <button
            className="w-100 d-flex justify-content-between align-items-center bg-transparent border-0 p-2"
            onClick={() => toggleFAQ(index)}
          >
            <div className="d-flex align-items-center gap-3">
              <span className="fw-bold text-success">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="fw-bold">{faq.question}</span>
            </div>
            <span className="fs-4 fw-bold text-success">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="mt-2 ps-5 pe-3">
              <p className="text-muted">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}

      {/* ✅ Extra CSS */}
      <style jsx>{`
        .faq-item {
          transition: all 0.3s ease-in-out;
          border-radius:40px;
        }
        .bg-light-green {
          background-color: #eaf6ee;
        }
        button:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>
    </section>
  );
};

export default FAQAccordion;
