import { useState } from "react";
import "./GallerySection.css";
import galleryData from "./galleryData";
import { FaTimes } from "react-icons/fa";

function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "Academics",
    "Sports",
    "Events",
    "Campus",
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="gallery-section">

      <div className="container">

        <div className="gallery-header">

          <span className="section-subtitle">
            OUR MEMORIES
          </span>

          <h2>School Gallery</h2>

          <p>
            Discover memorable moments from our classrooms,
            sports, cultural events, and campus life.
          </p>

        </div>

        {/* Category Buttons */}

        <div className="gallery-filter">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>

        {/* Gallery Grid */}

        <div className="gallery-grid">

          {filteredImages.map((item) => (

            <div
              className="gallery-card"
              key={item.id}
              onClick={() =>
                setSelectedImage(item.image)
              }
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <h3>{item.title}</h3>

                <span>{item.category}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Lightbox */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          <img
            src={selectedImage}
            alt="Gallery"
          />

        </div>

      )}

    </section>
  );
}

export default GallerySection;