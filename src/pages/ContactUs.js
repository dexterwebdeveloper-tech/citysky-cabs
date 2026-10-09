import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    tripType: "",
    message: "",
  });

  // ==============================
  // HANDLE INPUT CHANGE
  // ==============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==============================
  // WHATSAPP FORM SUBMIT
  // WhatsApp: +91 84598 83515
  // ==============================
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918459883515";

    const whatsappMessage = `Hello Citysky Cabs,

I would like to enquire about a cab booking.

Name: ${formData.name}
Phone: ${formData.phone}
Pickup Location: ${formData.pickup}
Drop Location: ${formData.drop}
Travel Date: ${formData.date}
Trip Type: ${formData.tripType}
Message: ${formData.message || "N/A"}

Please share availability and booking details.

Thank you.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
<>

 {/* <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </div> */}

    <section className="citysky-contact">

      {/* ========================================
          HERO SECTION
      ======================================== */}
      <div className="citysky-contact-hero">
        <div className="container">
          <div className="citysky-hero-content">

            <span className="citysky-mini-title">
              <i className="fa-solid fa-headset"></i>
              24×7 Customer Support
            </span>

            <h1>
              Contact <span>Citysky Cabs</span>
            </h1>

            <p>
              Planning a local, airport, corporate or outstation journey?
              Connect with Citysky Cabs for reliable cab booking assistance
              across Pune and Maharashtra.
            </p>

          </div>
        </div>
      </div>


      {/* ========================================
          CONTACT + ENQUIRY FORM
      ======================================== */}
      <div className="citysky-contact-main">
        <div className="container">

          <div className="row g-4 align-items-stretch">

            {/* ==============================
                LEFT CONTACT PANEL
            ============================== */}
            <div className="col-lg-5">
              <div className="citysky-contact-panel">

                <div className="citysky-panel-badge">
                  CITYSKY CABS
                </div>

                <h2>
                  We're Ready For Your Journey
                </h2>

                <p className="citysky-panel-desc">
                  Get in touch with our team for cab bookings, airport
                  transfers, corporate transportation, local travel and
                  comfortable outstation journeys.
                </p>


                {/* PHONE 1 */}
                <div className="citysky-quick-contact">

                  <a
                    href="tel:+919272112191 "
                    className="citysky-quick-row"
                  >
                    <div className="citysky-quick-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>

                    <div>
                      <small>Call Us</small>
                      <strong>+91 9272112191</strong>
                    </div>

                    <i className="fa-solid fa-arrow-right citysky-arrow"></i>
                  </a>


                  {/* PHONE 2 */}
                  <a
                    href="tel:+918459883515"
                    className="citysky-quick-row"
                  >
                    <div className="citysky-quick-icon">
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </div>

                    <div>
                      <small>Alternate Number</small>
                      <strong>+91 8459883515</strong>
                    </div>

                    <i className="fa-solid fa-arrow-right citysky-arrow"></i>
                  </a>


                  {/* EMAIL */}
                  <a
                    href="mailto:booking@cityskycab.in"
                    className="citysky-quick-row"
                  >
                    <div className="citysky-quick-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>

                    <div>
                      <small>Email Us</small>
                      <strong>booking@cityskycab.in</strong>
                    </div>

                    <i className="fa-solid fa-arrow-right citysky-arrow"></i>
                  </a>

                </div>


                {/* SERVICE NOTE */}
                <div className="citysky-service-note">

                  <i className="fa-solid fa-circle-check"></i>

                  <div>
                    <strong>Quick Booking Assistance</strong>

                    <p>
                      Local • Airport • Corporate • Outstation
                    </p>
                  </div>

                </div>

              </div>
            </div>


            {/* ==============================
                RIGHT ENQUIRY FORM
            ============================== */}
            <div className="col-lg-7">

              <div className="citysky-form-box">

                <div className="citysky-form-heading">

                  <span>BOOK YOUR CAB</span>

                  <h2>Send Your Enquiry</h2>

                  <p>
                    Enter your journey details and send your enquiry
                    directly to our booking team on WhatsApp.
                  </p>

                </div>


                <form onSubmit={handleWhatsAppSubmit}>

                  <div className="row g-3">

                    {/* NAME */}
                    <div className="col-md-6">

                      <label htmlFor="citysky-name">
                        Your Name
                      </label>

                      <div className="citysky-input">

                        <i className="fa-regular fa-user"></i>

                        <input
                          id="citysky-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />

                      </div>
                    </div>


                    {/* PHONE */}
                    <div className="col-md-6">

                      <label htmlFor="citysky-phone">
                        Phone Number
                      </label>

                      <div className="citysky-input">

                        <i className="fa-solid fa-phone"></i>

                        <input
                          id="citysky-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          inputMode="numeric"
                          required
                        />

                      </div>
                    </div>


                    {/* PICKUP */}
                    <div className="col-md-6">

                      <label htmlFor="citysky-pickup">
                        Pickup Location
                      </label>

                      <div className="citysky-input">

                        <i className="fa-solid fa-location-dot"></i>

                        <input
                          id="citysky-pickup"
                          type="text"
                          name="pickup"
                          value={formData.pickup}
                          onChange={handleChange}
                          placeholder="Enter pickup location"
                          required
                        />

                      </div>
                    </div>


                    {/* DROP */}
                    <div className="col-md-6">

                      <label htmlFor="citysky-drop">
                        Drop Location
                      </label>

                      <div className="citysky-input">

                        <i className="fa-solid fa-location-arrow"></i>

                        <input
                          id="citysky-drop"
                          type="text"
                          name="drop"
                          value={formData.drop}
                          onChange={handleChange}
                          placeholder="Enter drop location"
                          required
                        />

                      </div>
                    </div>


                    {/* TRAVEL DATE */}
                    <div className="col-md-6">

                      <label htmlFor="citysky-date">
                        Travel Date
                      </label>

                      <div className="citysky-input">

                        <i className="fa-regular fa-calendar"></i>

                        <input
                          id="citysky-date"
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />

                      </div>
                    </div>


                    {/* TRIP TYPE */}
                    <div className="col-md-6">

                      <label htmlFor="citysky-trip-type">
                        Trip Type
                      </label>

                      <div className="citysky-input">

                        <i className="fa-solid fa-car-side"></i>

                        <select
                          id="citysky-trip-type"
                          name="tripType"
                          value={formData.tripType}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Select trip type
                          </option>

                          <option value="Local Cab">
                            Local Cab
                          </option>

                          <option value="Airport Transfer">
                            Airport Transfer
                          </option>

                          <option value="Outstation Cab">
                            Outstation Cab
                          </option>

                          <option value="Corporate Cab">
                            Corporate Cab
                          </option>

                          <option value="One Way">
                            One Way
                          </option>

                          <option value="Round Trip">
                            Round Trip
                          </option>
                        </select>

                      </div>
                    </div>


                    {/* MESSAGE */}
                    <div className="col-12">

                      <label htmlFor="citysky-message">
                        Message
                      </label>

                      <div className="citysky-input citysky-textarea">

                        <i className="fa-regular fa-message"></i>

                        <textarea
                          id="citysky-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Vehicle, passengers or other travel requirement..."
                        ></textarea>

                      </div>
                    </div>


                    {/* WHATSAPP SUBMIT */}
                    <div className="col-12">

                      <button
                        type="submit"
                        className="citysky-whatsapp-submit"
                      >
                        <i className="fa-brands fa-whatsapp"></i>

                        <span>Send Enquiry on WhatsApp</span>

                        <i className="fa-solid fa-arrow-right"></i>
                      </button>

                      <p className="citysky-form-note">
                        <i className="fa-solid fa-lock"></i>
                        Your enquiry will open directly in WhatsApp.
                      </p>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* ========================================
          PHONE / EMAIL / ADDRESS
      ======================================== */}
      <div className="citysky-info-section">

        <div className="container">

          <div className="row g-0 citysky-info-wrapper">

            {/* PHONE */}
            <div className="col-md-4">

              <div className="citysky-info-item">

                <div className="citysky-info-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>

                <div>

                  <span>CALL FOR BOOKING</span>

                  <a href="tel:+919272112191 ">
                    +91 9272112191 
                  </a>

                  <a href="tel:+918459883515">
                    +91 8459883515
                  </a>

                </div>

              </div>

            </div>


            {/* EMAIL */}
            <div className="col-md-4">

              <div className="citysky-info-item citysky-info-border">

                <div className="citysky-info-icon">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>

                <div>

                  <span>EMAIL FOR ENQUIRY</span>

                  <a href="mailto:booking@cityskycab.in">
                    booking@cityskycab.in
                  </a>

                </div>

              </div>

            </div>


            {/* ADDRESS */}
            <div className="col-md-4">

              <div className="citysky-info-item citysky-info-border">

                <div className="citysky-info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>

                  <span>OUR OFFICE</span>

                  <p>
                    Office No. 307, 3rd Floor, 52, Sinhgad Rd,
                    Wadgaon Budruk, Narhe, Pune,
                    Maharashtra, India - 411041.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ========================================
          LOCATION + GOOGLE MAP
      ======================================== */}
      <div className="citysky-location">

        <div className="container">

          <div className="citysky-location-title">

            <div>

              <span>
                <i className="fa-solid fa-location-dot"></i>
                FIND CITYSKY CABS
              </span>

              <h2>Visit Our Pune Office</h2>

              <p>
                Office No. 307, 3rd Floor, 52, Sinhgad Rd,
                Wadgaon Budruk, Narhe, Pune,
                Maharashtra, India - 411041.
              </p>

            </div>


            <a
              href="tel:+919272112191"
              className="citysky-location-call"
            >
              <i className="fa-solid fa-phone"></i>
              Call Now
            </a>

          </div>


          {/* MAP */}
          <div className="citysky-map">

            <iframe
              src="https://www.google.com/maps?q=Office+No+307+52+Sinhgad+Road+Wadgaon+Budruk+Narhe+Pune+411041&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Citysky Cabs Pune Office Location"
            ></iframe>


            <div className="citysky-map-label">

              <div className="citysky-map-pin">
                <i className="fa-solid fa-car-side"></i>
              </div>

              <div>
                <strong>Citysky Cabs</strong>
                <span>Narhe, Pune</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
</>
  );
};

export default ContactUs;