import React from "react";
import "./OurFleet.css";

const fleetData = [
  {
    id: 1,
    name: "Swift Dzire",
    image: "/images/fleet/Swift-Dzire.jpg",
    seats: "4+1 Seats",
    luggage: "2 Bags",
    type: "Sedan",
    description:
      "A comfortable and economical sedan for Pune local travel, airport transfers, business trips and outstation journeys.",
  },

  {
    id: 2,
    name: "Maruti Ertiga",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "MPV",
    description:
      "A spacious MPV suitable for family trips, airport transfers, pilgrimage tours, weekend trips and outstation travel.",
  },

  {
    id: 3,
    name: "Toyota Rumion",
    image: "/images/fleet/Toyota-Rumion.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "MPV",
    description:
      "A comfortable Toyota Rumion with spacious seating for family travel, airport transfers, city trips and outstation journeys.",
  },

  {
    id: 4,
    name: "Kia Carens",
    image: "/images/fleet/Kia-Carens.jpg",
    seats: "6+1 Seats",
    luggage: "4 Bags",
    type: "MPV",
    description:
      "A modern and spacious Kia Carens suitable for family tours, corporate travel, airport transfers and long-distance journeys.",
  },

  {
    id: 5,
    name: "Toyota Innova",
    image: "/images/fleet/Innova-Cab.jpg",
    seats: "7+1 Seats",
    luggage: "4 Bags",
    type: "MUV",
    description:
      "A reliable Toyota Innova for family tours, corporate travel, airport transfers, pilgrimage trips and outstation journeys.",
  },

  {
    id: 6,
    name: "Toyota Innova Crysta",
    image: "/images/fleet/Innova-Crysta.jpg",
    seats: "7+1 Seats",
    luggage: "5 Bags",
    type: "Premium MUV",
    description:
      "A spacious Innova Crysta with comfortable seating for corporate travel, family tours, airport transfers and long-distance journeys.",
  },

  {
    id: 7,
    name: "Tempo Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    seats: "12-17 Seats",
    luggage: "10 Bags",
    type: "Tempo Traveller",
    description:
      "An ideal group travel option for family tours, corporate outings, weddings, pilgrimage trips, picnics and outstation journeys.",
  },

  {
    id: 8,
    name: "Force Urbania",
    image: "/images/fleet/Urbania-Bus.jpg",
    seats: "13-17 Seats",
    luggage: "12 Bags",
    type: "Urbania",
    description:
      "A spacious Force Urbania suitable for corporate groups, family tours, weddings, airport transfers and comfortable group journeys.",
  },

  {
    id: 9,
    name: "Mini Bus",
    image: "/images/fleet/Mini-Bus.jpg",
    seats: "20-25 Seats",
    luggage: "20 Bags",
    type: "Mini Bus",
    description:
      "A convenient option for corporate events, weddings, school and college trips, picnics, pilgrimage tours and large group travel.",
  },
];

const OurFleet = () => {
  return (
    <>

    
 <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Our <span>Fleet</span>
            </h1>
          </div>
        </div>
      </div>
    </div>

      {/* =========================================
          FLEET BANNER
      ========================================= */}
      {/* <section className="fleet-banner">
        <div className="fleet-banner-circle fleet-circle-one"></div>
        <div className="fleet-banner-circle fleet-circle-two"></div>

        <div className="container">
          <div className="fleet-banner-content">
            <span className="fleet-banner-tag">
              CITYSKY CABS
            </span>

            <h1>
              Our <span>Fleet</span>
            </h1>

            <p>
              Comfortable Cars, Premium SUVs &amp; Spacious Group Travel
              Vehicles for City and Outstation Journeys
            </p>
          </div>
        </div>
      </section> */}

      {/* =========================================
          FLEET SECTION
      ========================================= */}
      <section className="fleet-section">
        <div className="container">

          {/* Heading */}

          <div className="fleet-heading">
            <span className="fleet-section-label">
              OUR VEHICLE COLLECTION
            </span>

            <h2>
              Choose the Right Vehicle for Your
              <span> Journey</span>
            </h2>

            <p>
              CitySky Cabs maintains a versatile fleet for individuals,
              families, corporate travellers and groups. From comfortable
              sedans to premium SUVs, Tempo Travellers, Urbania and Mini Buses,
              select a vehicle according to your seating and travel needs.
            </p>
          </div>

          {/* =========================================
              FLEET CARDS
          ========================================= */}

          <div className="row g-4">
            {fleetData.map((vehicle, index) => (
              <div className="col-md-4" key={vehicle.id}>
                <div
                  className={`fleet-card ${
                    index % 2 === 0
                      ? "fleet-card-orange"
                      : "fleet-card-blue"
                  }`}
                >
                  {/* Image */}

                  <div className="fleet-image">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} - CitySky Cabs`}
                    />

                    <div className="fleet-number">
                      {String(vehicle.id).padStart(2, "0")}
                    </div>

                    <div className="fleet-type">
                      {vehicle.type}
                    </div>
                  </div>

                  {/* Information */}

                  <div className="fleet-content">
                    <h3>{vehicle.name}</h3>

                    <p className="fleet-description">
                      {vehicle.description}
                    </p>

                    {/* Vehicle Details */}

                    <div className="fleet-details">

                      <div className="fleet-detail">
                        <i className="fas fa-users"></i>

                        <div>
                          <small>Capacity</small>
                          <strong>{vehicle.seats}</strong>
                        </div>
                      </div>

                      <div className="fleet-detail">
                        <i className="fas fa-suitcase"></i>

                        <div>
                          <small>Luggage</small>
                          <strong>{vehicle.luggage}</strong>
                        </div>
                      </div>

                      <div className="fleet-detail">
                        <i className="fas fa-snowflake"></i>

                        <div>
                          <small>Facility</small>
                          <strong>AC</strong>
                        </div>
                      </div>

                    </div>

                    <div className="fleet-bottom">
                      <span>
                        <i className="fas fa-check-circle"></i>
                        Professional Chauffeur
                      </span>

                      <span>
                        <i className="fas fa-road"></i>
                        City &amp; Outstation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================
              FLEET BOTTOM INFO
          ========================================= */}

          <div className="fleet-info-box">

            <div className="fleet-info-image">
              <img
                src="/images/fleet/Urbania-Bus.jpg"
                alt="CitySky Cabs Fleet"
              />
            </div>

            <div className="fleet-info-content">
              <span>TRAVEL YOUR WAY</span>

              <h2>
                A Vehicle for Every
                <strong> Travel Requirement</strong>
              </h2>

              <p>
                Whether you need a compact sedan for a quick airport transfer,
                a spacious MPV for family travel, a premium Innova Crysta for
                executive journeys or a larger vehicle for group travel,
                CitySky Cabs offers multiple vehicle categories to suit
                different travel requirements.
              </p>

              <div className="fleet-info-points">
                <div>
                  <i className="fas fa-car"></i>
                  <span>Well Maintained Vehicles</span>
                </div>

                <div>
                  <i className="fas fa-user-tie"></i>
                  <span>Experienced Drivers</span>
                </div>

                <div>
                  <i className="fas fa-map-marked-alt"></i>
                  <span>Local &amp; Outstation Travel</span>
                </div>

                <div>
                  <i className="fas fa-clock"></i>
                  <span>Flexible Travel Options</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default OurFleet;