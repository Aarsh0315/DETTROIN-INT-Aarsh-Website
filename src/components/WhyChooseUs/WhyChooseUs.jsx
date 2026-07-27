import "./WhyChooseUs.css";
import whyChooseData from "./whyChooseData";

function WhyChooseUs() {
  return (
    <section className="whyChoose">
      <div className="container">

        <div className="section-title">
          <span>WHY CHOOSE US</span>

          <h2>Why Excellence International School?</h2>

          <p>
            We provide a nurturing environment where students grow
            academically, socially, and emotionally through quality education,
            experienced faculty, and modern learning facilities.
          </p>
        </div>

        <div className="whyChoose-grid">

          {whyChooseData.map((item) => {

            const Icon = item.icon;

            return (

              <div className="whyChoose-card" key={item.id}>

                <div className="whyChoose-icon">
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

export default WhyChooseUs;