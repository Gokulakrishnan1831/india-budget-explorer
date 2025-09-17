import Image from "next/image";

const BudgetForumBasics = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Budget Forum Card */}
          <div className="relative overflow-hidden rounded-lg bg-[#EEF8F2] shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)]">
            <div
              className="absolute inset-0 bg-right-bottom bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/obi-forum-card-background-16.svg?')",
                backgroundSize: "auto 100%",
              }}
            />
            <div className="relative z-10 flex min-h-[290px] flex-col p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Budget Forum
              </h3>
              <p className="mt-2 text-base text-muted-foreground md:max-w-[60%] lg:max-w-[340px]">
                Discuss, debate, and decode India’s budgets! Engage with a
                community of budget enthusiasts from across the world.
              </p>
              <a
                href="https://forum.openbudgetsindia.org/"
                className="mt-auto inline-flex w-fit items-center rounded-md bg-white py-3 px-5 text-sm font-medium text-primary transition-colors hover:bg-gray-100"
              >
                Join Forum
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/arrow-right-purple-11.svg?"
                  alt=""
                  width={14}
                  height={14}
                  className="ml-2"
                />
              </a>
            </div>
          </div>

          {/* Budget Basics Card */}
          <div className="relative overflow-hidden rounded-lg bg-[#FEF0F4] shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)]">
            <div
              className="absolute inset-0 bg-right-bottom bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/budgetbasics-card-background-mobile-17.svg?')",
                backgroundSize: "auto 100%",
              }}
            />
            <div className="relative z-10 flex min-h-[290px] flex-col p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Budget Basics
              </h3>
              <p className="mt-2 text-base text-muted-foreground md:max-w-[60%] lg:max-w-[340px]">
                Budget Basics aims to demystify concepts and processes of
                Government budgets in India, supplemented by short tutorial
                videos.
              </p>
              <a
                href="https://budgetbasics.openbudgetsindia.org/"
                className="mt-auto inline-flex w-fit items-center rounded-md bg-white py-3 px-5 text-sm font-medium text-primary transition-colors hover:bg-gray-100"
              >
                Get Started
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/arrow-right-purple-11.svg?"
                  alt=""
                  width={14}
                  height={14}
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetForumBasics;