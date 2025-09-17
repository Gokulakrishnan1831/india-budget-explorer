import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const quickLinks = [
    { name: 'maharashtra', href: 'https://openbudgetsindia.org/dataset?q=maharashtra' },
    { name: 'police', href: 'https://openbudgetsindia.org/dataset?q=police' },
    { name: 'union budget 2023-24', href: 'https://openbudgetsindia.org/dataset?q=union+budget+2023-24' },
    { name: 'assam budget 2023-24', href: 'https://openbudgetsindia.org/dataset?q=assam+budget+2023-24' },
  ];

  return (
    <section className="bg-secondary text-foreground py-16 md:py-20">
      <div className="container px-6 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight font-display tracking-tight text-center max-w-4xl mx-auto">
            Making India's Budgets open, usable and easy to comprehend
          </h2>

          <div className="mt-8 max-w-3xl mx-auto">
            <form className="flex w-full shadow-sm">
              <input
                type="text"
                placeholder="Search from 22886 datasets"
                className="flex-grow w-full px-5 py-3 text-base text-foreground bg-input border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                aria-label="Search for Datasets"
              />
              <button
                type="submit"
                className="bg-gray-200 hover:bg-gray-300 text-foreground px-6 py-3 rounded-r-md flex items-center justify-center transition-colors border border-gray-300"
              >
                <div className="relative w-5 h-5 mr-2">
                   <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/home-search-icon-grey-8.svg?"
                    alt="Search Icon"
                    fill
                    className="object-contain"
                   />
                </div>
                <span className="font-medium text-base hidden sm:inline">Search</span>
              </button>
            </form>
          </div>

          <div className="mt-4 text-sm text-center text-muted-foreground flex items-center justify-center flex-wrap gap-x-2 gap-y-1">
            <span className="font-medium">Quick Links:</span>
            {quickLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <a href={link.href} className="underline hover:no-underline text-gray-700">
                  {link.name}
                </a>
                {index < quickLinks.length - 1 && <span className="text-gray-500">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;