import "./LearningEnvironment.css";
import {
  FaCheckCircle,
} from "react-icons/fa";

function LearningEnvironment() {
  return (
    <section className="learning">

      <div className="container learning-container">

        <span className="section-subtitle">
          OUR ENVIRONMENT
        </span>

        <h2>
          Positive & Motivating Learning Environment
        </h2>

        <p className="learning-text">
          We provide a safe, supportive, and inspiring atmosphere where every
          student is encouraged to learn, explore, and achieve their full
          potential.
        </p>

        <div className="learning-points">

          <div className="point">
            <FaCheckCircle />
            <span>Student-Focused</span>
          </div>

          <div className="point">
            <FaCheckCircle />
            <span>Encouraging & Supportive</span>
          </div>

          <div className="point">
            <FaCheckCircle />
            <span>Structured & Disciplined</span>
          </div>

          <div className="point">
            <FaCheckCircle />
            <span>Growth-Oriented</span>
          </div>

        </div>

        <p className="learning-bottom">
          Students feel motivated to learn, explore, and achieve their full
          potential in a caring and engaging environment.
        </p>

      </div>

    </section>
  );
}

export default LearningEnvironment;