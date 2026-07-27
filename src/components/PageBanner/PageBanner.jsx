import "./PageBanner.css";
import { Link } from "react-router-dom";

function PageBanner({ title }) {
  return (
    <section className="page-banner">

      <div className="banner-overlay"></div>

      <div className="container banner-content">

        <h1>{title}</h1>

        <div className="breadcrumb">

          <Link to="/">Home</Link>

          <span>/</span>

          <span>{title}</span>

        </div>

      </div>

    </section>
  );
}

export default PageBanner;