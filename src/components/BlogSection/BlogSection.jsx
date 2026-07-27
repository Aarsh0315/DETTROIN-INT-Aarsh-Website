import "./BlogSection.css";
import blogData from "./blogData";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">

        <div className="section-heading">
          <span>Latest News</span>
          <h2>School Blogs & Events</h2>
          <p>
            Stay updated with the latest events, achievements,
            competitions, and activities happening at Excellence
            International School.
          </p>
        </div>

        <div className="blog-grid">

          {blogData.map((blog) => (

            <div
              className="blog-card"
              key={blog.id}
            >

              <div className="blog-image">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

                <span className="blog-category">
                  {blog.category}
                </span>

              </div>

              <div className="blog-content">

                <div className="blog-date">
                  <FaCalendarAlt />
                  <span>{blog.date}</span>
                </div>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button className="read-btn">
                  Read More
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

export default BlogSection;