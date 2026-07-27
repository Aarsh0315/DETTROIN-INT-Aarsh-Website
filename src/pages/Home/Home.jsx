import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import VisionMission from "../../components/VisionMission/VisionMission";
import Academics from "../../components/Academics/Academics";
import Footer from "../../components/Footer/Footer";
import LearningEnvironment from "../../components/LearningEnvironment/LearningEnvironment";
import Holistic from "../../components/Holistic/Holistic";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonals/Testimonials";
import FAQ from "../../components/FAQ/FAQ";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <VisionMission />
      <Academics />
      <LearningEnvironment />
      <WhyChooseUs />
      <Holistic />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;