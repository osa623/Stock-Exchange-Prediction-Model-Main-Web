import HeroSection from '@/components/Pages/Home/HeroSection';
import CompanySection from '@/components/Pages/Home/CompanyProfiles';
import FeaturesSection from '@/components/Pages/Home/FeaturesSection';
import FinancialCharts from '@/components/Pages/Home/FinancialCharts';



export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <CompanySection />
      <FeaturesSection />
      <FinancialCharts/>
    </div>
  );
}