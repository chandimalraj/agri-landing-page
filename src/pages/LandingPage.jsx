import React from "react";
import "./LandingPage.css";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import HeroSection from "../sections/HeroSection/HeroSection";
import DetailsSection from "../sections/DetailsSection/DetailsSection";
import ProcessSection from "../sections/ProcessSection/ProcessSection";
import FeatureSection from "../sections/FeatureSection/FeatureSection";
import SignUpSection from "../sections/SignUpSection/SignUpSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import FooterSection from "../sections/FooterSection/FooterSection";

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <ResponsiveAppBar />
      <HeroSection />
      <DetailsSection/> 
      <ProcessSection/>
      <FeatureSection/>
      <SignUpSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}
