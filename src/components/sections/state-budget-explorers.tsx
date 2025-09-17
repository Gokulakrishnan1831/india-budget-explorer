import React from 'react';

// Using <a> tags for external links as they navigate to subdomains.
// Note on assets: The design instruction mentions a pie chart for 'Assam Budget Explorer', but the provided assets only contain an area chart and a line chart.
// In accordance with asset handling priority, we are using the available area chart for the Assam card.

interface ExplorerCardProps {
  title: string;
  href: string;
  imageUrl: string;
  isNew?: boolean;
}

const ExplorerCard: React.FC<ExplorerCardProps> = ({ title, href, imageUrl, isNew }) => {
  return (
    <a
      href={href}
      className="block relative bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 flex-1 h-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      {isNew && (
        <div className="absolute top-0 left-0 bg-badge-new text-badge-new-foreground px-3 py-1.5 text-badge">
          NEW
        </div>
      )}
      <div className="flex items-center justify-between h-full">
        <div>
          <h4 className="text-xl font-semibold text-foreground tracking-tight">{title}</h4>
        </div>
        <div
          className="w-24 h-24 flex-shrink-0 bg-no-repeat bg-center bg-contain ml-4"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </a>
  );
};

const StateBudgetExplorers = () => {
  const explorers = [
    {
      title: "Assam Budget Explorer 2023-24",
      href: "https://assam2023.openbudgetsindia.org/en/",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/sequence-area-7.jpg?",
      isNew: true,
    },
    {
      title: "Odisha Budget Explorer 2022-23",
      href: "https://odisha2022.openbudgetsindia.org/en/",
      imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/images/sequence-line-10.jpg?",
      isNew: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <ExplorerCard {...explorers[0]} />
      <ExplorerCard {...explorers[1]} />
    </div>
  );
};

export default StateBudgetExplorers;