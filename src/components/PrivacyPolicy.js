import React from "react";
import "./PrivacyPolicy.css";

const privacySections = [
  {
    number: "01",
    title: "Information We Collect",
    text: "When you contact CitySky Cabs or request a cab booking, we may collect information such as your name, mobile number, email address, pickup location, destination, travel date, vehicle preference, passenger details, and other information required to arrange your journey.",
  },
  {
    number: "02",
    title: "Booking Information",
    text: "The information provided during booking helps CitySky Cabs understand your travel requirements and arrange the appropriate vehicle and driver. Customers are requested to provide correct and updated information to avoid difficulties during the journey.",
  },
  {
    number: "03",
    title: "How We Use Your Information",
    text: "Customer information may be used to confirm bookings, coordinate pickup and drop services, communicate with passengers, provide driver details, respond to enquiries, process payments, offer customer support, improve our website, and maintain reliable transportation services.",
  },
  {
    number: "04",
    title: "Communication With Customers",
    text: "CitySky Cabs may contact customers through phone calls, WhatsApp, SMS, or email regarding their enquiry or confirmed booking. Communication may include booking confirmation, pickup details, driver information, payment updates, travel changes, and other service-related information.",
  },
  {
    number: "05",
    title: "Payment Information",
    text: "If online payment facilities are available, transactions may be processed through external payment gateways, banking platforms, or other authorized payment providers. CitySky Cabs does not intentionally store confidential payment credentials such as card PINs, CVV numbers, passwords, or banking login details.",
  },
  {
    number: "06",
    title: "Cookies & Website Data",
    text: "Our website may use cookies and similar technologies to support website functionality, understand visitor interaction, improve navigation, monitor performance, and enhance the overall user experience. Browser settings may allow visitors to control certain cookie preferences.",
  },
  {
    number: "07",
    title: "Sharing of Information",
    text: "Customer information is not intended to be sold or rented to unrelated third parties. Relevant information may be shared with assigned drivers, service partners, payment providers, technical service providers, or other parties when necessary to complete a requested transportation service.",
  },
  {
    number: "08",
    title: "Protection of Personal Information",
    text: "CitySky Cabs takes reasonable measures to protect customer information against unauthorized access, misuse, alteration, or disclosure. However, no online communication or electronic storage system can guarantee complete security.",
  },
  {
    number: "09",
    title: "Third-Party Services",
    text: "Our website may contain links or integrations involving external services such as payment platforms, maps, social media, or other websites. The privacy practices of those third-party platforms may apply when customers use their services.",
  },
  {
    number: "10",
    title: "Data Retention",
    text: "Customer information may be retained for a reasonable period when required for booking management, customer support, accounting, legal compliance, dispute resolution, service improvement, or other legitimate business requirements.",
  },
  {
    number: "11",
    title: "Customer Rights & Choices",
    text: "Customers may contact CitySky Cabs regarding personal information they have provided. Where applicable, customers may request correction of inaccurate information or ask questions regarding the handling and use of their information.",
  },
  {
    number: "12",
    title: "Policy Updates",
    text: "CitySky Cabs may update this Privacy Policy when required due to changes in services, technology, website functionality, business practices, or applicable regulations. Updated information will be published on this page.",
  },
];

const privacyPoints = [
  "Booking and passenger details are used to arrange requested cab services.",
  "Contact information may be used for important journey-related communication.",
  "Payment credentials such as OTPs, PINs, and passwords should never be shared.",
  "Relevant booking details may be provided to the assigned driver.",
  "Customers should review third-party privacy policies when using external services.",
  "Information may be retained when required for legitimate business or legal purposes.",
];

const servicePolicies = [
  {
    title: "Cab Booking Details",
    text: "Accurate pickup, destination, contact, passenger, and travel information helps our team coordinate your cab service efficiently.",
  },
  {
    title: "WhatsApp & Phone Enquiries",
    text: "Information shared through WhatsApp or phone conversations may be used to answer enquiries, provide fare information, confirm bookings, and coordinate travel arrangements.",
  },
  {
    title: "Location Information",
    text: "Pickup and destination information may be collected because it is necessary to provide transportation. Customers should provide only the location information required for their journey.",
  },
  {
    title: "Service Updates",
    text: "Customers may receive necessary updates concerning their booking, including driver details, pickup instructions, changes to travel arrangements, or payment-related information.",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">


 <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>

      {/* Hero Section */}
      {/* <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <span className="privacy-label">CITYSKY CABS</span>

            <h1>Privacy Policy</h1>

            <p>
              Your privacy matters to us. Learn how CitySky Cabs collects,
              uses, protects, and manages customer information while providing
              cab and transportation services.
            </p>

            <div className="privacy-hero-badges">
              <span>Private</span>
              <span>Secure</span>
              <span>Transparent</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Intro */}
      <section className="privacy-intro">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="intro-content">
                <span className="section-tag">YOUR PRIVACY</span>

                <h2>
                  Your Information, <span>Our Responsibility</span>
                </h2>

                <p>
                  CitySky Cabs respects the privacy of customers and visitors
                  using our website and transportation services. This policy
                  explains the type of information that may be collected when
                  you enquire about or book a cab and how that information may
                  be used to provide a smooth and dependable travel experience.
                </p>

                <p>
                  We aim to handle customer information responsibly and only
                  use relevant details for booking management, communication,
                  service delivery, customer support, and legitimate business
                  requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy-intro-card">
                <div className="privacy-shield">
                  <i className="fa fa-shield-alt"></i>
                </div>

                <h3>Privacy & Security</h3>

                <p>
                  We take reasonable steps to protect information shared with
                  CitySky Cabs during your booking and enquiry process.
                </p>

                <div className="privacy-mini-row">
                  <div>
                    <strong>01</strong>
                    <span>Safe Handling</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Responsible Use</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="privacy-content">
        <div className="container">

          <div className="privacy-heading">
            <span className="section-tag">PRIVACY DETAILS</span>

            <h2>
              How We Handle <span>Your Information</span>
            </h2>

            <p>
              The following sections explain the general information practices
              followed by CitySky Cabs while handling customer enquiries and
              transportation bookings.
            </p>
          </div>

          <div className="row">
            {privacySections.map((section, index) => (
              <div className="col-lg-6" key={index}>
                <article
                  className={`privacy-card ${
                    index % 2 === 0 ? "orange-card" : "blue-card"
                  }`}
                >
                  <div className="privacy-card-number">
                    {section.number}
                  </div>

                  <div className="privacy-card-body">
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="privacy-highlights">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">
              <div className="highlight-image">
                <img
                  src="/images/privacy.png"
                  alt="CitySky Cabs Privacy Policy"
                />
                <div className="image-caption">
                  <strong>CitySky Cabs</strong>
                  <span>Safe • Reliable • Responsible</span>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="highlight-content">
                <span className="section-tag">KEY INFORMATION</span>

                <h2>
                  Important <span>Privacy Practices</span>
                </h2>

                <p>
                  We believe customers should have a clear understanding of
                  how their information may be used while requesting CitySky
                  Cabs services.
                </p>

                <div className="privacy-points">
                  {privacyPoints.map((point, index) => (
                    <div className="privacy-point" key={index}>
                      <div className="point-check">
                        <i className="fa fa-check"></i>
                      </div>

                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Travel & Service Privacy */}
      <section className="service-policy">
        <div className="container">

          <div className="privacy-heading">
            <span className="section-tag">SERVICE PRIVACY</span>

            <h2>
              Cab Booking & <span>Privacy Practices</span>
            </h2>

            <p>
              Some information is required specifically to coordinate your
              transportation service. Here is how common booking information
              is handled.
            </p>
          </div>

          <div className="row">
            {servicePolicies.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="service-policy-card">

                  <div className="service-policy-number">
                    0{index + 1}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="policy-line"></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Security Notice */}
      <section className="security-section">
        <div className="container">

          <div className="security-box">
            <div className="security-icon">
              <i className="fa fa-lock"></i>
            </div>

            <div className="security-text">
              <span>SECURITY NOTICE</span>

              <h2>
                Never Share Your Sensitive Payment Details
              </h2>

              <p>
                CitySky Cabs will not require customers to share confidential
                banking passwords, UPI PINs, ATM PINs, card PINs, or OTPs for
                ordinary booking coordination. Please keep such information
                private and use trusted payment channels.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Important Note */}
      <section className="privacy-note">
        <div className="container">

          <div className="note-box">

            <div className="note-symbol">!</div>

            <div>
              <span>IMPORTANT INFORMATION</span>

              <h3>Your Privacy Is Important To Us</h3>

              <p>
                By using the CitySky Cabs website, submitting an enquiry, or
                requesting a cab service, you acknowledge that you have read
                and understood this Privacy Policy. This policy may be revised
                from time to time to reflect changes in our services,
                technology, business practices, or applicable requirements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="privacy-cta">
        <div className="container">

          <div className="privacy-cta-inner">

            <div>
              <span>NEED A CAB?</span>

              <h2>Travel With CitySky Cabs</h2>

              <p>
                Have questions about your booking or our privacy practices?
                Contact the CitySky Cabs team for assistance.
              </p>
            </div>

            <div className="cta-buttons">
              <a
                href="https://wa.me/918459883515?text=Hello%20CitySky%20Cabs%2C%20I%20have%20a%20query."
                target="_blank"
                rel="noreferrer"
                className="privacy-whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>

              <a
                href="tel:+918459883515"
                className="privacy-call"
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

export default PrivacyPolicy;