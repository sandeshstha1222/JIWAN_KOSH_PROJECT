import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import DonateSection from "./DonateSection";
import FundraiseSection from "./FundraiseSection";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import Quote from "./Quote";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <FundraiseSection />
      <DonateSection />
      <Quote />
      <Footer />
    </div>
  );
};
export default Homepage;
