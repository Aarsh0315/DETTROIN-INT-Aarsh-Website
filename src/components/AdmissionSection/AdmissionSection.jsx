import "./AdmissionSection.css";
import { FaCheckCircle } from "react-icons/fa";

function AdmissionSection({ data }) {
  return (
    <section className="admission-section">
      <div className="container">

        <div className="admission-wrapper">

          {/* Left Side Image */}
          <div className="admission-image">
            <img src={data.image} alt={data.title} />
          </div>

          {/* Right Side Content */}
          <div className="admission-content">

            <span className="section-subtitle">
              {data.subtitle}
            </span>

            <h2>{data.title}</h2>

            <p>{data.description}</p>

            <div className="admission-grid">

              {/* Admission Process */}
              <div className="info-card">

                <h3>Admission Process</h3>

                {data.steps.map((step, index) => (
                  <div className="info-item" key={index}>
                    <FaCheckCircle />
                    <span>{step}</span>
                  </div>
                ))}

              </div>

              {/* Required Documents */}
              <div className="info-card">

                <h3>Required Documents</h3>

                {data.documents.map((document, index) => (
                  <div className="info-item" key={index}>
                    <FaCheckCircle />
                    <span>{document}</span>
                  </div>
                ))}

              </div>

            </div>

            <div className="admission-buttons">

              <button className="primary-btn">
                Apply Now
              </button>

              <button className="secondary-btn">
                Admission Enquiry
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdmissionSection;