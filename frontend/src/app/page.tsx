import HeroSection from '@/components/Pages/Home/HeroSection';
import AboutSection from '@/components/Pages/Home/AboutSection';
import FeaturesSection from '@/components/Pages/Home/FeaturesSection';


export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </div>
  );
}