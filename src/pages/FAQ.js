import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question:
        "1. How can I book a cab with CitySky Cabs?",
      answer:
        "You can book a cab with CitySky Cabs by calling our booking numbers or sending your travel details through our enquiry form. Share your pickup location, destination, travel date, time, passenger count and preferred vehicle to get booking assistance.",
    },
    {
      question:
        "2. Do you provide Pune Airport pickup and drop services?",
      answer:
        "Yes. CitySky Cabs provides airport pickup and drop services in Pune. You can book suitable cab options for airport transfers, hotel transfers, business travel and other transportation requirements.",
    },
    {
      question:
        "3. Can I book CitySky Cabs for outstation travel from Pune?",
      answer:
        "Yes. We provide outstation cab services from Pune for one-way trips, round trips, family tours, weekend getaways, pilgrimage journeys and long-distance travel to various destinations.",
    },
    {
      question:
        "4. Which vehicles are available with CitySky Cabs?",
      answer:
        "CitySky Cabs offers multiple vehicle options including Sedan, Swift Dzire, Etios, Ertiga, Innova, Innova Crysta, premium cars, Tempo Traveller, Force Urbania, Mini Bus and Bus options for different travel requirements.",
    },
    {
      question:
        "5. Do you provide corporate cab services in Pune?",
      answer:
        "Yes. CitySky Cabs provides corporate transportation solutions in Pune for office travel, employee transportation, airport transfers, business meetings, corporate events and other company travel requirements.",
    },
    {
      question:
        "6. Can I book a cab for family tours and group travel?",
      answer:
        "Yes. You can book vehicles for family tours, group travel, weddings, sightseeing, pilgrimage trips, picnics and outstation journeys. Vehicle options can be selected according to your passenger count and travel requirements.",
    },
  ];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="sis-faq-section sis-comman-bg sis-br-radius section">

      <div className="container">

        <div className="row">


          {/* =========================================
              LEFT CONTENT
          ========================================== */}

          <div className="col-lg-6">


            {/* =====================================
                SECTION TITLE
            ====================================== */}

            <div className="sisf-sis-section-title sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                FREQUENTLY ASKED QUESTIONS
              </span>


              <h2 className="sisf-m-title sis-text-anime-style-3">
                Everything You Need to Know
                <br />
                About CitySky Cabs
              </h2>


              <div
                className="sisf-m-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >

                <p>
                  Find helpful information about CitySky Cabs, vehicle
                  options, airport transfers, corporate travel,
                  <br />
                  outstation cab booking, family tours and our cab booking
                  process.
                </p>

              </div>

            </div>



            {/* =====================================
                CONTACT INFORMATION
            ====================================== */}

            <div className="sisf-sis-contact-information sis-contact">


              {/* =================================
                  PHONE
              ================================== */}

              <div
                className="sisf-contact-box mb-3 d-flex align-items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >

                <div className="sisf-icon">

                  <a
                    href="tel:+918554819191"
                    aria-label="Call CitySky Cabs"
                  >
                    <i className="fa-solid fa-phone-volume"></i>
                  </a>

                </div>


                <div className="sisf-sis-e-content">

                  <a
                    href="tel:+918554819191"
                    className="sis-title sis-comman-title d-block"
                  >
                    +91 8554819191
                  </a>


                  <a
                    href="tel:+919272112191"
                    className="sis-title sis-comman-title d-block"
                  >
                    +91 9272112191
                  </a>


                  <span className="sis-title d-block">
                    Cab Booking Assistance
                  </span>

                </div>

              </div>



              {/* =================================
                  EMAIL
              ================================== */}

              <div
                className="sisf-contact-box mb-3 d-flex align-items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >

                <div className="sisf-icon">

                  <a href="mailto:booking@cityskycab.in">
                    <i className="fa-regular fa-envelope"></i>
                  </a>

                </div>


                <div className="sisf-sis-e-content">

                  <a
                    href="mailto:booking@cityskycab.in"
                    className="sis-title sis-comman-title d-block"
                  >
                    booking@cityskycab.in
                  </a>


                  <span className="sis-title d-block">
                    Booking &amp; Travel Enquiries
                  </span>

                </div>

              </div>



              {/* =================================
                  ADDRESS
              ================================== */}
{/* 
              <div
                className="sisf-contact-box mb-3 d-flex align-items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="700"
              >

                <div className="sisf-icon">

                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>

                </div>


                <div className="sisf-sis-e-content">

                  <span className="sis-title sis-comman-title d-block">
                    Office No. 307, 3rd Floor, 52, Sinhgad Rd,
                    Wadgaon Budruk, Narhe, Pune, Maharashtra - 411041
                  </span>


                  <span className="sis-title d-block">
                    CitySky Cabs, Pune
                  </span>

                </div>

              </div> */}



              {/* =================================
                  WORKING HOURS
              ================================== */}

              {/* <div
                className="sisf-contact-box d-flex align-items-center gap-3"
                data-aos="fade-up"
                data-aos-delay="900"
              >

                <div className="sisf-icon">

                  <span>
                    <i className="fa-regular fa-clock"></i>
                  </span>

                </div>


                <div className="sisf-sis-e-content">

                  <span className="sis-title sis-comman-title d-block">
                    Mon – Sun: 24 Hours
                  </span>


                  <span className="sis-title d-block">
                    Cab Booking Assistance Available
                  </span>

                </div>

              </div> */}

            </div>

          </div>



          {/* =========================================
              RIGHT FAQ ACCORDION
          ========================================== */}

          <div className="col-lg-6">

            <div className="sisf-faq-accordian sisf-sis-faq-accordian rounded-0">

              <div
                className="accordion"
                id="sisf-Accordion"
                data-aos="fade-left"
                data-aos-delay="100"
              >

                {faqs.map((faq, index) => {

                  const isActive = activeIndex === index;

                  return (

                    <div
                      className={`accordion-item ${
                        index === 0 ? "mt-0" : "mt-2"
                      }`}
                      key={index}
                    >


                      {/* =============================
                          QUESTION
                      ============================== */}

                      <h2 className="accordion-header sis-comman-title">

                        <button
                          type="button"
                          className={`accordion-button ps-4 ${
                            !isActive ? "collapsed" : ""
                          }`}
                          onClick={() => toggleFAQ(index)}
                          aria-expanded={isActive}
                        >
                          <span>
                            {faq.question}
                          </span>
                        </button>

                      </h2>



                      {/* =============================
                          ANSWER
                      ============================== */}

                      <div
                        className={`accordion-collapse ${
                          isActive ? "show" : ""
                        }`}
                        style={{
                          display: isActive ? "block" : "none",
                        }}
                      >

                        <div className="accordion-body">

                          <div className="sisf-e-content-inner">

                            <p className="mb-0 text-white">
                              {faq.answer}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FAQ;