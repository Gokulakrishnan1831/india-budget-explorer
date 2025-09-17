"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#2d3442] text-white">
      <div className="container flex h-[72px] items-center justify-between">
        <div className="flex shrink-0 items-center gap-4">
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link href="/">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/Logo_OBI4-31-1.png?"
              alt="Open Budgets India header logo"
              width={164}
              height={33}
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-base font-medium hover:text-gray-300">OBI Platform</a>
            <a href="#" className="text-base font-medium hover:text-gray-300">Dashboards</a>
            <a href="#" className="text-base font-medium hover:text-gray-300">Budget Datasets</a>
          </nav>
          
          <a
            href="https://budgetbasics.openbudgetsindia.org/"
            className="whitespace-nowrap rounded-md bg-[#6366f1] px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500"
          >
            Budget Basics
          </a>
        </div>
      </div>
      {/* Mobile menu panel would be implemented here based on isMenuOpen state */}
    </header>
  );
};

export default Header;