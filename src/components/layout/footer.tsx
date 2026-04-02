import { getCurrentYear } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <div className="relative z-10 py-16 xl:py-20">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-10 gap-x-8 lg:grid-cols-12">

            {/* Company Info with Logo */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo1.png"
                  alt="One Cart Logo"
                  width={50}
                  height={50}
                />
                <div>
                  <h2 className="text-xl font-bold text-white">
                    ONE CART
                  </h2>
                  <span className="text-xs tracking-[3px] text-gray-400">
                    FINANCIAL SERVICES
                  </span>
                </div>
              </Link>

              <p className="text-sm text-gray-400 mt-4">
                One Cart Financial Services provides Personal Loans, Business Loans,
                Home Loans and Insurance services with fast approval, low interest
                rates and minimal documentation.
              </p>
            </div>

            {/* Loan Services */}
            <div className="lg:col-span-2">
              <span className="block mb-5 text-sm text-gray-400">
                Loan Services
              </span>
              <nav className="flex flex-col space-y-3">
                <Link href="#" className="text-sm text-gray-400 hover:text-white">Personal Loan</Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">Business Loan</Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">Home Loan</Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">Loan Against Property</Link>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">Insurance</Link>
              </nav>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <span className="block mb-5 text-sm text-gray-400">
                Quick Links
              </span>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-sm text-gray-400 hover:text-white">Home</Link>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link>
                <Link href="/apply-loan" className="text-sm text-gray-400 hover:text-white">Apply Loan</Link>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link>
                <Link href="/faq" className="text-sm text-gray-400 hover:text-white">FAQ</Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <span className="block mb-5 text-sm text-gray-400">
                Contact Information
              </span>

              <div className="text-sm text-gray-400 space-y-3">

                {/* Phone */}
                <p className="flex items-center gap-2 hover:text-white">
                  <FaPhone />
                  <a href="tel:+919716817447">
                    +91 9716817447
                  </a>
                </p>

                {/* Email */}
                <p className="flex items-center gap-2 hover:text-white">
                  <FaEnvelope />
                  <a href="mailto:info@onecartfinance.com">
                    info@onecartfinance.com
                  </a>
                </p>

                {/* Address */}
                <p className="flex items-center gap-2 hover:text-white">
                  <FaMapMarkerAlt />
                  <a
                    href="https://maps.google.com/?q=H 141, H-BLOCK, NOIDA 63, 201301"
                    target="_blank"
                  >
                    H 141, H-BLOCK, NOIDA 63, 201301
                  </a>
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="py-5 text-center">
            <p className="text-sm text-gray-500">
              © {getCurrentYear()} One Cart Financial Services Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}