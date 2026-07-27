import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import Footer from "../../components/Footer/Footer";

function Procedure() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="Admission Procedure" />

      <section className="container" style={{ padding: "80px 0" }}>
        <h2>Admission Procedure</h2>

        <ol>
          <li>Submit the admission enquiry form.</li>
          <li>Visit the school campus.</li>
          <li>Meet the admissions counsellor.</li>
          <li>Submit the required documents.</li>
          <li>Complete the admission formalities.</li>
        </ol>
      </section>

      <Footer />
    </>
  );
}

export default Procedure;