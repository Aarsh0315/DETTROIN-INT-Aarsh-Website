import "./AboutSection.css";
import aboutImage from "../../assets/images/about/about-school.jpg";
import features from "./aboutData";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="container">

        {/* Top Section */}

        <div className="about-wrapper">

          {/* Left Image */}

          <div className="about-image">

            <img
              src={aboutImage}
              alt="About Excellence International School"
            />

          </div>

          {/* Right Content */}

          <div className="about-content">

            <span className="section-subtitle">
              ABOUT OUR SCHOOL
            </span>

            <h2>
              Excellence International School
            </h2>

            <p>
              Excellence International School is committed to providing
              quality education that inspires students to become confident,
              responsible, and successful individuals. Our focus extends
              beyond academics to nurture creativity, leadership,
              discipline, and lifelong learning.
            </p>

            <p>
              With experienced educators, modern classrooms, and a safe,
              student-friendly campus, we create an environment where
              every child can discover their potential and excel in every
              aspect of life.
            </p>

            <button className="about-btn">
              Learn More
            </button>

          </div>

        </div>

        {/* Features */}

        <div className="about-features">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div className="feature-card" key={item.id}>

                <div className="feature-icon">

                  <Icon />

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default AboutSection;