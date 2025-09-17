import Image from "next/image";
import Link from "next/link";

const ViewAllDashboardsButton = () => {
  return (
    <div className="mt-12 text-center">
      <Link
        href="/dashboards"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        View All Dashboards
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0590e9d4-b4e8-4261-9f2d-b6e71c12d99e-openbudgetsindia-org/assets/svgs/arrow-right-white-9.svg?"
          alt="Arrow right icon"
          width={16}
          height={16}
          className="h-4 w-4"
        />
      </Link>
    </div>
  );
};

export default ViewAllDashboardsButton;