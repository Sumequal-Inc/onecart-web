'use client';
import { CloseIcon, MenuIcon } from '@/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import ThemeToggle from './theme-toggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white dark:bg-dark-primary border-b dark:border-gray-800 border-gray-100 sticky top-0 z-50 py-1 lg:py-2">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo1.png"
                className="block dark:hidden object-contain"
                alt="One Cart Logo"
                width={100}
                height={50}
                priority
              />
              <Image
                src="/images/logo-white.svg"
                className="hidden dark:block object-contain"
                alt="One Cart Logo"
                width={140}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Side */}
          <div className="flex items-center gap-4 justify-self-end">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="order-last lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Sign In */}
            <Link
              href="/signin"
              className="text-sm hidden lg:block font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Sign In
            </Link>

            {/* Get Started Button */}
            <Link
              href="/signup"
              className="hidden lg:inline-flex items-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-sm text-white rounded-full h-10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}