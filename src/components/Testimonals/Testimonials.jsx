import "./Testimonials.css";
import testimonialData from "./testimonialData";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-title">

          <span>TESTIMONIALS</span>

          <h2>What Parents Say</h2>

          <p>
            Hear from parents who have experienced our commitment to quality
            education and student development.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonialData.map((item) => (

            <div className="testimonial-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;