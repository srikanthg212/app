import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ProgramsSection";
import ScheduleSection from "./components/ScheduleSection";
import WhyUsSection from "./components/WhyUsSection";
import GallerySection from "./components/GallerySection";
import ApproachesSection from "./components/ApproachesSection";
import TherapistsSection from "./components/TherapistsSection";
import TestimonialSection from "./components/TestimonialSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ScheduleSection />
        <WhyUsSection />
        <GallerySection />
        <ApproachesSection />
        <TherapistsSection />
        <TestimonialSection />
        <FinalCTASection />
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
