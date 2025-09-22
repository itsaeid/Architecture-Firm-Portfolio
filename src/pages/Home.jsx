import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PortfolioList from "../components/PortfolioList";

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Navbar  */}
      <Navbar />
      {/* Main  */}

      {/* Hero section  */}
      <HeroSection />
      <About />
      <div>
        
        <PortfolioList />
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
};
