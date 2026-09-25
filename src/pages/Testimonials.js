// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";


// /* ============================================================
//    CITYSKY CABS TESTIMONIALS
// ============================================================ */

// const testimonials = [
//   {
//     text: "I booked an Innova Crysta with CitySky Cabs for an outstation family trip from Pune. The vehicle was clean and comfortable, and the driver was polite throughout our journey.",
//     name: "Mr. Rahul Patil",
//     time: "Recently",
//     role: "Family Traveler",
//   },
//   {
//     text: "CitySky Cabs provided a convenient airport transfer experience. The booking process was simple, the driver arrived on time, and the overall journey was comfortable.",
//     name: "Miss. Sneha Kulkarni",
//     time: "Recently",
//     role: "Airport Traveler",
//   },
//   {
//     text: "We contacted CitySky Cabs for a Pune outstation journey and received helpful booking assistance. The cab was comfortable and suitable for our long-distance family trip.",
//     name: "Mr. Amit Deshmukh",
//     time: "Recently",
//     role: "Outstation Traveler",
//   },
//   {
//     text: "A convenient option for corporate cab requirements in Pune. The booking coordination was easy and the travel experience was professional and comfortable.",
//     name: "Miss. Priya Sharma",
//     time: "Recently",
//     role: "Corporate Traveler",
//   },
//   {
//     text: "We booked a cab for a weekend trip from Pune. The journey was smooth and comfortable, and the CitySky Cabs team helped us select a suitable vehicle for our group.",
//     name: "Mr. Akash Jadhav",
//     time: "Recently",
//     role: "Weekend Traveler",
//   },
//   {
//     text: "CitySky Cabs made our Pune to Mahabaleshwar trip comfortable and convenient. The vehicle had enough space for our family and luggage, making the journey relaxing.",
//     name: "Mrs. Neha Joshi",
//     time: "Recently",
//     role: "Family Traveler",
//   },
//   {
//     text: "We booked a Tempo Traveller for a group trip from Pune. The vehicle was spacious and comfortable, and it worked well for our group and luggage.",
//     name: "Mr. Saurabh More",
//     time: "Recently",
//     role: "Group Traveler",
//   },
//   {
//     text: "I needed a cab for an early morning airport transfer and the booking coordination was smooth. The driver arrived as scheduled and the ride was comfortable.",
//     name: "Mr. Rohan Mehta",
//     time: "Recently",
//     role: "Airport Traveler",
//   },
//   {
//     text: "Our family booked a Force Urbania for an outstation trip. The spacious seating made the long journey comfortable, especially for our larger group.",
//     name: "Mrs. Pooja Desai",
//     time: "Recently",
//     role: "Group Traveler",
//   },
//   {
//     text: "CitySky Cabs was helpful in arranging transportation for our corporate travel requirements. The vehicle was comfortable and the booking process was straightforward.",
//     name: "Mr. Nikhil Shah",
//     time: "Recently",
//     role: "Corporate Traveler",
//   },
//   {
//     text: "We booked a cab from Pune to Mumbai for a family journey. The vehicle was clean, comfortable and had enough luggage space for everyone.",
//     name: "Mrs. Kavita Kulkarni",
//     time: "Recently",
//     role: "Family Traveler",
//   },
//   {
//     text: "The CitySky Cabs team helped us choose a suitable vehicle for our outstation group journey. The trip was comfortable and the spacious vehicle was a good fit for our requirements.",
//     name: "Mr. Vishal Pawar",
//     time: "Recently",
//     role: "Outstation Traveler",
//   },
// ];



// const clientLogos = [
//   "clien-logo1.png",
//   "clien-logo2.png",
//   "clien-logo3.png",
//   "clien-logo4.png",
//   "clien-logo5.png",
//   "clien-logo6.png",
//   "clien-logo2.png",
// ];


// const Testimonials = () => {
//   return (
//     <section className="sis-testimonial-section py-3">

//       <div className="container">

//         {/* =====================================================
//             SECTION TITLE
//         ====================================================== */}

//         <div className="row">

//           <div className="col-12">

//             <div className="sisf-sis-section-title text-center sis-section-title">

//               <span className="sisf-m-subtitle sis-text-anime-style-3">
//                 CUSTOMER TESTIMONIALS
//               </span>

//               <h2 className="sisf-m-title sis-text-anime-style-3">
//                 Travel Experiences Shared by
//                 <br />
//                 CitySky Cabs Customers
//               </h2>

//               <div
//                 className="sisf-m-text"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//               >

//                 <p>
//                   See what customers say about their experience with CitySky
//                   Cabs for local travel, airport transfers, corporate trips,
//                   <br />
//                   family tours and outstation cab services from Pune.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =====================================================
//             TRUST INFORMATION
//         ====================================================== */}

//         {/* <div className="row">

//           <div className="col-12">

//             <div className="sis-comman-bottom-line-text mt-0 mb-5 d-flex align-items-center justify-content-center gap-3">

//               <div
//                 className="sis-e-rating-text"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//               >
//                 <h3>Customer Reviews</h3>
//               </div>


//               <div
//                 className="sisf-rating-image"
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//               >

//                 <div className="sisf-m-star sisf--initial">

//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>

//                 </div>

//               </div>


//               {/* <div
//                 className="sisf-sis-e-box"
//                 data-aos="fade-up"
//                 data-aos-delay="700"
//               >

//                 <div className="sisf-m-text">

//                   <p className="mb-0 sisf-e-colored">
//                     CitySky Cabs
//                   </p>

//                 </div>


//                <div className="sisf-m-text">

//                   <p className="mb-0">
//                     Reliable Cab Service in Pune
//                   </p>

//                 </div> 

//               </div> 

//             </div>

//           </div>

//         </div> */}


//         {/* =====================================================
//             TESTIMONIAL SLIDER
//         ====================================================== */}

//         <div className="row">

//           <div className="col-12">

//             <div
//               className="testimonial-right page"
//               data-aos="zoom-in-up"
//               data-aos-delay="300"
//             >

//               <div className="sis-comman-swiper-slider testimonial-slider">

//                 <Swiper
//                   modules={[Navigation]}
//                   navigation={{
//                     prevEl: ".testimonial-prev",
//                     nextEl: ".testimonial-next",
//                   }}
//                   spaceBetween={20}
//                   slidesPerView={3}
//                   loop={false}
//                   autoplay={false}
//                   breakpoints={{
//                     0: {
//                       slidesPerView: 1,
//                     },
//                     768: {
//                       slidesPerView: 2,
//                     },
//                     992: {
//                       slidesPerView: 3,
//                     },
//                   }}
//                   className="testimonial-swiper"
//                 >

//                   {testimonials.map((testimonial, index) => (

//                     <SwiperSlide key={index}>

//                       <div className="sisf-e-inner d-flex flex-column justify-content-between sis-comman-bg p-3 sis-radius position-relative">

//                         {/* QUOTE ICON */}

//                         <div className="quote-left-icon">

//                           <span className="text-white">
//                             <i className="fa-solid fa-quote-left"></i>
//                           </span>

//                         </div>


//                         {/* TOP CONTENT */}

//                         <div className="sisf-e-top">

//                           {/* STARS */}

//                           <div className="sisf-ratings">

//                             <div className="sisf-m-star sisf--initial">

//                               <span className="star">★</span>
//                               <span className="star">★</span>
//                               <span className="star">★</span>
//                               <span className="star">★</span>
//                               <span className="star">★</span>

//                             </div>

//                           </div>


//                           {/* REVIEW */}

//                           <div className="sisf-e-discription mt-1">

//                             <p className="mb-0">
//                               {testimonial.text}
//                             </p>

//                           </div>

//                         </div>


//                         {/* CUSTOMER INFORMATION */}

//                         <div className="sisf-bottom--content">

//                           <div className="sisf-e-author">

//                             <span className="sisf-e-author-name d-inline-block">
//                               {testimonial.name}
//                             </span>

//                             <span className="sisf-e-author-time d-inline-block">
//                               {testimonial.time}
//                             </span>

//                           </div>


//                           <div className="sisf-e-author-work">

//                             <span className="sisf-e-author-role">
//                               {testimonial.role}
//                             </span>

//                           </div>

//                         </div>

//                       </div>

//                     </SwiperSlide>

//                   ))}

//                 </Swiper>


//                 {/* =================================================
//                     MANUAL NAVIGATION
//                 ================================================== */}

//                 <div
//                   className="sis-slider-arrow ms-auto me-auto"
//                   data-aos="fade-up"
//                   data-aos-delay="500"
//                 >

//                   <div className="sis-swiper-button testimonial-prev">

//                     <span>
//                       <i className="fa-solid fa-chevron-left"></i>
//                     </span>

//                   </div>


//                   <div className="sis-swiper-button testimonial-next">

//                     <span>
//                       <i className="fa-solid fa-chevron-right"></i>
//                     </span>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =====================================================
//             BOTTOM CTA
//         ====================================================== */}

//       </div>

//     </section>
//   );
// };

// export default Testimonials;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ============================================================
   CITYSKY CABS TESTIMONIALS
============================================================ */

const testimonials = [
  {
    text: "I booked an Innova Crysta with CitySky Cabs for an outstation family trip from Pune. The vehicle was clean and comfortable, and the driver was polite throughout our journey.",
    name: "Mr. Rahul Patil",
    time: "Recently",
    role: "Family Traveler",
  },
  {
    text: "CitySky Cabs provided a convenient airport transfer experience. The booking process was simple, the driver arrived on time, and the overall journey was comfortable.",
    name: "Miss. Sneha Kulkarni",
    time: "Recently",
    role: "Airport Traveler",
  },
  {
    text: "We contacted CitySky Cabs for a Pune outstation journey and received helpful booking assistance. The cab was comfortable and suitable for our long-distance family trip.",
    name: "Mr. Amit Deshmukh",
    time: "Recently",
    role: "Outstation Traveler",
  },
  {
    text: "A convenient option for corporate cab requirements in Pune. The booking coordination was easy and the travel experience was professional and comfortable.",
    name: "Miss. Priya Sharma",
    time: "Recently",
    role: "Corporate Traveler",
  },
  {
    text: "We booked a cab for a weekend trip from Pune. The journey was smooth and comfortable, and the CitySky Cabs team helped us select a suitable vehicle for our group.",
    name: "Mr. Akash Jadhav",
    time: "Recently",
    role: "Weekend Traveler",
  },
  {
    text: "CitySky Cabs made our Pune to Mahabaleshwar trip comfortable and convenient. The vehicle had enough space for our family and luggage, making the journey relaxing.",
    name: "Mrs. Neha Joshi",
    time: "Recently",
    role: "Family Traveler",
  },
  {
    text: "We booked a Tempo Traveller for a group trip from Pune. The vehicle was spacious and comfortable, and it worked well for our group and luggage.",
    name: "Mr. Saurabh More",
    time: "Recently",
    role: "Group Traveler",
  },
  {
    text: "I needed a cab for an early morning airport transfer and the booking coordination was smooth. The driver arrived as scheduled and the ride was comfortable.",
    name: "Mr. Rohan Mehta",
    time: "Recently",
    role: "Airport Traveler",
  },
  {
    text: "Our family booked a Force Urbania for an outstation trip. The spacious seating made the long journey comfortable, especially for our larger group.",
    name: "Mrs. Pooja Desai",
    time: "Recently",
    role: "Group Traveler",
  },
  {
    text: "CitySky Cabs was helpful in arranging transportation for our corporate travel requirements. The vehicle was comfortable and the booking process was straightforward.",
    name: "Mr. Nikhil Shah",
    time: "Recently",
    role: "Corporate Traveler",
  },
  {
    text: "We booked a cab from Pune to Mumbai for a family journey. The vehicle was clean, comfortable and had enough luggage space for everyone.",
    name: "Mrs. Kavita Kulkarni",
    time: "Recently",
    role: "Family Traveler",
  },
  {
    text: "The CitySky Cabs team helped us choose a suitable vehicle for our outstation group journey. The trip was comfortable and the spacious vehicle was a good fit for our requirements.",
    name: "Mr. Vishal Pawar",
    time: "Recently",
    role: "Outstation Traveler",
  },
];

/* ============================================================
   CLIENT LOGOS
============================================================ */

const clientLogos = [
  "clien-logo1.png",
  "clien-logo2.png",
  "clien-logo3.png",
  "clien-logo4.png",
  "clien-logo5.png",
  "clien-logo6.png",
  "clien-logo2.png",
];

/* ============================================================
   TESTIMONIAL COMPONENT
============================================================ */

const Testimonials = () => {
  return (
    <>
      <section className="sis-testimonial-section py-3">

        <div className="container">

          {/* =====================================================
              SECTION TITLE
          ====================================================== */}

          <div className="row">
            <div className="col-12">

              <div className="sisf-sis-section-title text-center sis-section-title">

                <span className="sisf-m-subtitle sis-text-anime-style-3">
                  CUSTOMER TESTIMONIALS
                </span>

                <h2 className="sisf-m-title sis-text-anime-style-3">
                  Travel Experiences Shared by
                  <br />
                  CitySky Cabs Customers
                </h2>

                <div
                  className="sisf-m-text"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    See what customers say about their experience with CitySky
                    Cabs for local travel, airport transfers, corporate trips,
                    <br />
                    family tours and outstation cab services from Pune.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              TESTIMONIAL SLIDER
          ====================================================== */}

          <div className="row">

            <div className="col-12">

              <div
                className="testimonial-right page"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >

                <div className="sis-comman-swiper-slider testimonial-slider">

                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".testimonial-prev",
                      nextEl: ".testimonial-next",
                    }}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={false}
                    autoplay={false}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }}
                    className="testimonial-swiper"
                  >

                    {testimonials.map((testimonial, index) => (

                      <SwiperSlide key={index}>

                        <div className="sisf-e-inner d-flex flex-column justify-content-between sis-comman-bg p-3 sis-radius position-relative">

                          {/* =================================================
                              QUOTE ICON
                          ================================================== */}

                          <div className="quote-left-icon">
                            <span className="text-white">
                              <i className="fa-solid fa-quote-left"></i>
                            </span>
                          </div>

                          {/* =================================================
                              TOP CONTENT
                          ================================================== */}

                          <div className="sisf-e-top">

                            {/* STARS */}

                            <div className="sisf-ratings">

                              <div className="sisf-m-star sisf--initial">

                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>

                              </div>

                            </div>

                            {/* REVIEW */}

                            <div className="sisf-e-discription mt-1">

                              <p className="mb-0">
                                {testimonial.text}
                              </p>

                            </div>

                          </div>

                          {/* =================================================
                              CUSTOMER INFORMATION
                          ================================================== */}

                          <div className="sisf-bottom--content mt-3">

                            <div className="sisf-e-author">

                              {/* PROFILE ICON + CUSTOMER NAME */}

                              <span className="sisf-e-author-name d-inline-flex align-items-center gap-2">

                                <span
                                  className="testimonial-author-icon"
                                  aria-hidden="true"
                                >
                                  <i className="fa-solid fa-user"></i>
                                </span>

                                <span>
                                  {testimonial.name}
                                </span>

                              </span>

                              {/* MAIL ICON + TIME */}

                              {/* <span className="sisf-e-author-time d-inline-flex align-items-center gap-2">

                                <span
                                  className="testimonial-mail-icon"
                                  aria-hidden="true"
                                >
                                  <i className="fa-solid fa-envelope"></i>
                                </span>

                                <span>
                                  {testimonial.time}
                                </span>

                              </span> */}

                            </div>

                            {/* CUSTOMER ROLE */}

                            <div className="sisf-e-author-work">

                              <span className="sisf-e-author-role">
                                {testimonial.role}
                              </span>

                            </div>

                          </div>

                        </div>

                      </SwiperSlide>

                    ))}

                  </Swiper>

                  {/* =================================================
                      SLIDER NAVIGATION
                  ================================================== */}

                  <div
                    className="sis-slider-arrow ms-auto me-auto"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >

                    <div className="sis-swiper-button testimonial-prev">

                      <span>
                        <i className="fa-solid fa-chevron-left"></i>
                      </span>

                    </div>

                    <div className="sis-swiper-button testimonial-next">

                      <span>
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================================================
          TESTIMONIAL ICON CSS
      ============================================================ */}

      <style>{`

        /* Profile & Mail Circle */

        .testimonial-author-icon,
        .testimonial-mail-icon {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;
          border: 1px solid #ffffff;

          color: #000000;

          font-size: 13px;
          line-height: 1;

          flex-shrink: 0;
        }

        /* Black Profile Icon */

        .testimonial-author-icon i,
        .testimonial-mail-icon i {
          color: #000000;
          line-height: 1;
        }

        /* Keep icons aligned */

        .sisf-e-author-name,
        .sisf-e-author-time {
          vertical-align: middle;
        }

        /* Optional subtle hover */

        .testimonial-author-icon:hover,
        .testimonial-mail-icon:hover {
          background: #f1f1f1;
          border-color: #f1f1f1;
        }

        .testimonial-author-icon:hover i,
        .testimonial-mail-icon:hover i {
          color: #000000;
        }

      `}</style>
    </>
  );
};

export default Testimonials;
