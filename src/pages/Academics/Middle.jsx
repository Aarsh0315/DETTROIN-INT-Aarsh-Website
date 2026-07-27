import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import AcademicDetails from "../../components/AcademicDetails/AcademicDetails";
import academicData from "../../components/AcademicDetails/academicData";
import Footer from "../../components/Footer/Footer";

function Middle() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="Middle School" />

      <AcademicDetails data={academicData.middle} />

      <Footer />
    </>
  );
}

export default Middle;