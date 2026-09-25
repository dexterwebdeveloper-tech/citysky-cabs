import React from "react";
import "./TermsConditions.css";

const termsData = [
  {
    number: "01",
    title: "Booking Confirmation",
    description:
      "Every CitySky Cabs booking is subject to vehicle and driver availability. A booking will be considered confirmed only after the required travel details are received and our team confirms the requested service. Customers should provide their name, contact number, pickup point, destination, journey date, vehicle requirement, and other relevant details at the time of booking.",
  },
  {
    number: "02",
    title: "Providing Correct Information",
    description:
      "Customers are responsible for providing accurate pickup and drop locations, travel dates, passenger details, contact information, and special requirements. Incorrect or incomplete information may affect the service arrangement and any additional distance, waiting time, route changes, or other expenses resulting from incorrect details may be charged separately.",
  },
  {
    number: "03",
    title: "Cab Service Usage",
    description:
      "CitySky Cabs provides transportation for local travel, airport transfers, outstation journeys, one-way trips, round trips, corporate travel, family transportation, pilgrimage travel, and other approved requirements. The vehicle must only be used for lawful transportation purposes and customers must follow applicable travel and safety regulations.",
  },
  {
    number: "04",
    title: "Fare & Payment",
    description:
      "Cab fares depend on the vehicle category, journey distance, route, travel duration, trip type, and other applicable service requirements. Payment may be made through available cash, UPI, online payment, or bank transfer options. Certain bookings may require an advance payment before the vehicle is confirmed.",
  },
  {
    number: "05",
    title: "Cancellation & Changes",
    description:
      "Customers should notify CitySky Cabs as early as possible if they need to cancel or modify a confirmed booking. Cancellation or modification charges may apply depending on the vehicle, journey type, travel date, booking conditions, and the time remaining before the scheduled pickup.",
  },
  {
    number: "06",
    title: "Pickup & Drop Locations",
    description:
      "Customers should be available at the confirmed pickup location at the agreed time. Any request to change the pickup point, destination, route, or additional stopping locations after confirmation may result in additional charges based on the extra distance, time, tolls, parking, or other travel expenses.",
  },
  {
    number: "07",
    title: "Waiting Time",
    description:
      "Drivers may wait for customers for the agreed or reasonable pickup waiting period. Additional waiting charges can apply when the customer requests extended waiting or is unavailable beyond the included waiting time. Airport, railway station, event, and special pickup requirements may have different waiting conditions.",
  },
  {
    number: "08",
    title: "Tolls, Parking & Taxes",
    description:
      "Toll fees, parking charges, interstate taxes, permits, entry fees, ferry charges, and other route-related expenses may be payable separately unless they are specifically included in the confirmed fare. Customers will be responsible for applicable expenses associated with changes or additional travel requested during the journey.",
  },
  {
    number: "09",
    title: "Vehicle Capacity & Luggage",
    description:
      "Passengers must remain within the approved seating capacity of the selected vehicle. Luggage should be suitable for the available boot and passenger space. CitySky Cabs may not be able to accommodate excess luggage when it affects passenger safety, seating capacity, or vehicle operation.",
  },
  {
    number: "10",
    title: "Driver & Passenger Conduct",
    description:
      "Drivers are expected to operate vehicles responsibly and follow applicable traffic and safety regulations. Passengers are also expected to behave respectfully and cooperate with the driver. Abusive, threatening, dangerous, or disruptive behaviour may result in the service being discontinued where reasonably necessary for safety.",
  },
  {
    number: "11",
    title: "Prohibited Activities",
    description:
      "Smoking, carrying illegal substances, transporting hazardous materials, damaging the vehicle, or engaging in activities that may put passengers, drivers, or other road users at risk is not permitted. Any repair, cleaning, or damage-related cost caused by passenger misuse may be recoverable from the customer.",
  },
  {
    number: "12",
    title: "Travel Time & Delays",
    description:
      "Journey duration is an estimate and may change because of traffic congestion, road conditions, weather, accidents, road closures, festivals, traffic restrictions, toll delays, or other circumstances outside our control. Customers should allow sufficient additional time when travelling for flights, trains, buses, appointments, or events.",
  },
  {
    number: "13",
    title: "Vehicle Replacement",
    description:
      "In situations involving vehicle breakdowns, maintenance requirements, availability issues, or other unavoidable circumstances, CitySky Cabs may arrange another vehicle of a similar category where reasonably possible. Vehicle replacement will depend on availability and operational conditions at the time.",
  },
  {
    number: "14",
    title: "Personal Belongings",
    description:
      "Passengers are responsible for their mobile phones, wallets, documents, luggage, electronic devices, and other personal belongings. Customers should check the vehicle carefully before leaving. CitySky Cabs should be informed as soon as possible if an item is accidentally left behind.",
  },
  {
    number: "15",
    title: "Service Interruptions",
    description:
      "CitySky Cabs may modify, delay, reschedule, replace, or discontinue a service when required due to severe weather, road restrictions, government orders, vehicle breakdowns, safety concerns, strikes, emergencies, or other circumstances that make the originally planned journey impractical or unsafe.",
  },
  {
    number: "16",
    title: "Refunds",
    description:
      "Where a refund is applicable, the amount will depend on the booking terms, cancellation conditions, payment method, and services already provided. Approved refunds may require additional processing time depending on the selected payment channel or banking institution.",
  },
];

const serviceRules = [
  {
    title: "One-Way Trips",
    text: "One-way bookings cover the confirmed pickup and destination. Any additional route, stop, waiting, or return requirement should be communicated to the team before or during the journey.",
  },
  {
    title: "Round Trips",
    text: "Round-trip services should have the travel route, journey date, vehicle, and expected return arrangement confirmed before departure. Changes to the agreed itinerary may affect the final fare.",
  },
  {
    title: "Airport Transfers",
    text: "Customers should provide correct flight and pickup information wherever applicable. Traffic, flight delays, airport restrictions, and waiting requirements may affect the pickup arrangement.",
  },
  {
    title: "Outstation Travel",
    text: "For outstation journeys, applicable tolls, parking, permits, state taxes, driver allowances, and other route-related charges will be handled according to the confirmed booking terms.",
  },
];

const TermsConditions = () => {
  return (
    <main className="terms-page">

 <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
    </div>

      {/* Hero */}
      {/* <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">

            <span className="terms-label">CITYSKY CABS</span>

            <h1>Terms & Conditions</h1>

            <p>
              Please review the following terms before booking or using a
              CitySky Cabs service. These guidelines help maintain a smooth,
              safe, and transparent travel experience for customers and
              drivers.
            </p>

            <div className="terms-badges">
              <span>Safe Travel</span>
              <span>Clear Policies</span>
              <span>Reliable Service</span>
            </div>

          </div>
        </div>
      </section> */}

      {/* Intro */}
      <section className="terms-intro">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="terms-intro-text">

                <span className="section-tag">
                  BEFORE YOUR JOURNEY
                </span>

                <h2>
                  Clear Terms for a <span>Smooth Cab Experience</span>
                </h2>

                <p>
                  CitySky Cabs aims to make every journey comfortable,
                  organized, and dependable. These Terms & Conditions explain
                  the basic responsibilities of the customer and the service
                  provider when a cab is booked through our team.
                </p>

                <p>
                  By confirming a booking or using our transportation services,
                  customers agree to follow the applicable booking,
                  cancellation, payment, safety, and travel guidelines
                  mentioned on this page.
                </p>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="terms-intro-card">

                <div className="terms-icon">
                  <i className="fa fa-file-contract"></i>
                </div>

                <span className="card-small-title">
                  SERVICE AGREEMENT
                </span>

                <h3>Travel With Clarity</h3>

                <p>
                  Our terms are designed to clearly explain booking
                  requirements, customer responsibilities, charges, and
                  service conditions.
                </p>

                <div className="intro-stats">

                  <div>
                    <strong>24×7</strong>
                    <span>Travel Support</span>
                  </div>

                  <div>
                    <strong>100%</strong>
                    <span>Clear Booking</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Terms */}
      <section className="terms-section">
        <div className="container">

          <div className="terms-heading">
            <span className="section-tag">
              BOOKING GUIDELINES
            </span>

            <h2>
              CitySky Cabs <span>Terms of Service</span>
            </h2>

            <p>
              The following conditions apply to cab bookings and transportation
              services unless a different condition has been specifically
              agreed upon during booking.
            </p>
          </div>

          <div className="row">

            {termsData.map((item, index) => (
              <div className="col-lg-6" key={index}>

                <div
                  className={`terms-card ${
                    index % 2 === 0
                      ? "terms-orange"
                      : "terms-blue"
                  }`}
                >

                  <div className="terms-number">
                    {item.number}
                  </div>

                  <div className="terms-card-content">

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Service Policies */}
      <section className="service-rules">
        <div className="container">

          <div className="terms-heading">
            <span className="section-tag">
              TRAVEL CONDITIONS
            </span>

            <h2>
              Important <span>Service Guidelines</span>
            </h2>

            <p>
              Different types of journeys may have additional requirements.
              Customers should confirm relevant details before starting their
              trip.
            </p>
          </div>

          <div className="row">

            {serviceRules.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>

                <div className="service-rule-card">

                  <div className="rule-top">
                    <span>0{index + 1}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="rule-bottom"></div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Customer Responsibility */}
      <section className="responsibility-section">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <div className="responsibility-image">

                <img
                  src="/images/term.jpg"
                  alt="CitySky Cabs Terms and Conditions"
                />

                <div className="image-overlay">
                  <strong>CitySky Cabs</strong>
                  <span>Safe • Comfortable • Reliable</span>
                </div>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="responsibility-content">

                <span className="section-tag">
                  CUSTOMER RESPONSIBILITY
                </span>

                <h2>
                  What Customers Should <span>Keep in Mind</span>
                </h2>

                <p>
                  A successful cab journey depends on accurate information,
                  timely communication, and responsible use of the vehicle.
                  Customers are requested to follow these basic guidelines.
                </p>

                <div className="responsibility-list">

                  <div>
                    <i className="fa fa-check"></i>
                    <p>
                      Be available at the confirmed pickup point around the
                      scheduled pickup time.
                    </p>
                  </div>

                  <div>
                    <i className="fa fa-check"></i>
                    <p>
                      Provide correct travel, passenger, and contact details
                      during booking.
                    </p>
                  </div>

                  <div>
                    <i className="fa fa-check"></i>
                    <p>
                      Follow vehicle safety instructions and use seat belts
                      wherever available.
                    </p>
                  </div>

                  <div>
                    <i className="fa fa-check"></i>
                    <p>
                      Keep personal belongings and luggage secure throughout
                      the journey.
                    </p>
                  </div>

                  <div>
                    <i className="fa fa-check"></i>
                    <p>
                      Inform the CitySky Cabs team promptly about major changes
                      to your travel plan.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Safety */}
      <section className="safety-section">
        <div className="container">

          <div className="safety-box">

            <div className="safety-icon">
              <i className="fa fa-shield-alt"></i>
            </div>

            <div>
              <span>SAFETY FIRST</span>

              <h2>
                Responsible Travel Is Everyone's Responsibility
              </h2>

              <p>
                Passengers should follow applicable road safety rules and
                cooperate with the driver during the journey. Activities that
                create a safety risk for passengers, drivers, vehicles, or
                other road users are not permitted.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Important Note */}
      <section className="terms-note">
        <div className="container">

          <div className="note-card">

            <div className="note-icon">
              !
            </div>

            <div>

              <span>IMPORTANT NOTE</span>

              <h3>
                Please Confirm Your Booking Details Carefully
              </h3>

              <p>
                Customers should verify the pickup location, destination,
                journey date, vehicle type, passenger count, and other booking
                details before confirming the trip. Additional charges may
                apply when changes are requested after confirmation.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Jurisdiction */}
      <section className="jurisdiction-section">
        <div className="container">

          <div className="jurisdiction-card">

            <div className="jurisdiction-icon">
              <i className="fa fa-balance-scale"></i>
            </div>

            <div>

              <span>LEGAL & JURISDICTION</span>

              <h2>Applicable Terms & Local Laws</h2>

              <p>
                Any matter or dispute relating to services provided by
                CitySky Cabs will be handled according to applicable laws and
                the appropriate local jurisdiction.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="terms-cta">
        <div className="container">

          <div className="terms-cta-inner">

            <div>
              <span>READY TO TRAVEL?</span>

              <h2>Book Your CitySky Cab</h2>

              <p>
                Contact CitySky Cabs for your next local, airport, or
                outstation journey.
              </p>
            </div>

            <div className="terms-buttons">

              <a
                href="https://wa.me/918459883515?text=Hello%20CitySky%20Cabs%2C%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noreferrer"
                className="terms-whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>

              <a
                href="tel:+918459883515"
                className="terms-call"
              >
                <i className="fa fa-phone"></i>
                Call Now
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default TermsConditions;