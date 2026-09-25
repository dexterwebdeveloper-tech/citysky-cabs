import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Pune to Shirdi Innova Crysta",
    image: "/images/keyword/10.jpg",
    category: "Pilgrimage Cab",
    description:
      "Travel comfortably from Pune to Shirdi in a premium Innova Crysta with spacious seating, generous luggage space and an experienced chauffeur. Ideal for Sai Baba pilgrimage trips, family journeys and convenient same-day or multi-day travel.",
    route: "Pune → Shirdi",
    vehicle: "Innova Crysta",
  },
  {
    id: 2,
    title: "Innova Crysta on Rent in Pune",
    image: "/images/keyword/2.jpg",
    category: "Premium Car Rental",
    description:
      "Rent an Innova Crysta in Pune for corporate travel, family functions, airport transfers, weddings, sightseeing and outstation journeys. Enjoy a premium and spacious vehicle with professional chauffeur service for a comfortable journey.",
    route: "Pune Local & Outstation",
    vehicle: "Innova Crysta",
  },
  {
    id: 3,
    title: "Pune to Matheran Cabs",
    image: "/images/keyword/61.jpg",
    category: "Hill Station Travel",
    description:
      "Explore Matheran from Pune with a comfortable private cab service designed for family holidays, weekend getaways and group trips. Enjoy a convenient road journey with flexible pickup options and an experienced driver.",
    route: "Pune → Matheran",
    vehicle: "Sedan / SUV",
  },
  {
    id: 4,
    title: "Pune to Bhimashankar Cab",
    image: "/images/keyword/63.jpg",
    category: "Temple Travel",
    description:
      "Plan a peaceful journey from Pune to Bhimashankar with a private cab. The service is suitable for devotees, families and groups visiting the Jyotirlinga temple, with comfortable vehicles and convenient return-trip options.",
    route: "Pune → Bhimashankar",
    vehicle: "Car / SUV",
  },
  {
    id: 5,
    title: "Pune to Nashik Cab Service",
    image: "/images/keyword/64.jpg",
    category: "Intercity Cab",
    description:
      "CitySky Cabs offers comfortable Pune to Nashik cab services for business travel, family visits, temple tours and leisure trips. Choose a private vehicle for a convenient and relaxed journey between the two cities.",
    route: "Pune → Nashik",
    vehicle: "Sedan / SUV",
  },
  {
    id: 6,
    title: "Pune to Kolhapur Cab Service",
    image: "/images/keyword/65.jpg",
    category: "Outstation Cab",
    description:
      "Travel from Pune to Kolhapur in a private and comfortable cab suitable for families, business travellers, temple visits and personal trips. Well-maintained vehicles and professional drivers make long-distance travel convenient.",
    route: "Pune → Kolhapur",
    vehicle: "Sedan / SUV",
  },
  {
    id: 7,
    title: "Pune to Alibaug Cab",
    image: "/images/keyword/66.jpg",
    category: "Weekend Getaway",
    description:
      "Enjoy a comfortable Pune to Alibaug cab journey for beach holidays, family vacations and weekend getaways. Private cab travel gives you flexible pickup, convenient stops and a relaxed journey to the Konkan coast.",
    route: "Pune → Alibaug",
    vehicle: "Sedan / SUV",
  },
  {
    id: 8,
    title: "Pune to Ashtavinayak Cabs",
    image: "/images/keyword/69.jpg",
    category: "Pilgrimage Tour",
    description:
      "Travel across the Ashtavinayak temples from Pune with a dedicated cab service for families and pilgrimage groups. Comfortable vehicles and experienced drivers make multi-temple journeys easier to plan and manage.",
    route: "Pune → Ashtavinayak",
    vehicle: "SUV / Traveller",
  },
  {
    id: 9,
    title: "Pune to Pandharpur Cab",
    image: "/images/keyword/73.jpg",
    category: "Religious Travel",
    description:
      "Book a private cab from Pune to Pandharpur for temple visits, family pilgrimage trips and religious journeys. Spacious vehicles, comfortable seating and professional chauffeur support make the road journey convenient.",
    route: "Pune → Pandharpur",
    vehicle: "Sedan / SUV",
  },
];

const Services = () => {
  return (
    <>

     <div className="sisf-banner sis-br-radius mt-3 position-relative">
      <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
        <div className="sisf-m-inner container">
          <div className="sisf-m-content sisf-content-grid">
            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
Services            </h1>
          </div>
        </div>
      </div>
    </div>
      {/* =========================================
          SERVICES BANNER
      ========================================= */}
      {/* <section className="services-banner">
        <div className="services-shape services-shape-one"></div>
        <div className="services-shape services-shape-two"></div>

        <div className="container">
          <div className="services-banner-content">
            <span className="services-tag">
              CITYSKY CABS SERVICES
            </span>

            <h1>
              Our <span>Cab Services</span>
            </h1>

            <p>
              Comfortable Pune Outstation, Pilgrimage, Premium Car Rental
              and Intercity Cab Services
            </p>
          </div>
        </div>
      </section> */}

      {/* =========================================
          SERVICES SECTION
      ========================================= */}
      <section className="services-section">
        <div className="container">

          <div className="services-heading">
            <span className="services-label">
              TRAVEL WITH CITYSKY CABS
            </span>

            <h2>
              Pune Cab Services for Every
              <span> Journey</span>
            </h2>

            <p>
              CitySky Cabs provides comfortable and dependable cab services
              from Pune to popular pilgrimage destinations, hill stations,
              business cities and weekend getaway locations. Select a route
              that matches your travel requirement and enjoy a convenient
              private cab journey.
            </p>
          </div>

          {/* =========================================
              SERVICE CARDS
          ========================================= */}

          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div className="col-md-4" key={service.id}>
                <article
                  className={`service-cardd ${
                    index % 2 === 0
                      ? "service-card-orange"
                      : "service-card-blue"
                  }`}
                >
                  {/* Image */}

                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={`${service.title} - CitySky Cabs`}
                    />

                    <span className="service-category">
                      {service.category}
                    </span>

                    <span className="service-number">
                      {String(service.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="service-content">
                    <h3>{service.title}</h3>

                    <p>
                      {service.description}
                    </p>

                    {/* Route Information */}

                    <div className="service-route">
                      <div className="route-item">
                        <span>Route</span>
                        <strong>{service.route}</strong>
                      </div>

                      <div className="route-item">
                        <span>Vehicle</span>
                        <strong>{service.vehicle}</strong>
                      </div>
                    </div>

                    {/* Bottom */}

                    <div className="service-footer">
                      <span>
                        <i className="fas fa-check-circle"></i>
                        Private Cab
                      </span>

                      <span>
                        <i className="fas fa-user-tie"></i>
                        Chauffeur
                      </span>

                      <span>
                        <i className="fas fa-snowflake"></i>
                        AC
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* =========================================
              SERVICE INFORMATION
          ========================================= */}

          <div className="services-info">

            <div className="services-info-image">
              <img
                src="/images/gallery/1.jpeg"
                alt="Pune Outstation Cab Services"
              />
            </div>

            <div className="services-info-content">
              <span>PRIVATE TRAVEL MADE EASY</span>

              <h2>
                Comfortable Travel from Pune to
                <strong> Popular Destinations</strong>
              </h2>

              <p>
                Whether you are planning a pilgrimage to Shirdi,
                Bhimashankar or Pandharpur, a weekend trip to Matheran or
                Alibaug, or an intercity journey towards Nashik and Kolhapur,
                CitySky Cabs provides private cab options for different travel
                requirements. Our fleet includes comfortable sedans, spacious
                SUVs and premium vehicles for families, business travellers
                and groups.
              </p>

              <div className="services-points">
                <div>
                  <i className="fas fa-car"></i>
                  <span>Multiple Vehicle Options</span>
                </div>

                <div>
                  <i className="fas fa-user-tie"></i>
                  <span>Professional Chauffeurs</span>
                </div>

                <div>
                  <i className="fas fa-route"></i>
                  <span>One-Way &amp; Round Trips</span>
                </div>

                <div>
                  <i className="fas fa-map-marked-alt"></i>
                  <span>Popular Outstation Routes</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Services;