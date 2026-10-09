import React from "react";



const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    image: "/images/fleet/Swift-Dzire.jpg",
    seats: "4+1 Seats",
    luggage: "2 Bags",
    type: "Sedan",
    desc: "Comfortable and economical sedan for Pune local travel, airport transfers, railway station pickup and outstation journeys.",
  },

  {
    id: 2,
    name: "Maruti Ertiga",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "MPV",
    desc: "Spacious MPV suitable for family trips, airport transfers, pilgrimage tours, weekend trips and outstation travel.",
  },

  {
    id: 3,
    name: "Toyota Rumion",
    image: "/images/fleet/Toyota-Rumion.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "MPV",
    desc: "Comfortable Toyota Rumion for family travel, Pune local trips, airport transfers and long-distance outstation journeys.",
  },

  {
    id: 4,
    name: "Kia Carens",
    image: "/images/fleet/Kia-Carens.jpg",
    seats: "6+1 Seats",
    luggage: "4 Bags",
    type: "MPV",
    desc: "Modern and spacious Kia Carens suitable for family tours, business travel, airport transfers and outstation journeys.",
  },

  {
    id: 5,
    name: "Toyota Innova",
    image: "/images/fleet/Innova-Cab.jpg",
    seats: "7+1 Seats",
    luggage: "4 Bags",
    type: "MUV",
    desc: "Reliable Toyota Innova for family tours, corporate travel, airport transfers, pilgrimage trips and outstation journeys from Pune.",
  },

  {
    id: 6,
    name: "Toyota Innova Crysta",
    image: "/images/fleet/Innova-Crysta.jpg",
    seats: "7+1 Seats",
    luggage: "5 Bags",
    type: "Premium MUV",
    desc: "Spacious Innova Crysta for corporate travel, family tours, airport transfers and comfortable long-distance journeys from Pune.",
  },

  {
    id: 7,
    name: "Tempo Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    seats: "12-17 Seats",
    luggage: "10 Bags",
    type: "Tempo Traveller",
    desc: "Ideal for family groups, corporate outings, pilgrimage tours, weddings, picnics and group outstation travel.",
  },

  {
    id: 8,
    name: "Force Urbania",
    image: "/images/fleet/Urbania-Bus.jpg",
    seats: "13-17 Seats",
    luggage: "12 Bags",
    type: "Urbania",
    desc: "Spacious Force Urbania for corporate groups, family tours, airport transfers, weddings and comfortable group travel.",
  },

  {
    id: 9,
    name: "Mini Bus",
    image: "/images/fleet/Mini-Bus.jpg",
    seats: "20-25 Seats",
    luggage: "20 Bags",
    type: "Mini Bus",
    desc: "Suitable for corporate events, weddings, school and college trips, picnics, pilgrimage tours and large group travel.",
  },
];

const Booking = () => {
  return (
    <>
    
    
 <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
              Online Booking
            </h1>
          </div>
        </div>
      </div>
    </div>


      


      <section className="booking-section ">

        <div className="container">

          <div className="text-center mb-5">

           

          </div>

          {vehicles.map((car, index) => (
            <div
              key={car.id}
              className={`booking-card row align-items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-lg-5">

                <div className="booking-image">

                  <img
                    src={car.image}
                    alt={car.name}
                    className="img-fluid"
                  />

                  <span className="vehicle-badge">
                    {car.type}
                  </span>

                </div>

              </div>

              <div className="col-lg-7">

              

                <h3>{car.name}</h3>

                {/* <p>{car.desc}</p> */}
                                <div className="booking-features">

                  <div className="feature-box">
                    <i className="fas fa-users"></i>
                    <div>
                      <small>Capacity</small>
                      <span>{car.seats}</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-suitcase"></i>
                    <div>
                      <small>Luggage</small>
                      <span>{car.luggage}</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-snowflake"></i>
                    <div>
                      <small>Facility</small>
                      <span>Air Conditioned</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-user-tie"></i>
                    <div>
                      <small>Driver</small>
                      <span>Professional Chauffeur</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-map-marked-alt"></i>
                    <div>
                      <small>Service</small>
                      <span>Local & Outstation</span>
                    </div>
                  </div>

                  <div className="feature-box">
                    <i className="fas fa-clock"></i>
                    <div>
                      <small>Availability</small>
                      <span>24×7 Service</span>
                    </div>
                  </div>

                </div>

                <div className="booking-actions">

              <a
  href={`https://wa.me/919272112191 1?text=${encodeURIComponent(
    `Hello Citysky Cabs, I want to book ${car.name}. Please share the fare and availability.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="booking-btn whatsapp-btn"
>
  <i className="fab fa-whatsapp"></i>
  Book Now
</a>

                 <a
  href="tel:+919272112191"
  className="booking-btn call-btn"
>
  <i className="fas fa-phone-alt"></i>
  Call Now
</a>


                </div>

              </div>
            </div>
          ))}

          <div className="booking-bottom">

            <div className="row align-items-center">

              <div className="col-lg-8">

                <h2>
                  Need a Comfortable Ride Anywhere?
                </h2>

          <p>
  Sai Shirdi Cabs offers reliable cab services for Sai Baba Darshan,
  Shirdi pilgrimage tours, local sightseeing, airport transfers,
  one-way and round-trip taxi services, family trips, and outstation
  travel. Book comfortable cars, SUVs, and tempo travellers with
  experienced drivers for a safe and convenient Shirdi journey.
</p>

              </div>

              <div className="col-lg-4 text-lg-end">

               <a
  href="tel:+919272112191 "
  className="booking-main-btn"
>
  <i className="fas fa-phone-alt me-2"></i>
  Book Your Cab
</a>


              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Booking;