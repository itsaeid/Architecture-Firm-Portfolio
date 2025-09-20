import { About } from "../components/About";
import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Navbar  */}
      <Navbar />
      {/* Main  */}
      
        {/* Hero section  */}
        <HeroSection />
        <About />
     

      {/* Footer  */}
    </div>
  );
};
