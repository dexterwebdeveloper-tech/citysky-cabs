import React from "react";

const blogs = [
  {
    image: "/images/keyword/2.jpg",
    category: "Innova Crysta Rental",
    tag: "CitySky Cabs",
    title: "Innova Crysta On Rent in Pune",
    description:
      "Book Innova Crysta in Pune for local travel, airport transfers, corporate trips, family tours and comfortable outstation journeys.",
    link: "/innova-crysta-on-rent-in-pune",
    animation: "zoom-in-right",
  },
  {
    image: "/images/keyword/12.jpg",
    category: "Pune to Goa Cab",
    tag: "Outstation Travel",
    title: "Pune to Goa Innova Crysta Cab",
    description:
      "Travel from Pune to Goa with a comfortable Innova Crysta suitable for family tours, group travel and long-distance journeys.",
    link: "/pune-to-goa-innova-crysta-cab",
    animation: "zoom-in-up",
  },
 {
  image: "/images/keyword/86.jpg",
  category: "Pune to Ujjain Cab",
  tag: "Darshan Trip",
  title: "Pune to Ujjain Cab",
  description:
    "Book a comfortable cab from Pune to Ujjain for Mahakaleshwar Jyotirlinga darshan, family trips, temple visits and convenient one-way or round-trip journeys.",
  link: "/pune-to-ujjain-cab",
  animation: "zoom-in-left",
},

];

const LatestBlogs = () => {
  return (
    <section className="citysky-blog-section">
      <div className="container">

        {/* Heading */}
        <div className="citysky-blog-heading text-center">
          <span className="citysky-blog-subtitle">
            POPULAR INNOVA CRYSTA SERVICES
          </span>

          <h2 className="citysky-blog-main-title">
            Innova Crysta Cab Booking in Pune
            <br />
            for Popular Outstation Routes
          </h2>

          <p className="citysky-blog-intro">
            Explore CitySky Cabs Innova Crysta services for Pune local,
            airport, corporate and outstation travel. Choose a comfortable
            vehicle for family tours and long-distance journeys.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {blogs.map((blog, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos={blog.animation}
            >
              <article className="citysky-blog-card">

                {/* Image */}
                <a
                  href={blog.link}
                  className="citysky-blog-image-box"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="citysky-blog-image"
                  />

                  <span className="citysky-blog-image-badge">
                    CitySky Cabs
                  </span>
                </a>

                {/* Content */}
                <div className="citysky-blog-content">

                  <div className="citysky-blog-meta">

                    <a
                      href={blog.link}
                      className="citysky-blog-category"
                    >
                      {blog.category}
                    </a>

                    <span className="citysky-blog-tag">
                      {blog.tag}
                    </span>

                  </div>

                  <h3 className="citysky-blog-title">
                    <a href={blog.link}>
                      {blog.title}
                    </a>
                  </h3>

                  <p className="citysky-blog-description">
                    {blog.description}
                  </p>

                  <a
                    href={blog.link}
                    className="citysky-blog-button"
                  >
                    View Service
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>

                </div>

              </article>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;