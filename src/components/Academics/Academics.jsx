import "./Academics.css";
import academicData from "./academicData";
import { FaArrowRight } from "react-icons/fa";

function Academics() {
  return (
    <section className="academics">

      <div className="container">

        <div className="section-title">

          <span>ACADEMIC JOURNEY</span>

          <h2>Learning at Every Stage</h2>

          <p>
            Our curriculum is thoughtfully designed to support students at every
            stage of their educational journey.
          </p>

        </div>

        <div className="academics-grid">

          {academicData.map((item) => (

            <div className="academic-card" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="academic-content">

                <small>{item.age}</small>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <ul>

                  {item.features.map((feature, index) => (

                    <li key={index}>
                      ✓ {feature}
                    </li>

                  ))}

                </ul>

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

export default Academics;