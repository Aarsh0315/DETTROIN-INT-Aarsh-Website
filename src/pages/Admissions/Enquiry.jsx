import AdmissionEnquiry from "../../components/AdmissionEnquiry/AdmissionEnquiry";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TopBar from "../../components/TopBar/TopBar";

function Enquiry() {
  return (
    <>
        <TopBar />
        <Navbar />
      <AdmissionEnquiry />
      <Footer />
    </>
  );
}

export default Enquiry;