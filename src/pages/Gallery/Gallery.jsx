import "./Gallery.css";

import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import PageBanner from "../../components/PageBanner/PageBanner";
import GallerySection from "../../components/GallerySection/GallerySection";
import Footer from "../../components/Footer/Footer";

function Gallery() {
  return (
    <>
      <TopBar />

      <Navbar />

      <PageBanner title="Gallery" />

      <GallerySection />

      <Footer />
    </>
  );
}

export default Gallery;