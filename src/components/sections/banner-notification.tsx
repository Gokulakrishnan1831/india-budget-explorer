"use client";

import Image from "next/image";
import Link from "next/link";

const BannerNotification = () => {
  return (
    <div className="bg-[#2B3A67] text-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center">
            <span className="w-0.5 h-6 bg-primary mr-3 lg:mr-4 shrink-0"></span>
            <Link
              href="https://union.openbudgetsindia.org/"
              className="text-sm font-medium text-white hover:underline"
            >
              Union Budget Explorer 2023-24 is NOW LIVE!
            </Link>
          </div>

          <div className="flex flex-col items-end mt-3 lg:mt-0 lg:flex-row lg:items-center lg:space-x-8">
            <span className="bg-destructive text-destructive-foreground text-xs font-semibold uppercase px-2 py-1 rounded-sm lg:order-1">
              New
            </span>

            <div className="flex items-center space-x-2 mt-2 lg:mt-0 lg:order-2 w-full justify-center lg:w-auto">
              <button aria-label="Previous" className="p-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/arrow-left-3.svg?"
                  alt="Previous"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
              </button>
              <span className="text-sm font-medium">2/5</span>
              <button aria-label="Next" className="p-1">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/right-5.svg?"
                  alt="Next"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNotification;