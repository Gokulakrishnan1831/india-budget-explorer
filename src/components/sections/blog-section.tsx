import Image from 'next/image';

const BlogCard = ({
  href,
  imageUrl,
  imageAlt,
  title,
  description,
}: {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-card rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)] overflow-hidden transition-shadow duration-300 hover:shadow-lg"
  >
    <div className="relative h-56 w-full">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
    <div className="p-8">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </a>
);

export default function BlogSection() {
  const blogPosts = [
    {
      href: "https://medium.com/@openbudgetsin/need-for-sdg-linked-outcome-budgeting-in-india-a-case-of-assam-83722a6b4055",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/sdg_budget-18.jpg?",
      title: "Need for SDG-linked outcome budgeting in India: A case of Assam",
      description: "The article presents the case of Assam which has been a front runner to prepare SDG linked outcome budgets that would help in strengthening budget accountability in the State.",
    },
    {
      href: "https://medium.com/openbudgetsindia/budget-2023-24-need-for-greater-visibility-on-budget-flows-and-utilisation-76ec17b359ea",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/need_for_greater_visib-19.png?",
      title: "Budget 2023-24: Need for greater visibility on budget flows and utilisation",
      description: "Union Budget outlays dominate the public discourse while the issue of underutilised funds for centrally sponsored schemes goes unexamined, writes Nilachala Acharya and Subrat Das.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">
              New Developments on Budget Transparency and Accountability
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-2xl">
              Explore new developments in the field of budget transparency and accountability.
            </p>
          </div>
          <a
            href="https://medium.com/openbudgetsindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center bg-primary text-primary-foreground font-medium rounded-md px-6 py-3 whitespace-nowrap hover:bg-primary/90 transition-colors"
          >
            <span>View All Blogs</span>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/arrow-right-white-9.svg?"
              alt="Arrow right"
              width={16}
              height={16}
              className="ml-2"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.title}
              href={post.href}
              imageUrl={post.imageUrl}
              imageAlt={post.title}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}