"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";
import { useState } from "react";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  // FAQ data
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What types of loans do you provide?",
    answer:
      "We provide Personal Loans, Business Loans, Home Loans, Loan Against Property and Insurance services. Our team helps you choose the best option based on your needs.",
  },
  {
    id: 2,
    question: "What documents are required for a loan?",
    answer:
      "Basic documents include Aadhaar Card, PAN Card, Bank Statement, Salary Slip (for salaried) and Business Proof (for business owners). Our team will guide you through the process.",
  },
  {
    id: 3,
    question: "How long does loan approval take?",
    answer:
      "Loan approval usually takes 24 to 72 hours depending on the document verification and loan type.",
  },
  {
    id: 4,
    question: "What is the interest rate on loans?",
    answer:
      "Interest rates depend on your profile, income, loan amount and tenure. We always try to provide the lowest possible interest rate to our customers.",
  },
  {
    id: 5,
    question: "How can I apply for a loan?",
    answer:
      "You can apply online through our website by clicking on the Apply Loan button or you can contact our team directly. Our representative will guide you through the complete process.",
  },
  {
    id: 6,
    question: "Is my data secure?",
    answer:
      "Yes, we follow a secure and confidential process. Your documents and personal information are completely safe with us.",
  },
];

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Answered all frequently asked questions, Still confused? feel free
            contact with us
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
