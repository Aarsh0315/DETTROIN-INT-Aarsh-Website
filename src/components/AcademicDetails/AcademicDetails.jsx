import "./AcademicDetails.css";
import { FaCheckCircle } from "react-icons/fa";

function AcademicDetails({ data }) {
  return (
    <section className="academic-details">

      <div className="container">

        <div className="academic-wrapper">

          {/* Left Image */}

          <div className="academic-image">

            <img
              src={data.image}
              alt={data.title}
            />

          </div>

          {/* Right Content */}

          <div className="academic-content">

            <span className="section-subtitle">
              {data.subtitle}
            </span>

            <h2>{data.title}</h2>

            <p>
              {data.description}
            </p>

            <div className="feature-list">

              {data.features.map((feature, index) => (

                <div
                  className="feature-item"
                  key={index}
                >

                  <FaCheckCircle />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            <div className="academic-buttons">

              <button className="primary-btn">
                Apply Now
              </button>

              <button className="secondary-btn">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AcademicDetails;