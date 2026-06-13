import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import MessageSection from "@/components/MessageSection";
import AdmissionModal from "@/components/AdmissionModal";
import JourneyTimeline from "@/components/JourneyTimeline";
import AcademicsSection from "@/components/AcademicsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AdmissionSection from "@/components/AdmissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AdmissionModal />
    <Navbar />
    <HeroSection />
    <StatsBar />
    <AboutSection />
    <MessageSection />
    <JourneyTimeline />
    <AcademicsSection />
    <FacilitiesSection />
    <WhyChooseSection />
    {/* <GallerySection /> */}
    <AdmissionSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
