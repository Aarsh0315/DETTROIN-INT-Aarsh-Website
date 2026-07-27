import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/Footer/Footer";

function Blog() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="School Blog" />
      <BlogSection />
      <Footer />
    </>
  );
}

export default Blog;