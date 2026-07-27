import {
  FaBullseye,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import visionImage from "../../assets/images/vision.jpg";

import "./VisionMission.css";

function VisionMission() {
  return (
    <section className="vision">

      <div className="container vision-container">

        {/* Left Side */}

        <div className="vision-image">

          <img
            src={visionImage}
            alt="Vision and Mission"
          />

        </div>

        {/* Right Side */}

        <div className="vision-content">

          <span className="section-subtitle">
            OUR PURPOSE
          </span>

          <h2>
            Vision & Mission
          </h2>

          <p>
            At Excellence International School, we believe every child
            deserves an environment where curiosity, creativity,
            confidence, and character flourish together.
          </p>

          {/* Vision Card */}

          <div className="vision-card">

            <FaBullseye />

            <div>

              <h3>Our Vision</h3>

              <p>
                To inspire every learner to become a confident,
                compassionate, and responsible global citizen.
              </p>

            </div>

          </div>

          {/* Mission Card */}

          <div className="vision-card">

            <FaRocket />

            <div>

              <h3>Our Mission</h3>

              <ul>

                <li>
                  <FaCheckCircle />
                  Academic Excellence
                </li>

                <li>
                  <FaCheckCircle />
                  Innovation & Technology
                </li>

                <li>
                  <FaCheckCircle />
                  Leadership Development
                </li>

                <li>
                  <FaCheckCircle />
                  Character & Discipline
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VisionMission;