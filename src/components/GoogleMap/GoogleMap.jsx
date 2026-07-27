import "./GoogleMap.css";

function GoogleMap() {
  return (
    <section className="google-map">

      <div className="container">

        <div className="map-heading">

          <span className="section-subtitle">
            FIND US
          </span>

          <h2>Visit Our Campus</h2>

          <p>
            Explore our beautiful campus and experience the environment
            where students learn, grow, and succeed.
          </p>

        </div>

      </div>

      <div className="map-container">

        <iframe
          title="Excellence International School"
          src="https://www.google.com/maps?q=Excellence+International+School+Aligarh&output=embed"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

    </section>
  );
}

export default GoogleMap;