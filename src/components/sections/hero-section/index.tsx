import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F8FAFC] dark:bg-[#020617] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <p className="text-[#1E3A8A] font-semibold mb-3">
              One Cart Financial Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#374151] dark:text-white leading-tight mb-5">
              Get Instant Loans <br />
              Easy Approval & <span className="text-[#2563EB]">Low Interest</span>
            </h1>

            <p className="text-[#6B7280] dark:text-gray-400 mb-6">
              We provide Personal Loans, Business Loans, Home Loans and Loan Against Property
              with minimal documentation and fast approval process.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <Link
                href="/apply-loan"
                className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-full font-medium shadow-md"
              >
                Apply for Loan
              </Link>

              <Link
                href="/contact"
                className="border border-[#D1D5DB] px-6 py-3 rounded-full font-medium text-[#374151] dark:text-gray-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1E3A8A]">500+</h3>
                <p className="text-sm text-[#6B7280]">Loans Approved</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E3A8A]">24 hrs</h3>
                <p className="text-sm text-[#6B7280]">Approval Time</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1E3A8A]">100%</h3>
                <p className="text-sm text-[#6B7280]">Secure Process</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
              <Image
                src="/images/loan3.png"
                alt="Loan Services"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 border">
              <p className="text-sm text-gray-500">Interest Rate</p>
              <h4 className="text-xl font-bold text-[#1E3A8A]">Starting @ 10.5%</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}