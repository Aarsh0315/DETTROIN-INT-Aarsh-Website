import "./About.css";

import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import AboutSection from "../../components/AboutSection/AboutSection";
import VisionMission from "../../components/VisionMission/VisionMission";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="About Us" />

      <AboutSection />

      <VisionMission />

      <Footer />
    </>
  );
}

export default About;