import Header from '@/components/sections/header';
import BannerNotification from '@/components/sections/banner-notification';
import HeroSection from '@/components/sections/hero-section';
import DashboardsSection from '@/components/sections/dashboards-section';
import GovernmentBudgetSection from '@/components/sections/government-budget-data';
import BudgetForumBasics from '@/components/sections/budget-forum-basics';
import BlogSection from '@/components/sections/blog-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BannerNotification />
      
      <main className="flex-1">
        <HeroSection />
        <DashboardsSection />
        <GovernmentBudgetSection />
        <BudgetForumBasics />
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
}