import "./Holistic.css";
import holisticData from "./holisticData";
import { FaArrowRight } from "react-icons/fa";

function Holistic() {
  return (
    <section className="holistic">

      <div className="container">

        <div className="section-title">

          <span>HOLISTIC DEVELOPMENT</span>

          <h2>Learning Beyond the Classroom</h2>

          <p>
            We nurture creativity, confidence, leadership, and physical
            well-being through a wide range of student-focused activities.
          </p>

        </div>

        <div className="holistic-grid">

          {holisticData.map((item) => (

            <div className="holistic-card" key={item.id}>

              <div className="holistic-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="holistic-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>

                  Learn More

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Holistic;