// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Autoplay,
//   Pagination,
// } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const VehicleFleet = () => {
//  const vehicles = [


//   {
//     image: "/images/fleet/Maruti-Ertiga.jpg",
//     type: "MPV",
//     name: "Maruti Ertiga",
//     description:
//       "A spacious MPV suitable for family trips, airport transfers, pilgrimage tours, weekend trips and outstation travel.",
//     luggage: "3 Bags",
//     persons: "6+1 Seats",
//     fuel: "Petrol",
//   },

//   {
//     image: "/images/fleet/Toyota-Rumion.jpg",
//     type: "MPV",
//     name: "Toyota Rumion",
//     description:
//       "A comfortable Toyota Rumion with spacious seating for family travel, airport transfers, city trips and outstation journeys.",
//     luggage: "3 Bags",
//     persons: "6+1 Seats",
//     fuel: "Petrol",
//   },

//   {
//     image: "/images/fleet/Kia-Carens.jpg",
//     type: "MPV",
//     name: "Kia Carens",
//     description:
//       "A modern and spacious Kia Carens suitable for family tours, corporate travel, airport transfers and long-distance journeys.",
//     luggage: "4 Bags",
//     persons: "6+1 Seats",
//     fuel: "Petrol / Diesel",
//   },

 

//   {
//     image: "/images/fleet/Innova-Crysta.jpg",
//     type: "Premium MUV",
//     name: "Toyota Innova Crysta",
//     description:
//       "A spacious Innova Crysta with comfortable seating for corporate travel, family tours, airport transfers and long-distance journeys.",
//     luggage: "5 Bags",
//     persons: "7+1 Seats",
//     fuel: "Diesel",
//   },

//   {
//   image: "/images/fleet/Tempo-Traveller.jpg",
//   type: "Tempo Traveller",
//   name: "Tempo Traveller",
//   description:
//     "A comfortable Tempo Traveller ideal for group tours, family trips, pilgrimage journeys, corporate outings, airport transfers and outstation travel.",
//   luggage: "8 Bags",
//   persons: "12+1 Seats",
//   fuel: "Diesel",
// },

//   {
//   image: "/images/fleet/Urbania-Bus.jpg",
//   type: "Luxury Van",
//   name: "Force Urbania",
//   description:
//     "A premium and spacious Force Urbania designed for family tours, corporate travel, group outings, airport transfers and comfortable long-distance journeys.",
//   luggage: "6 Bags",
//   persons: "16+1 Seats",
//   fuel: "Diesel",
// },




// ];

//   return (
//     <section className="sis-vehicle-list-section section">
//       <div className="container">

//         {/* Section Title */}
//         <div className="row">
//           <div className="col-12">
//             <div className="sisf-sis-section-title text-center sis-section-title">

//               <span className="sisf-m-subtitle sis-text-anime-style-3">
//                 OUR FLEETS
//               </span>

//               <h2 className="sisf-m-title sis-text-anime-style-3">
//                 Explore Our Luxury Fleet for Comfort,
//                 <br />
//                 Style &amp; Performance
//               </h2>

//               {/* <div
//                 className="sisf-m-text"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <p>
//                   Premium sedans, executive SUVs, and luxury vehicles designed
//                   for chauffeur services, airport transfers, business travel,
//                   <br />
//                   and VIP journeys.
//                 </p>
//               </div> */}

//             </div>
//           </div>
//         </div>

//         {/* Vehicle Slider */}
//         <div className="row">
//           <div className="col-12">

//             <div
//               className="sisf-vehicle-list"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <div className="sis-comman--swiper-slider">

//                 <Swiper
//                   modules={[Navigation, Autoplay, Pagination]}
//                   navigation={{
//                     prevEl: ".vehicle-prev",
//                     nextEl: ".vehicle-next",
//                   }}
//                   autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true,
//                   }}
//                   loop={true}
//                   speed={800}
//                   spaceBetween={30}
//                   slidesPerView={1}
//                   breakpoints={{
//                     576: {
//                       slidesPerView: 2,
//                     },
//                     992: {
//                       slidesPerView: 3,
//                     },
//                   }}
//                   className="vehicle-swiper"
//                 >

//                   {vehicles.map((vehicle, index) => (
//                     <SwiperSlide key={index}>

//                       <div className="sisf-vehicle-list-item">
//                         <div className="sisf-e-inner">

//                           {/* Vehicle Image */}
//                           <div className="sisf-vehicle-image position-relative mb-3">

//                             <a href="/fleets-details">
//                               <figure className="sis-image-anime">
//                                 <img
//                                   src={vehicle.image}
//                                   className="w-100"
//                                   alt={vehicle.name}
//                                 />
//                               </figure>
//                             </a>

//                             <div className="sisf-vehicle-type">
//                               <span className="sisf-e-colored">
//                                 {vehicle.type}
//                               </span>
//                             </div>

//                           </div>

//                           {/* Vehicle Content */}
//                           <div className="sisf-vehicle-content">

//                             <div className="sisf-vehicle-title mb-1">
//                               <h3>
//                                 <a href="/fleets-details">
//                                   {vehicle.name}
//                                 </a>
//                               </h3>
//                             </div>

//                             <div className="sisf-m-text">
//                               <p className="mb-3">
//                                 {vehicle.description}
//                               </p>
//                             </div>

//                             {/* Price */}
                          

//                             {/* Features */}
//                             <div className="sisf-vehicle-features d-flex align-items-center mt-1">

//                               <div className="sisf-passengers">
//                                 <span>
//                                   <i className="fa-solid me-1 fa-users"></i>
//                                   {vehicle.persons}
//                                 </span>
//                               </div>

//                               <div className="sisf-fuel-type">
//                                 <span>
//                                   <i className="fa-solid me-1 fa-gas-pump"></i>
//                                   {vehicle.fuel}
//                                 </span>
//                               </div>

//                             </div>

//                           </div>

//                         </div>
//                       </div>

//                     </SwiperSlide>
//                   ))}

//                 </Swiper>

//                 {/* Slider Arrows */}
//                 <div
//                   className="sis-slider-arrow ms-auto me-auto"
//                   data-aos="fade-up"
//                   data-aos-delay="500"
//                 >

//                   <div className="sis-swiper-button swiper-button-prev vehicle-prev">
//                     <span>
//                       <i className="fa-solid fa-chevron-left"></i>
//                     </span>
//                   </div>

//                   <div className="sis-swiper-button swiper-button-next vehicle-next">
//                     <span>
//                       <i className="fa-solid fa-chevron-right"></i>
//                     </span>
//                   </div>

//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="row">
//           <div className="col-12">

//             <div className="sis-comman-bottom-line-text d-flex align-items-center justify-content-center gap-3">

//               <div
//                 className="sisf-users-image"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >
//                 <figure>
//                   <img
//                     src="/images/users2.png"
//                     alt="LimoRide"
//                   />
//                 </figure>
//               </div>

//               <div
//                 className="sisf-sis-e-box d-flex align-items-center justify-content-center"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//               >
//                 <p className="mb-0">
//                   Discover the complete range of luxury vehicles for every
//                   journey —{" "}
//                   <a href="/our-fleet">
//                     View All Fleets
//                   </a>
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default VehicleFleet;




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VehicleFleet = () => {
  const vehicles = [
    {
      image: "/images/fleet/Maruti-Ertiga.jpg",
      type: "MPV",
      name: "Maruti Ertiga",
      description:
        "A spacious and comfortable MPV ideal for corporate travel, airport transfers, family trips and outstation journeys.",
      persons: "6+1 Seats",
      ac: "AC",
      luggage: "3 Bags",
      availability: "Corporate / Outstation",
    },
    {
      image: "/images/fleet/Toyota-Rumion.jpg",
      type: "MPV",
      name: "Toyota Rumion",
      description:
        "Comfortable seating and practical luggage space make the Toyota Rumion suitable for business and long-distance travel.",
      persons: "6+1 Seats",
      ac: "AC",
      luggage: "3 Bags",
      availability: "Corporate / Outstation",
    },
    {
      image: "/images/fleet/Kia-Carens.jpg",
      type: "Premium MPV",
      name: "Kia Carens",
      description:
        "A modern and spacious vehicle offering premium comfort for corporate executives, airport transfers and outstation trips.",
      persons: "6+1 Seats",
      ac: "AC",
      luggage: "4 Bags",
      availability: "Corporate / Outstation",
    },
    {
      image: "/images/fleet/Innova-Crysta.jpg",
      type: "Premium MUV",
      name: "Toyota Innova Crysta",
      description:
        "A premium and spacious MUV designed for executive travel, corporate requirements, airport transfers and long journeys.",
      persons: "7+1 Seats",
      ac: "AC",
      luggage: "5 Bags",
      availability: "Corporate / Outstation",
    },
    {
      image: "/images/fleet/Tempo-Traveller.jpg",
      type: "Tempo Traveller",
      name: "Tempo Traveller",
      description:
        "A comfortable group travel option suitable for employee transportation, corporate outings, tours and outstation journeys.",
      persons: "12+1 Seats",
      ac: "AC",
      luggage: "8 Bags",
      availability: "Corporate / Outstation",
    },
    {
      image: "/images/fleet/Urbania-Bus.jpg",
      type: "Luxury Van",
      name: "Force Urbania",
      description:
        "A premium luxury van offering spacious seating and superior comfort for corporate groups and long-distance transportation.",
      persons: "16+1 Seats",
      ac: "AC",
      luggage: "6 Bags",
      availability: "Corporate / Outstation",
    },
  ];

  return (
    <section className="sis-vehicle-list-section section">
      <div className="container">

        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="sisf-sis-section-title text-center sis-section-title">

              <span className="sisf-m-subtitle sis-text-anime-style-3">
                OUR FLEET
              </span>

              <h2 className="sisf-m-title sis-text-anime-style-3">
                Explore Our Fleet for Corporate
                <br />
                &amp; Outstation Travel
              </h2>

              <div className="sisf-m-text">
                <p>
                  Choose from our range of well-maintained vehicles designed
                  for corporate transportation, airport transfers, employee
                  travel and outstation journeys.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Vehicle Slider */}
        <div className="row">
          <div className="col-12">

            <div
              className="sisf-vehicle-list"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="sis-comman--swiper-slider">

                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  navigation={{
                    prevEl: ".vehicle-prev",
                    nextEl: ".vehicle-next",
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  speed={800}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  className="vehicle-swiper"
                >

                  {vehicles.map((vehicle, index) => (
                    <SwiperSlide key={index}>

                      <div className="sisf-vehicle-list-item">
                        <div className="sisf-e-inner">

                          {/* Vehicle Image */}
                          <div className="sisf-vehicle-image position-relative mb-3">

                            <a href="/our-fleet">
                              <figure className="sis-image-anime">
                                <img
                                  src={vehicle.image}
                                  className="w-100"
                                  alt={`${vehicle.name} - CitySky Cabs`}
                                />
                              </figure>
                            </a>

                            <div className="sisf-vehicle-type">
                              <span className="sisf-e-colored">
                                {vehicle.type}
                              </span>
                            </div>

                          </div>

                          {/* Vehicle Content */}
                          <div className="sisf-vehicle-content">

                            {/* Vehicle Name */}
                            <div className="sisf-vehicle-title mb-2">
                              <h3>
                                <a href="/our-fleet">
                                  {vehicle.name}
                                </a>
                              </h3>
                            </div>

                            <div className="sisf-m-text">
                              <p className="mb-3">
                                {vehicle.description}
                              </p>
                            </div>

                            {/* Vehicle Details */}
                            <div className="citysky-fleet-features">

                              {/* Seating */}
                              <div className="citysky-fleet-feature">
                                <div className="citysky-feature-icon">
                                  <i className="fa-solid fa-users"></i>
                                </div>

                                <div>
                                  <span className="citysky-feature-label">
                                    Seating Capacity
                                  </span>
                                  <strong>{vehicle.persons}</strong>
                                </div>
                              </div>

                              {/* AC */}
                              <div className="citysky-fleet-feature">
                                <div className="citysky-feature-icon">
                                  <i className="fa-solid fa-snowflake"></i>
                                </div>

                                <div>
                                  <span className="citysky-feature-label">
                                    Air Conditioning
                                  </span>
                                  <strong>{vehicle.ac}</strong>
                                </div>
                              </div>

                              {/* Luggage */}
                              <div className="citysky-fleet-feature">
                                <div className="citysky-feature-icon">
                                  <i className="fa-solid fa-suitcase-rolling"></i>
                                </div>

                                <div>
                                  <span className="citysky-feature-label">
                                    Luggage Capacity
                                  </span>
                                  <strong>{vehicle.luggage}</strong>
                                </div>
                              </div>

                            </div>

                            {/* Availability */}
                            <div className="citysky-availability">
                              <span className="availability-icon">
                                <i className="fa-solid fa-circle-check"></i>
                              </span>

                              <div>
                                <small>Available For</small>
                                <strong>{vehicle.availability}</strong>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>

                    </SwiperSlide>
                  ))}

                </Swiper>

                {/* Slider Arrows */}
                <div
                  className="sis-slider-arrow ms-auto me-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="sis-swiper-button swiper-button-prev vehicle-prev">
                    <span>
                      <i className="fa-solid fa-chevron-left"></i>
                    </span>
                  </div>

                  <div className="sis-swiper-button swiper-button-next vehicle-next">
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="row">
          <div className="col-12">

            <div className="sis-comman-bottom-line-text d-flex align-items-center justify-content-center gap-3">

              <div
                className="sisf-users-image"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <figure>
                  <img
                    src="/images/users2.png"
                    alt="CitySky Cabs Customers"
                  />
                </figure>
              </div>

              <div
                className="sisf-sis-e-box d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="mb-0">
                  Need the right vehicle for your corporate or outstation
                  journey?{" "}
                  <a href="/our-fleet">
                    View All Fleets
                  </a>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VehicleFleet;