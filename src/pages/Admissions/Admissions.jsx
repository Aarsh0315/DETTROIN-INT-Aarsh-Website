import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import AdmissionSection from "../../components/AdmissionSection/AdmissionSection";
import admissionData from "../../components/AdmissionSection/admissionData";
import Footer from "../../components/Footer/Footer";

function Admissions() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="Admissions" />

      <AdmissionSection data={admissionData.overview} />

      <Footer />
    </>
  );
}

export default Admissions;