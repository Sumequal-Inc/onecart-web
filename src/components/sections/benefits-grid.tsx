import Image from "next/image";
import React from "react";

export default function BenefitsGrid() {
  return (
    <section className="bg-[#0F172A] py-14 md:py-24">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="max-w-lg mx-auto mb-3 font-bold text-white text-3xl md:text-4xl">
            Why Choose One Cart Financial Services?
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-6 text-white/70">
            We provide fast, secure and hassle-free loan services with minimum
            documentation and quick approval process.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Left Card */}
          <div className="bg-[#2563EB] rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Quick Loan Approval
              </h3>
              <p className="text-white/80">
                Apply for loans with minimal documentation and get fast approval.
                Our team ensures a smooth and quick loan process for every customer.
              </p>
            </div>

            <Image
              src="/images/loan2.png"
              alt="Loan Process"
              width={400}
              height={300}
              className="mt-6"
            />
          </div>

          {/* Right Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl text-white">
              <h4 className="font-semibold text-lg mb-2">Low Interest Rates</h4>
              <p className="text-white/70 text-sm">
                We offer competitive interest rates for all types of loans.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl text-white">
              <h4 className="font-semibold text-lg mb-2">Fast Processing</h4>
              <p className="text-white/70 text-sm">
                Quick verification and fast loan disbursal process.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl text-white">
              <h4 className="font-semibold text-lg mb-2">Secure Process</h4>
              <p className="text-white/70 text-sm">
                Your data and documents are completely safe and secure.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl text-white">
              <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
              <p className="text-white/70 text-sm">
                Our team is always available to help you with loan queries.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}