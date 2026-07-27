import "./ContactSection.css";
import contactData from "./contactData";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="container contact-wrapper">

        {/* Left Side */}

        <div className="contact-left">

          <span className="section-subtitle">
            CONTACT INFORMATION
          </span>

          <h2>Let's Start a Conversation</h2>

          <p>
            Have questions about admissions, academics, or campus life?
            Our team is here to help you. Feel free to contact us or
            visit our campus.
          </p>

          <div className="contact-info-list">

            {contactData.map((item) => {

              const Icon = item.icon;

              return (

                <div className="contact-info-card" key={item.id}>

                  <div className="contact-icon">
                    <Icon />
                  </div>

                  <div>

                    <h4>{item.title}</h4>

                    <p>{item.value}</p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

        {/* Right Side */}

        <div className="contact-right">

          <h3>Send Us a Message</h3>

          <form>

            <div className="input-row">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-row">

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;