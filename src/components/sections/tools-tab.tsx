'use client';

import type React from 'react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SecurityIcon from "@mui/icons-material/Security";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  lightImage: string;
  darkImage: string;
  title: string;
  description: string;
}

export default function LoanTabs() {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs: Tab[] = [
    {
      id: 'personal',
      label: 'Personal Loan',
      icon: <PersonIcon />,
      lightImage: '/images/loan1.png',
      darkImage: '/images/loan1.png',
      title: 'Personal Loan',
      description: 'Get instant personal loans with minimal documentation and fast approval.',
    },
    {
      id: 'business',
      label: 'Business Loan',
      icon: <BusinessIcon />,
      lightImage: '/images/loan2.png',
      darkImage: '/images/loan2.png',
      title: 'Business Loan',
      description: 'Flexible business loans for working capital and expansion.',
    },
    {
      id: 'home',
      label: 'Home Loan',
      icon: <HomeIcon />,
      lightImage: '/images/loan3.png',
      darkImage: '/images/loan3.png',
      title: 'Home Loan',
      description: 'Affordable home loans with easy EMI options.',
    },
    {
      id: 'property',
      label: 'Loan Against Property',
      icon: <AccountBalanceIcon />,
      lightImage: '/images/loan4.png',
      darkImage: '/images/loan4.png',
      title: 'Loan Against Property',
      description: 'Get high-value loan against your property.',
    },
    {
      id: 'insurance',
      label: 'Insurance',
      icon: <SecurityIcon />,
      lightImage: '/images/loan5.png',
      darkImage: '/images/loan5.png',
      title: 'Insurance',
      description: 'Protect your family with affordable insurance plans.',
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section id="tools" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-3">
            Our Financial Services
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            We provide a wide range of loan and insurance services with fast approval,
            low interest rates and minimal documentation.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border transition ${
                activeTab === tab.id
                  ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                  : 'bg-white text-[#374151] border-gray-300 hover:border-[#2563EB]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-2xl shadow-lg border">
          <Image
            src={currentTab.lightImage}
            alt={currentTab.title}
            width={500}
            height={300}
            className="rounded-xl"
          />

          <div>
            <h3 className="text-2xl font-bold text-[#374151] mb-3">
              {currentTab.title}
            </h3>
            <p className="text-[#6B7280] mb-5">
              {currentTab.description}
            </p>

            <button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-full">
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}