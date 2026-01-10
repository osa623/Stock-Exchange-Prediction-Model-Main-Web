import HeroSection from '@/components/Pages/Home/HeroSection';
import CompanySection from '@/components/Pages/Home/CompanyProfiles';
import FinancialReport from '@/components/Pages/Home/FinancialReport';
import FinancialCharts from '@/components/Pages/Home/FinancialCharts';
import FeedbackSection from '@/components/Pages/Home/FeedbackSection';




export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <CompanySection />
      <FinancialReport />
      <FinancialCharts/>
      <FeedbackSection/>
    </div>
  );
}