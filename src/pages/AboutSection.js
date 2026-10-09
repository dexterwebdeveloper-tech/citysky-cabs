import React from "react";

const AboutSection = () => {
  return (
    <section className="sis-about-us-section py-3">
      <div className="container">
        <div className="row align-items-center">

          {/* =========================================
              LEFT SIDE
          ========================================== */}
          <div className="col-lg-6">

            <div className="sisf-about-left-image position-relative">

              {/* ABOUT IMAGE */}
              <figure className="sis-image-anime sis-reveal">
                <img
                  src="/images/about-left-image.png"
                  className="w-100"
                  alt="CitySky Cabs Cab Rental Service in Pune"
                />
              </figure>


              {/* =====================================
                  TRUST / RATING BOX
              ====================================== */}
              <div
                className="sisf-sis-page-rating-part sis-radius p-3 mb-0 bg-white"
                data-aos="zoom-in"
                data-aos-delay="500"
              >

                <div className="sis-users-image mb-2">

                  {/* <figure>
                    <img
                      src="/images/user-image.png"
                      alt="CitySky Cabs Happy Customers"
                    />
                  </figure> */}

                </div>


                <div className="sisf-sis-content">

                  <div className="sisf-m-title">

                    <h3>
                      <span>★</span> Trusted Cab Service in Pune
                    </h3>

                  </div>


                  <div className="sisf-m-text">

                    <p className="mb-0">
                      Reliable Travel for Local &amp; Outstation Journeys
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              RIGHT SIDE
          ========================================== */}
          <div className="col-lg-6">

            {/* =====================================
                SECTION TITLE
            ====================================== */}
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                ABOUT CITYSKY CABS
              </span>


              <h2 className="sisf-m-title sis-text-anime-style-3">
                Your Reliable Cab Rental Service in Pune for Every Journey
              </h2>


              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >

                <p>
                  CitySky Cabs provides reliable and convenient cab rental
                  services in Pune for local travel, airport transfers,
                  corporate transportation, outstation trips, family tours
                  and group journeys. We help customers choose the right
                  vehicle according to their travel requirements.
                </p>

              </div>


              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="300"
              >

                <p className="mt-3">
                  From Sedan, Ertiga and Innova to Innova Crysta, Tempo
                  Traveller, Force Urbania, Mini Bus and Bus, CitySky Cabs
                  offers multiple vehicle options for comfortable travel
                  from Pune to destinations across Maharashtra and beyond.
                </p>

              </div>

            </div>


            {/* =========================================
                ABOUT FEATURES
            ========================================== */}
            <div className="sisf-about-contents-hovered">

              {/* =====================================
                  FEATURE 01
              ====================================== */}
              <div
                className="sisf-about-contents"
                data-aos="fade-up"
                data-aos-delay="100"
              >

                <div className="sisf-e-inner d-flex align-items-center gap-4">

                  <div className="sis-icon-image">

                    <div className="sisf-about-icon-image">

                      <figure>
                        <img
                          src="/images/about-icon1.svg"
                          alt="Easy Cab Booking with CitySky Cabs"
                        />
                      </figure>

                    </div>

                  </div>


                  <div className="sisf-e-content">

                    <div className="sisf-sis-e-title mb-2">

                      <h3 className="sisf-e-title">
                        Easy &amp; Convenient Cab Booking
                      </h3>

                    </div>


                    <div className="sisf-e-text">

                      <p className="mb-0">
                        Book a cab for local, airport, one-way, round-trip,
                        corporate or outstation travel with quick booking
                        assistance from the CitySky Cabs team.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* =====================================
                  FEATURE 02
              ====================================== */}
              <div
                className="sisf-about-contents"
                data-aos="fade-up"
                data-aos-delay="300"
              >

                <div className="sisf-e-inner d-flex align-items-center gap-4">

                  <div className="sis-icon-image">

                    <div className="sisf-about-icon-image">

                      <figure>
                        <img
                          src="/images/about-icon2.svg"
                          alt="Reliable Cab Service in Pune"
                        />
                      </figure>

                    </div>

                  </div>


                  <div className="sisf-e-content">

                    <div className="sisf-sis-e-title mb-2">

                      <h3 className="sisf-e-title">
                        Comfortable &amp; Reliable Transportation
                      </h3>

                    </div>


                    <div className="sisf-e-text">

                      <p className="mb-0">
                        Travel comfortably with professional drivers and
                        suitable vehicle options for airport transfers,
                        business trips, family tours and long-distance
                        outstation journeys.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================================
                BUTTON + CONTACT
            ========================================== */}
            <div className="button-group d-flex align-items-center flex-wrap">

              {/* BUTTON */}
              <div
                className="sisf-m-button"
                data-aos="fade-up"
                data-aos-delay="500"
              >

                <a
                  href="/our-fleet"
                  className="sis-btn-default"
                >
                  Explore Our Fleet

                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>

              </div>


              <div className="sis-divider-border mx-4"></div>


              {/* =====================================
                  CONTACT INFORMATION
              ====================================== */}
              <div
                className="sisf-sis-contact-information sis-contact mb-0"
                data-aos="fade-up"
                data-aos-delay="700"
              >

                <div className="sisf-contact-box d-flex align-items-center gap-3">

                  {/* PHONE ICON */}
                  <div className="sisf-icon">

                    <a
                      href="tel:+919272112191"
                      aria-label="Call CitySky Cabs"
                    >
                      <i className="fa-solid fa-phone-volume"></i>
                    </a>

                  </div>


                  {/* PHONE NUMBERS */}
                  <div className="sisf-sis-e-content">

                    <span className="sis-title d-block">
                      Cab Booking Support
                    </span>


                    <a
                      href="tel:+919272112191 "
                      className="sis-title sis-comman-title d-block"
                    >
                      +91 9272112191 
                    </a>


                 

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;