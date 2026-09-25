import React from "react";

const PremiumFeatures = () => {
  const features = [
    {
      icon: "/images/features-icon1.svg",
      title: (
        <>
          Professional Driver
          <br />
          Service
        </>
      ),
      delay: "100",
    },
    {
      icon: "/images/features-icon3.svg",
      title: (
        <>
          Quick &amp; Easy
          <br />
          Cab Booking
        </>
      ),
      delay: "300",
      iconClass: "sis-icon",
    },
    {
      icon: "/images/features-icon5.svg",
      title: (
        <>
          Transparent
          <br />
          Pricing
        </>
      ),
      delay: "500",
      iconClass: "sis-icon",
    },
    {
      icon: "/images/features-icon2.svg",
      title: (
        <>
          Local &amp; Outstation
          <br />
          Travel Options
        </>
      ),
      delay: "100",
      iconClass: "sis-icon",
    },
    {
      icon: "/images/features-icon4.svg",
      title: (
        <>
          24/7 Cab Booking
          <br />
          Assistance
        </>
      ),
      delay: "300",
      iconClass: "sis-icon",
    },
    {
      icon: "/images/features-icon6.svg",
      title: (
        <>
          Multiple Vehicle
          <br />
          Options
        </>
      ),
      delay: "500",
      iconClass: "sis-icon",
      last: true,
    },
  ];

  return (
    <div className="sis-premium-features-section sis-br-radius position-relative pb-5 section">

      {/* =========================================
          RIGHT SIDE CAR IMAGE
      ========================================== */}
      <div
        className="sisf-sis-bottom-right-image sisf-page"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <figure>
          <img
            src="/images/car-imaage.png"
            alt="CitySky Cabs Cab Rental Service Pune"
          />
        </figure>
      </div>


      <div className="container">

        {/* =========================================
            TOP CONTENT
        ========================================== */}
        <div className="row">

          <div className="col-lg-9">

            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle white sis-text-anime-style-3">
                CITYSKY CABS FEATURES
              </span>

              <h2 className="sisf-m-title text-white sis-text-anime-style-3">
                Everything You Need for Comfortable
                <br />
                &amp; Convenient Cab Travel
              </h2>

              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-white">
                  CitySky Cabs makes travel convenient with easy cab booking,
                  professional drivers, multiple vehicle options and reliable
                  transportation for local journeys, airport transfers,
                  corporate travel, family tours and outstation trips from Pune.
                </p>
              </div>

            </div>

          </div>


          {/* =========================================
              BUTTON + TRUST BOX
          ========================================== */}
          <div className="col-lg-3">

            <div
              className="sisf-m-button mt-3 pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="/services"
                className="sis-btn-default btn-light"
              >
                View All Services
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>


            {/* TRUST BOX */}
            <div
              className="sisf-sis-page-rating-part sis-radius p-3 mt-4 bg-white"
              data-aos="zoom-in"
              data-aos-delay="300"
            >

              <div className="sis-users-image mb-2">
                <figure>
                  <img
                    src="/images/users1.png"
                    alt="CitySky Cabs Customers"
                  />
                </figure>
              </div>


              <div className="sisf-sis-content">

                <div className="sisf-m-title">
                  <h3>
                    <span>★</span> Reliable Service
                  </h3>
                </div>

                <div className="sisf-m-text">
                  <p className="mb-0">
                    Comfortable Cab Travel for Pune &amp; Outstation Trips
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            FEATURES GRID
        ========================================== */}
        <div className="row">

          <div className="col-lg-9">

            <div className="row">

              {features.map((feature, index) => (

                <div
                  className="col-md-4 pe-0"
                  key={index}
                >

                  <div
                    className="sisf-sis-icon-with-text--hover sisf-features-contents"
                    data-aos="fade-up"
                    data-aos-delay={feature.delay}
                  >

                    <div
                      className={`sisf-e-inner p-4 ${
                        feature.last ? "mb-0" : ""
                      } sis-radius position-relative`}
                    >

                      {/* ICON */}
                      <div className="sis-icon-image">

                        <div className="sisf-features-icon-image mb-4">

                          <figure>
                            <img
                              src={feature.icon}
                              className={feature.iconClass || ""}
                              alt={`${index + 1} CitySky Cabs Service Feature`}
                            />
                          </figure>

                        </div>

                      </div>


                      {/* CONTENT */}
                      <div className="sisf-e-content">

                        <div className="sisf-sis-e-title">

                          <h3 className="sisf-e-title">
                            <span>
                              {feature.title}
                            </span>
                          </h3>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* EMPTY RIGHT COLUMN */}
          <div className="col-lg-3"></div>

        </div>

      </div>

    </div>
  );
};

export default PremiumFeatures;