import Image from 'next/image';

const budgetItems = [
  {
    title: 'Combined Budget',
    subtitle: '(Union & States)',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/combined-11.png?',
    link: 'https://openbudgetsindia.org/organization/about/combined-budget',
  },
  {
    title: 'Union Budget',
    imageUrl: null,
    link: 'https://openbudgetsindia.org/organization/about/union-budget',
  },
  {
    title: 'State Budgets',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/state-13.png?',
    link: 'https://openbudgetsindia.org/organization/about/states-budget',
  },
  {
    title: 'District Treasury Flows',
    imageUrl: null,
    link: 'https://openbudgetsindia.org/organization/about/district-treasuries',
  },
  {
    title: 'Municipal Corporation Budgets',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/municipal-15.png?',
    link: 'https://openbudgetsindia.org/organization/about/municipal-budget',
  },
];

const GovernmentBudgetSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground">Government-wise Budget Data</h2>
          <p className="mt-6 text-xl text-foreground max-w-[700px] mx-auto leading-relaxed">
            The OBI platform provides downloadable budget datasets for Union, State and Local Governments.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-nowrap items-stretch gap-[30px] mx-auto">
              {budgetItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex-shrink-0 w-[210px] bg-card border border-border rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-between text-center transition-shadow hover:shadow-lg"
                >
                  <div
                    className="h-[120px] w-full bg-no-repeat bg-center bg-contain"
                    style={{
                      backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'none',
                      backgroundColor: item.imageUrl ? 'transparent' : '#f0f2f5',
                    }}
                  />
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-foreground leading-tight">{item.title}</h4>
                    {item.subtitle && (
                      <p className="text-base text-foreground font-normal leading-tight">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </a>
              ))}
              <div className="md:hidden flex items-center justify-center flex-shrink-0 pl-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">Swipe</span>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/arrow-right-10.svg?"
                    width={16}
                    height={16}
                    alt="Swipe right icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentBudgetSection;