import React from "react";
import WhyChooseUss from "../pages/WhyChooseUsabout";
import MissionVision from "../pages/MissionVision";

const AboutUs = () => {
  return (
    <>
      {/* =========================================
          PAGE BANNER
      ========================================== */}
      <div className="sisf-banner sis-br-radius mt-3 position-relative">
        <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
          <div className="sisf-m-inner container">
            <div className="sisf-m-content sisf-content-grid">
              <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                About CitySky Cabs
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          ABOUT CITYSKY CABS
      ========================================== */}
      <section className="sis-about-us-section py-2">
        <div className="container">
          <div className="row align-items-center">

            {/* =====================================
                LEFT IMAGE
            ====================================== */}
            <div className="col-lg-6">
              <div className="sisf-about-left-image position-relative">

                <figure className="sis-image-anime sis-reveal">
                  <img
                    src="/images/about.png"
                    className="w-100"
                    alt="CitySky Cabs Cab Service in Pune"
                  />
                </figure>

                {/* Rating / Trust Card */}
                <div
                  className="sisf-sis-page-rating-part sis-radius p-3 mb-0 bg-white"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  

                  <div className="sisf-sis-content">

                    <div className="sisf-m-title">
                      <h2 className="sis-comman-title">
                        <span>★</span> Trusted Cab Service
                      </h2>
                    </div>

                    <div className="sisf-m-text">
                      <p className="mb-0">
                        Comfortable, Reliable & Professional Travel
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* =====================================
                RIGHT CONTENT
            ====================================== */}
            <div className="col-lg-6">

              <div className="sisf-sis-section-title sis-section-title">

                <span className="sisf-m-subtitle sis-text-anime-style-3">
                  ABOUT CITYSKY CABS
                </span>

                <h2 className="sisf-m-title sis-text-anime-style-3">
                  Reliable Cab Rental Service in Pune for Every Journey
                </h2>

                <div
                  className="sisf-m-text"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    CitySky Cabs provides reliable and comfortable cab rental
                    services in Pune for local travel, airport transfers,
                    corporate transportation, family trips and outstation
                    journeys. We focus on making every trip convenient,
                    comfortable and professionally managed.
                  </p>
                </div>

                <div
                  className="sisf-m-text"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p className="mt-3">
                    Whether you need a cab within Pune, an Innova Crysta for
                    an outstation journey, an airport pickup or drop, or
                    regular transportation for your company, CitySky Cabs
                    offers suitable vehicle options for different travel
                    requirements.
                  </p>
                </div>

              </div>

              {/* =====================================
                  ABOUT SERVICE ITEMS
              ====================================== */}
              <div className="sisf-about-contents-hovered">

                {/* ITEM 1 */}
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
                            alt="CitySky Cabs Easy Cab Booking"
                          />
                        </figure>
                      </div>
                    </div>

                    <div className="sisf-e-content">

                      <div className="sisf-sis-e-title mb-2">
                        <h3 className="sisf-e-title">
                          Easy & Convenient Cab Booking
                        </h3>
                      </div>

                      <div className="sisf-e-text">
                        <p className="mb-0">
                          Book a suitable cab for local, airport, corporate
                          and outstation travel with quick assistance from
                          our CitySky Cabs booking team.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
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
                            alt="CitySky Cabs Reliable Transportation"
                          />
                        </figure>
                      </div>
                    </div>

                    <div className="sisf-e-content">

                      <div className="sisf-sis-e-title mb-2">
                        <h3 className="sisf-e-title">
                          Comfortable & Reliable Transportation
                        </h3>
                      </div>

                      <div className="sisf-e-text">
                        <p className="mb-0">
                          Travel comfortably with well-maintained vehicle
                          options suitable for business trips, family tours,
                          airport transfers and long-distance journeys.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* =====================================
                  BUTTON + CONTACT
              ====================================== */}
              <div className="button-group d-flex align-items-center flex-wrap">

                <div
                  className="sisf-m-button"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <a
                    href="/services"
                    className="sis-btn-default"
                  >
                    View Our Services
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>

                <div className="sis-divider-border mx-4"></div>

                <div
                  className="sisf-sis-contact-information sis-contact mb-0"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="sisf-contact-box d-flex align-items-center gap-3">

                    <div className="sisf-icon">
                      <a
                        href="tel:+919272112191 "
                        aria-label="Call CitySky Cabs"
                      >
                        <i className="fa-solid fa-phone-volume"></i>
                      </a>
                    </div>

                    <div className="sisf-sis-e-content">

                      <span className="sis-title d-block">
                        Booking Support
                      </span>

                      <a
                        href="tel:+919272112191 "
                        className="sis-title sis-comman-title d-block"
                      >
                        +91 9272112191 
                      </a>

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

      {/* =========================================
          WHY CHOOSE CITYSKY CABS
      ========================================== */}
      <WhyChooseUss />

      {/* =========================================
          MISSION & VISION
      ========================================== */}
      <MissionVision />
    </>
  );
};

export default AboutUs;