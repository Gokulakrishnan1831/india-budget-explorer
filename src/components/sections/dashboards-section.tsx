import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Badge = ({ status }: { status: 'NEW' | 'UPDATED' }) => {
  const isNew = status === 'NEW';
  return (
    <div
      className={`absolute top-0 left-0 -translate-y-1/2 translate-x-4 px-2 py-0.5 rounded-sm text-badge ${
        isNew
          ? 'bg-badge-new text-badge-new-foreground'
          : 'bg-badge-updated text-badge-updated-foreground'
      }`}
    >
      {status}
    </div>
  );
};

const DashboardCard = ({
  href,
  badge,
  imageSrc,
  imageAlt,
  imagePos,
  title,
  description,
  isTall,
  isSmall,
}: {
  href: string;
  badge?: 'NEW' | 'UPDATED';
  imageSrc: string | null;
  imageAlt: string;
  imagePos: 'left' | 'right';
  title: string;
  description: string;
  isTall?: boolean;
  isSmall?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`relative block bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${
        isTall ? 'min-h-[260px]' : isSmall ? 'flex-1' : 'min-h-[220px]'
      }`}
    >
      {badge && <Badge status={badge} />}
      <div
        className={`flex h-full items-center ${
          isSmall ? 'p-6' : 'p-8'
        } ${
          imagePos === 'left' ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'
        } gap-6`}
      >
        <div
          className={`flex-shrink-0 w-full md:w-1/3 h-32 md:h-full rounded ${imageSrc ? '' : 'bg-gray-200'}`}
          style={
            imageSrc
              ? {
                  backgroundImage: `url(${imageSrc})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }
              : {}
          }
          role="img"
          aria-label={imageAlt}
        ></div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default function DashboardsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground">Dashboards</h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
            Find relevant budget and spending data at the Union, State, and District levels in these dashboards, designed to help you navigate the labyrinth of fiscal data through visualisations and analytical insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard
            href="https://union2024i.openbudgetsindia.org/en/"
            badge="NEW"
            imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/union-12.png?"
            imageAlt="Bar chart visualization for Union Budget"
            imagePos="left"
            title="Union Budget Explorer 2024-25(I)"
            description="Explore the Union Budget 2024-25(I) using visualisations. Data and visualisations can be downloaded for analysis and research."
            isTall
          />
          <DashboardCard
            href="https://constituency.openbudgetsindia.org/"
            badge="NEW"
            imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/constituency-5.gif?"
            imageAlt="Stacked bar charts for Constituency Dashboard"
            imagePos="left"
            title="Constituency Dashboard"
            description="Explore Constituency-wise fiscal information on development schemes. Relevant data and visualisations can be downloaded for analysis and research."
            isTall
          />
          <DashboardCard
            href="https://district.openbudgetsindia.org/"
            badge="NEW"
            imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/district-14.png?"
            imageAlt="Horizontal bar chart for District Dashboard"
            imagePos="right"
            title="District Dashboard"
            description="Explore District-wise fiscal information on development schemes. Relevant data and visualisations can be downloaded for analysis and research."
          />
          <DashboardCard
            href="https://schemes.openbudgetsindia.org/"
            badge="UPDATED"
            imageSrc={null} // Asset not provided
            imageAlt="Line chart for Scheme Dashboard"
            imagePos="right"
            title="Scheme Dashboard"
            description="Compare aggregate budget indicators across different states and years for thirteen social and economic sectors through simple and interactive visualisations."
          />
          <DashboardCard
            href="https://sectors.openbudgetsindia.org/"
            badge="UPDATED"
            imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/sequence-scatter-8.png?"
            imageAlt="Bubble chart for Sector Dashboard"
            imagePos="right"
            title="Sector Dashboard"
            description="Compare aggregate budget indicators across different states and years for thirteen social and economic sectors through simple and interactive visualisations."
          />
          <div className="flex flex-col gap-6">
            <DashboardCard
              href="https://assam2023.openbudgetsindia.org/en/"
              badge="NEW"
              imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/sequence-pie-9.jpg?"
              imageAlt="Pie chart for Assam Budget Explorer"
              imagePos="right"
              title="Assam Budget Explorer 2023-24"
              description=""
              isSmall
            />
            <DashboardCard
              href="https://odisha2022.openbudgetsindia.org/en/"
              imageSrc={null} // Asset not provided
              imageAlt="Line chart for Odisha Budget Explorer"
              imagePos="right"
              title="Odisha Budget Explorer 2022-23"
              description=""
              isSmall
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dashboards"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Dashboards
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}