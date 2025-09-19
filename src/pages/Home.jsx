import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Navbar  */}
      <Navbar />
      {/* Main  */}
      <div>
        {/* Hero section  */}
        <HeroSection />
      </div>

      {/* Footer  */}
    </div>
  );
};
