import React from "react";
   import { Car, UserRound, Route } from "lucide-react";

import "./OutNetwork.css";

const networkRoutes = [
  {
    id: 1,
    title: "Mumbai Outstation Cabs",
    image: "/images/network/Mumbai-Outstations.png",
    description:
      "Comfortable outstation cab services from Mumbai to major cities, business destinations and popular travel locations with well-maintained vehicles and professional drivers.",
  },
  {
    id: 2,
    title: "Mumbai - Pune - Mumbai",
    image: "/images/network/Mumbai--Pune---Mumbai.png",
    description:
      "Convenient Mumbai to Pune and Pune to Mumbai cab services for business travel, airport transfers, family journeys, meetings and same-day return trips.",
  },
  {
    id: 3,
    title: "Pune Cab Services",
    image: "/images/network/pune.png",
    description:
      "CitySky Cabs connects Pune with Mumbai, Nashik, Kolhapur, Goa, Sambhaji Nagar and other destinations through comfortable one-way and round-trip cab services.",
  },
  {
    id: 4,
    title: "Nashik Cab Services",
    image: "/images/network/nashik.png",
    description:
      "Travel comfortably between Mumbai, Pune and Nashik with spacious cars, experienced chauffeurs and flexible options for business, family and leisure journeys.",
  },
  {
    id: 5,
    title: "Kolhapur Cab Services",
    image: "/images/network/kolhapur.png",
    description:
      "Reliable cab connectivity to Kolhapur from Mumbai, Pune and other destinations for family trips, business travel, events and long-distance journeys.",
  },
  {
    id: 6,
    title: "Goa Cab Services",
    image: "/images/network/goa.png",
    description:
      "Enjoy a comfortable road journey to Goa with private cab services from Mumbai, Pune and other cities, suitable for families, couples and groups.",
  },
  {
    id: 7,
    title: "Sambhaji Nagar",
    image: "/images/network/sambhaji-nagar.png",
    description:
      "Comfortable cab services to Sambhaji Nagar (Aurangabad) from Mumbai, Pune and nearby cities with convenient pickup and drop facilities.",
  },
  {
    id: 8,
    title: "Mumbai to Pan India Cabs",
    image: "/images/network/pan-india.png",
    description:
      "CitySky Cabs extends its outstation network beyond Maharashtra with long-distance cab services connecting Mumbai to destinations across India.",
  },
];

const OutNetwork = () => {
  return (
    <>

     <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              CITYSKY CABS OUTSTATION NETWORK
            </h1>
          </div>
        </div>
      </div>
    </div>


      {/* =========================================
          BANNER
      ========================================= */}
 
      {/* =========================================
          INTRODUCTION
      ========================================= */}
      <section className="outnetwork-section">
        <div className="container">
          <div className="outnetwork-heading">
            <span className="section-label">
              OUR TRAVEL NETWORK
            </span>

            <h2>
              Mumbai Outstations, Mumbai-Pune-Mumbai &amp;
              <span> Pan India Cabs</span>
            </h2>

            <p>
              CitySky Cabs provides dependable outstation transportation from
              Mumbai with convenient connectivity to Pune, Nashik, Kolhapur,
              Goa, Sambhaji Nagar (Aurangabad) and destinations across India.
              Our cab network is suitable for business travel, family
              journeys, holidays, airport transfers, events and long-distance
              road trips.
            </p>
          </div>

          {/* =========================================
              DESTINATION CARDS
          ========================================= */}
          <div className="row g-4">
            {networkRoutes.map((route) => (
              <div className="col-lg-4 col-md-4" key={route.id}>
                <div className="network-card">
                  <div className="network-image">
                    <img
                      src={route.image}
                      alt={`${route.title} - CitySky Cabs`}
                    />

                    <span className="network-number">
                      {String(route.id).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="network-card-content">
                    <h3>{route.title}</h3>

                    <p>{route.description}</p>

                    <div className="network-bottom-line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================
              DESTINATION NETWORK
          ========================================= */}
          {/* <div className="network-destination-box">
            <div className="destination-text">
              <span>CONNECTED DESTINATIONS</span>

              <h3>
                One Cab Network, Multiple Destinations
              </h3>

              <p>
                Mumbai • Pune • Nashik • Kolhapur • Goa • Sambhaji Nagar
                (Aurangabad) • Pan India
              </p>
            </div>

            <div className="destination-image">
              <img
                src="/images/network/network-map.jpg"
                alt="CitySky Cabs Outstation Network"
              />
            </div>
          </div> */}

          {/* =========================================
              SERVICE FEATURES
          ========================================= */}

<div className="network-features">
  <div className="network-feature">
    <div className="network-feature-icon">
      <Car size={40} strokeWidth={1.8} />
    </div>

    <div>
      <h4>Comfortable Vehicles</h4>
      <p>
        Sedans, SUVs, premium cars and group travel vehicles are
        available for different journey requirements.
      </p>
    </div>
  </div>

  <div className="network-feature">
    <div className="network-feature-icon">
      <UserRound size={40} strokeWidth={1.8} />
    </div>

    <div>
      <h4>Professional Drivers</h4>
      <p>
        Experienced chauffeurs help make intercity and long-distance
        journeys comfortable and convenient.
      </p>
    </div>
  </div>

  <div className="network-feature">
    <div className="network-feature-icon">
      <Route size={40} strokeWidth={1.8} />
    </div>

    <div>
      <h4>Flexible Outstation Travel</h4>
      <p>
        One-way and round-trip options are available for business,
        family, leisure and long-distance travel.
      </p>
    </div>
  </div>
</div>


          {/* =========================================
              FINAL CTA
          ========================================= */}
          <div className="outnetwork-cta">
            <div className="cta-content">
              <h2>Travel Beyond Mumbai With CitySky Cabs</h2>

              <p>
                From Mumbai-Pune-Mumbai journeys to Nashik, Kolhapur, Goa,
                Sambhaji Nagar and Pan India destinations, CitySky Cabs helps
                you plan comfortable and convenient outstation travel.
              </p>
            </div>

            <div className="cta-buttons">
              <a
                href="https://wa.me/918459883515?text=Hello%20CitySky%20Cabs%2C%20I%20want%20to%20book%20an%20outstation%20cab."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp"
              >
                WhatsApp
              </a>

              <a
                href="tel:+918459883515"
                className="cta-call"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutNetwork;