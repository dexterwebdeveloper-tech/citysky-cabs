import React from "react";
import {
  FaUserTie,
  FaCarSide,
  FaClock,
  FaHeadset,
  FaFileInvoiceDollar,
  FaBuilding,
  FaCar,
} from "react-icons/fa";

import "./CorporateTransportation.css";

const corporateFeatures = [
  {
    icon: <FaUserTie />,
    title: "Professional & Uniformed Drivers",
    description:
      "Trained, verified and professional chauffeurs for safe and comfortable corporate travel.",
  },
  {
    icon: <FaCarSide />,
    title: "Well-Maintained Vehicles",
    description:
      "Clean, comfortable and regularly maintained vehicles for reliable business transportation.",
  },
  {
    icon: <FaClock />,
    title: "Timely Service",
    description:
      "Punctual pickups and drop-offs designed around your company's schedule and requirements.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Responsive assistance for bookings, route planning and ongoing corporate transportation needs.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Flexible Billing",
    description:
      "Convenient and flexible billing options designed to suit different corporate requirements.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Monthly Contracts",
    description:
      "Customized monthly transportation solutions for regular employee and business travel.",
  },
  {
    icon: <FaCar />,
    title: "Replacement Vehicle Support",
    description:
      "Quick replacement vehicle assistance to help keep your business transportation uninterrupted.",
  },
];

const CorporateTransportation = () => {
  return (
    <section className="corporate-section">
      {/* Background Decorations */}
      <div className="corporate-circle circle-one"></div>
      <div className="corporate-circle circle-two"></div>

      <div className="corporate-container">
        {/* Heading */}
        <div className="corporate-heading">
          <span className="corporate-tag">
            <span className="tag-line"></span>
            FOR BUSINESS
            <span className="tag-line"></span>
          </span>

          <h2>
            Corporate Transportation
            <span> Solutions</span>
          </h2>

          <p>
            Reliable, professional and flexible transportation solutions
            designed for businesses, employees and corporate travel.
          </p>
        </div>

        {/* Features */}
        <div className="corporate-grid">
          {corporateFeatures.map((feature, index) => (
            <div className="corporate-card" key={index}>
              <div className="corporate-icon">{feature.icon}</div>

              <div className="corporate-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="corporate-bottom">
          <div>
            <span>Looking for a corporate travel partner?</span>
            <h3>Let's simplify your business transportation.</h3>
          </div>

          <a href="/contact" className="corporate-btn">
            Get Corporate Quote
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorporateTransportation;