import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import Footer from "../../components/Footer/Footer";

function Enquiry() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="Admission Enquiry" />

      <section className="container" style={{ padding: "80px 0" }}>
        <h2>Admission Enquiry</h2>
        <p>
          We'd love to hear from you. Fill out the enquiry form and our
          admissions team will get in touch with you.
        </p>

        {/* We'll replace this with a modern form in the next step */}
      </section>

      <Footer />
    </>
  );
}

export default Enquiry;