'use client';

import { useState } from 'react';


interface AccordionItem {
  title: string;
  content: string[];
}

const items: AccordionItem[] = [
  {
    title: 'Benefits',
    content: [
      'Boosts natural collagen production',
      'Deeply hydrates and plumps skin',
      'Brightens skin tone and fades pigmentation',
      'Reduces fine lines and wrinkles',
    ],
  },
  {
    title: 'Ingredients',
    content: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
  },
  {
    title: 'How to use',
    content: ['Step 1: Apply...', 'Step 2: Massage...', 'Step 3: Rinse...'],
  },
];

const ProductAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // ✅ Default first open

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); // Close if same clicked
  };

  return (
    <div className="accordion border-0" id="productAccordion">
      {items.map((item, index) => (
        <div key={index} className="border-bottom py-2">
          {/* Header */}
          <button
            className="w-100 d-flex justify-content-between align-items-center bg-transparent border-0 p-2"
            onClick={() => toggleAccordion(index)}
          >
            <span className="fw-bold text-pink">{item.title}</span>
            <span className="fs-4 plkj">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>

          {/* Content */}
          {openIndex === index && (
            <div className="px-3 pb-2">
              <ul className="mb-0">
                {item.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {/* ✅ Extra CSS */}
      <style jsx>{`
        button:focus {
          outline: none;
          box-shadow: none;
        }
          .text-pink, .plkj{
          color:#FF4646;}
        li {
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default ProductAccordion;
