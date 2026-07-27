import { useState } from "react";
import "./FAQ.css";
import faqData from "./faqData";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {

  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="faq">

      <div className="container">

        <div className="section-title">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to some of the most common questions about admissions,
            academics, facilities, and student life.
          </p>

        </div>

        <div className="faq-container">

          {faqData.map((item) => (

            <div className="faq-item" key={item.id}>

              <button
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >

                <span>{item.question}</span>

                {active === item.id ? <FaMinus /> : <FaPlus />}

              </button>

              <div
                className={`faq-answer ${
                  active === item.id ? "active" : ""
                }`}
              >

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;