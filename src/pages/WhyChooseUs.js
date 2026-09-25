import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="sis-why-choose-us-section sis-comman-bg sis-br-radius mt-3 section">
      <div className="container">
        <div className="row">

          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <div className="col-lg-6">

            {/* SECTION TITLE */}
            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                WHY CHOOSE CITYSKY CABS
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Reliable Cab Services Designed for Comfortable &amp;
                Convenient Travel
              </h2>

              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  CitySky Cabs provides convenient cab rental services in
                  Pune for local travel, airport transfers, corporate
                  transportation, outstation trips, family tours and group
                  journeys. Choose the right vehicle for your trip and enjoy
                  professional booking assistance for a smooth travel
                  experience.
                </p>
              </div>

            </div>


            {/* =========================================
                ACCORDION
            ========================================== */}
            <div
              className="sis-why-choose-content sis-primary-background p-4 sis-radius"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="sisf-e-inner">

                <div className="sisf-page-accordian">

                  <div
                    className="accordion"
                    id="sis-Accordion"
                  >

                    {/* =================================
                        ACCORDION ITEM 01
                    ================================== */}
                    <div className="accordion-item mt-0">

                      <h2 className="accordion-header sis-comman-title">

                        <button
                          className="accordion-button py-2 mt-0"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sisf-one"
                          aria-expanded="true"
                          aria-controls="sisf-one"
                        >
                          <span>
                            Multiple Vehicle Options
                          </span>
                        </button>

                      </h2>


                      <div
                        id="sisf-one"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#sis-Accordion"
                      >

                        <div className="accordion-body pt-0">

                          <div className="sisf-e-content-inner">

                            <p className="text-white">
                              Choose from Sedan, Ertiga, Innova, Innova
                              Crysta, Tempo Traveller, Force Urbania,
                              Mini Bus and Bus options according to your
                              passenger count, destination and travel
                              requirements.
                            </p>

                          </div>


                          <div className="sisf-m-button">

                            <a
                              href="/fleets"
                              className="sis-btn-default btn-light"
                            >
                              Explore Our Fleet

                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>

                          </div>


                          <div className="sisf-e-count">
                            <span>01</span>
                          </div>

                        </div>

                      </div>

                    </div>


                    {/* =================================
                        ACCORDION ITEM 02
                    ================================== */}
                    <div className="accordion-item mt-2">

                      <h2 className="accordion-header sis-comman-title">

                        <button
                          className="accordion-button py-2 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sisf-two"
                          aria-expanded="false"
                          aria-controls="sisf-two"
                        >
                          <span>
                            Quick &amp; Easy Cab Booking
                          </span>
                        </button>

                      </h2>


                      <div
                        id="sisf-two"
                        className="accordion-collapse collapse"
                        data-bs-parent="#sis-Accordion"
                      >

                        <div className="accordion-body pt-0">

                          <div className="sisf-e-content-inner">

                            <p className="text-white">
                              Send your travel details to CitySky Cabs and
                              get booking assistance for local, one-way,
                              round-trip, airport, corporate and outstation
                              cab requirements.
                            </p>

                          </div>


                          <div className="sisf-m-button">

                            <a
                              href="/enquiry"
                              className="sis-btn-default btn-light"
                            >
                              Book Your Cab

                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>

                          </div>


                          <div className="sisf-e-count">
                            <span>02</span>
                          </div>

                        </div>

                      </div>

                    </div>


                    {/* =================================
                        ACCORDION ITEM 03
                    ================================== */}
                    <div className="accordion-item mt-2">

                      <h2 className="accordion-header sis-comman-title">

                        <button
                          className="accordion-button py-2 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sisf-three"
                          aria-expanded="false"
                          aria-controls="sisf-three"
                        >
                          <span>
                            Professional Driver Service
                          </span>
                        </button>

                      </h2>


                      <div
                        id="sisf-three"
                        className="accordion-collapse collapse"
                        data-bs-parent="#sis-Accordion"
                      >

                        <div className="accordion-body pt-0">

                          <div className="sisf-e-content-inner">

                            <p className="text-white">
                              Travel comfortably with professional drivers
                              for Pune local journeys, airport transfers,
                              corporate travel, family tours and long-distance
                              outstation trips.
                            </p>

                          </div>


                          <div className="sisf-m-button">

                            <a
                              href="/contact"
                              className="sis-btn-default btn-light"
                            >
                              Contact CitySky Cabs

                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>

                          </div>


                          <div className="sisf-e-count">
                            <span>03</span>
                          </div>

                        </div>

                      </div>

                    </div>


                    {/* =================================
                        ACCORDION ITEM 04
                    ================================== */}
                    <div className="accordion-item border-0 mt-2">

                      <h2 className="accordion-header sis-comman-title">

                        <button
                          className="accordion-button pb-1 pt-2 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sisf-four"
                          aria-expanded="false"
                          aria-controls="sisf-four"
                        >
                          <span>
                            Local &amp; Outstation Travel
                          </span>
                        </button>

                      </h2>


                      <div
                        id="sisf-four"
                        className="accordion-collapse collapse"
                        data-bs-parent="#sis-Accordion"
                      >

                        <div className="accordion-body pt-0">

                          <div className="sisf-e-content-inner">

                            <p className="text-white">
                              Plan Pune local sightseeing, weekend trips,
                              family tours, pilgrimage journeys and
                              outstation travel with suitable cab options
                              for short and long-distance routes.
                            </p>

                          </div>


                          <div className="sisf-m-button">

                            <a
                              href="/enquiry"
                              className="sis-btn-default btn-light"
                            >
                              Plan Your Journey

                              <i className="fa-solid fa-arrow-right-long"></i>
                            </a>

                          </div>


                          <div className="sisf-e-count">
                            <span>04</span>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              RIGHT IMAGES & INFORMATION
          ========================================== */}
          <div className="col-lg-6 pe-2">

            {/* MAIN IMAGE */}
            <div className="sis-why-choose-image-right mb-3">

              <figure className="sis-image-anime sis-reveal">

                <img
                  src="/images/why-choose-image1.png"
                  className="w-100 sis-radius"
                  alt="CitySky Cabs Cab Rental Service in Pune"
                />

              </figure>

            </div>


            <div className="row">

              {/* =====================================
                  BOTTOM IMAGE
              ====================================== */}
              <div className="col-md-6">

                <div className="sis-why-choose-image-bottom">

                  <figure className="sis-image-anime sis-reveal">

                    <img
                      src="/images/why-choose-image2.png"
                      className="w-100 sis-radius"
                      alt="CitySky Cabs Outstation Cab Service Pune"
                    />

                  </figure>

                </div>

              </div>


              {/* =====================================
                  SERVICE INFORMATION
              ====================================== */}
              <div className="col-md-6 ps-2">

                <div className="sisf-sis-page-rating-part-bottom sis-radius p-4 bg-white">

                  {/* SERVICE ITEM 01 */}
                  <div
                    className="sis-counter-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >

                    {/* <div className="sis-users-image mb-2">

                      <figure>
                        <img
                          src="/images/user-image.png"
                          alt="CitySky Cabs Customers"
                        />
                      </figure>

                    </div> */}


                    <div className="sis-counter-title">

                      <h2>
                        <span className="sis-counter">
                          24 × 7
                        </span>
                      </h2>

                    </div>


                    <div className="sis-counter-content">

                      <span className="sisf-content">
                        Cab Booking Assistance
                      </span>

                    </div>

                  </div>


                  {/* DIVIDER */}
                  <div className="sisf-m-divider"></div>


                  {/* SERVICE ITEM 02 */}
                  <div
                    className="sis-counter-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >

                    <div className="sis-google-image mb-2">

                      <i
                        className="fa-solid fa-car-side"
                        style={{ fontSize: "28px" }}
                      ></i>

                    </div>


                    <div className="sis-counter-title">

                      <h2>
                        <span className="sis-counter">
                          Multiple
                        </span>
                      </h2>

                    </div>


                    <div className="sis-counter-content">

                      <span className="sisf-content">
                        Vehicle Options for Every Journey
                      </span>

                    </div>

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

export default WhyChooseUs;