import "./Contact.css";

import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import PageBanner from "../../components/PageBanner/PageBanner";
import ContactSection from "../../components/ContactSection/ContactSection";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

function Contact() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="Contact Us" />

      <ContactSection />

      <GoogleMap />

      <Footer />
    </>
  );
}

export default Contact;