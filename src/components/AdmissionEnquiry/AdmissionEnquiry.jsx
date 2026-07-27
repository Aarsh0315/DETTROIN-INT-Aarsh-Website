import "./AdmissionEnquiry.css";
import enquiryData from "./enquiryData";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";

function AdmissionEnquiry() {
  return (
    <section className="admission-enquiry">
      <div className="container">

        <div className="enquiry-wrapper">

          {/* Left Side */}

          <div className="enquiry-info">

            <img
              src={enquiryData.image}
              alt={enquiryData.title}
            />

            <div className="info-content">

              <span>{enquiryData.subtitle}</span>

              <h2>{enquiryData.title}</h2>

              <p>
                {enquiryData.description}
              </p>

              <div className="highlight-list">

                {enquiryData.highlights.map((item, index) => (

                  <div
                    className="highlight-item"
                    key={index}
                  >

                    <FaCheckCircle />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="enquiry-form">

            <h2>Send Your Enquiry</h2>

            <form>

              <div className="input-group">

                <FaUser />

                <input
                  type="text"
                  placeholder="Student Name"
                />

              </div>

              <div className="input-group">

                <FaUser />

                <input
                  type="text"
                  placeholder="Parent / Guardian Name"
                />

              </div>

              <div className="input-group">

                <FaPhoneAlt />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                />

              </div>

              <div className="input-group">

                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="input-group">

                <FaGraduationCap />

                <select defaultValue="">
                  <option value="" disabled>
                    Select Class
                  </option>

                  {enquiryData.classes.map((cls, index) => (
                    <option key={index}>
                      {cls}
                    </option>
                  ))}
                </select>

              </div>

              <div className="input-group textarea-group">

                <FaCommentDots />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                ></textarea>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdmissionEnquiry;