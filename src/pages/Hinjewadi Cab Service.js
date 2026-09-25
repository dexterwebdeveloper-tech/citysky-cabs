import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Hinjewadicabservice() {


const cardData = {
keyword: "Hinjewadi Cab Service",
headingDescription: "Citysky Cabs provides reliable Hinjewadi Cab Service for residents, IT professionals, corporate travellers, families and visitors requiring convenient local and outstation transportation. The service covers regular cab bookings within Hinjewadi as well as airport transfers, Mumbai trips, corporate office travel and longer intercity journeys. Customers can select from sedan, Ertiga, SUV and Innova Crysta options according to passenger count, luggage and travel requirements. Pickup arrangements can be planned across Hinjewadi Phase 1, Phase 2 and Phase 3, making the service practical for employees and businesses located inside the IT hub. Citysky Cabs also supports 24/7 taxi requirements, affordable local travel, scheduled office transportation and outstation trips from Hinjewadi to Pune Airport, Mumbai and other destinations.",
topPlaces: [
{
title: "Hinjewadi Phase 1",
description: "Hinjewadi Phase 1 is a major IT and business area with offices, technology companies and residential developments nearby. Local cab services are useful for employees, visitors and corporate travellers requiring daily office transportation or scheduled pickups."
},
{
title: "Hinjewadi Phase 2",
description: "Hinjewadi Phase 2 has a large concentration of corporate offices and technology campuses, creating regular demand for employee and business transportation. Private cabs provide convenient travel between offices, residences, hotels, airports and nearby Pune areas."
},
{
title: "Hinjewadi Phase 3",
description: "Hinjewadi Phase 3 is another important commercial and IT zone where employees and business visitors frequently require reliable transportation. Cab services can be arranged for office transfers, meetings, airport travel and intercity journeys."
},
{
title: "Pune Airport",
description: "Pune Airport is an important destination for Hinjewadi residents, professionals and visitors travelling for business or personal purposes. A private cab provides direct transportation from Hinjewadi to the airport with convenient pickup planning."
},
{
title: "Pune Railway Station",
description: "Pune Railway Station connects Hinjewadi with travellers arriving or departing by train. A private taxi can provide direct transportation between Hinjewadi offices or residences and the railway station, including early or late travel requirements."
},
{
title: "Wakad",
description: "Wakad is located close to Hinjewadi and serves as an important residential and commercial area for IT professionals. Local cab services can connect passengers between Wakad, Hinjewadi offices, hotels, residential communities and other Pune locations."
},
{
title: "Baner",
description: "Baner is a prominent Pune business and residential locality with restaurants, offices, hotels and commercial establishments. Cab transportation from Hinjewadi provides a convenient option for professionals and visitors travelling between the two areas."
},
{
title: "Balewadi",
description: "Balewadi is a growing residential, commercial and business destination near Hinjewadi. Private cab travel is suitable for office commuters, visitors and families travelling between Balewadi and the Hinjewadi IT corridor."
},
{
title: "Mumbai",
description: "Mumbai is a major intercity destination for Hinjewadi professionals travelling for business meetings, airport connections and personal visits. An outstation cab provides direct road transportation with flexible pickup and drop-off arrangements."
},
{
title: "Pimpri-Chinchwad",
description: "Pimpri-Chinchwad is an important industrial and residential region near Hinjewadi with numerous businesses and housing areas. Cab services can support daily commuting, corporate travel, airport transfers and intercity transportation."
}
],
services: [
{
name: "Hinjewadi Cab Service",
description: "Hinjewadi Cab Service provides convenient private transportation for residents, professionals, visitors and businesses in the Hinjewadi area. Local trips, airport transfers, office travel and outstation journeys can be arranged according to travel requirements."
},
{
name: "Taxi Service in Hinjewadi",
description: "Taxi Service in Hinjewadi supports daily local transportation as well as longer journeys outside Pune. Passengers can arrange convenient pickup and drop-off for offices, residences, hotels, airports and other destinations."
},
{
name: "Hinjewadi Cab Booking",
description: "Hinjewadi Cab Booking allows customers to arrange private transportation for planned local and intercity journeys. Vehicle selection can be based on passenger count, luggage requirements and the type of trip."
},
{
name: "Cab Service Near Me Hinjewadi",
description: "Cab Service Near Me Hinjewadi helps passengers looking for convenient transportation around the Hinjewadi IT corridor. Local rides, office transfers, airport journeys and outstation trips can be planned from suitable pickup locations."
},
{
name: "Outstation Cab Service in Hinjewadi",
description: "Outstation Cab Service in Hinjewadi provides private intercity transportation for travellers heading outside Pune. It is suitable for business travel, family holidays, pilgrimage journeys, weekend trips and long-distance road travel."
},
{
name: "Hinjewadi to Pune Airport Cab",
description: "Hinjewadi to Pune Airport Cab provides direct transportation for passengers travelling from Phase 1, Phase 2, Phase 3 and nearby residential areas to Pune Airport. Pickup timing can be planned around flight schedules."
},
{
name: "Affordable Cab Service in Hinjewadi",
description: "Affordable Cab Service in Hinjewadi provides a practical private transportation option for daily commuters, families and visitors. Customers can select an appropriate vehicle according to their passenger count and travel requirements."
},
{
name: "Hinjewadi Taxi Service 24/7",
description: "Hinjewadi Taxi Service 24/7 supports passengers requiring transportation during early mornings, late evenings and other hours. It is useful for airport transfers, shift-based employees, urgent travel and scheduled business journeys."
},
{
name: "Corporate Cab Service in Hinjewadi",
description: "Corporate Cab Service in Hinjewadi provides transportation support for employees, clients, business visitors and corporate meetings. Companies can use private cabs for office transfers, airport travel and scheduled intercity business journeys."
},
{
name: "Innova Crysta Cab in Hinjewadi",
description: "Innova Crysta Cab in Hinjewadi provides a spacious vehicle option for families, corporate groups and travellers carrying additional luggage. It is suitable for airport transfers, business travel and longer outstation journeys."
},
{
name: "Sedan cab in Hinjewadi",
description: "Sedan cab in Hinjewadi is a practical transportation option for individuals, couples, small families and business travellers. It can be arranged for local rides, airport transfers and intercity travel."
},
{
name: "SUV cab service Hinjewadi",
description: "SUV cab service Hinjewadi provides additional space for families and groups travelling with luggage. The vehicle is suitable for local transportation, airport journeys, corporate travel and outstation trips."
},
{
name: "Ertiga cab service Hinjewadi",
description: "Ertiga cab service Hinjewadi offers a spacious option for small groups and families needing comfortable transportation. It can be used for local travel, airport transfers, business trips and outstation journeys."
},
{
name: "Hinjewadi to Mumbai cab",
description: "Hinjewadi to Mumbai cab provides direct intercity transportation for professionals, families and visitors. The service is suitable for business meetings, personal travel, airport connections and scheduled Mumbai journeys."
},
{
name: "Hinjewadi Phase 1 cab service",
description: "Hinjewadi Phase 1 cab service supports employees, residents and visitors travelling within Phase 1 and toward other Pune destinations. Airport transfers, office travel and outstation trips can also be arranged."
},
{
name: "Hinjewadi Phase 2 cab service",
description: "Hinjewadi Phase 2 cab service provides convenient transportation for corporate employees, residents and visitors in and around Phase 2. Private cabs can be arranged for local travel, airport transfers and longer journeys."
},
{
name: "Hinjewadi Phase 3 cab service",
description: "Hinjewadi Phase 3 cab service supports daily commuting and planned travel for employees, businesses and residents located around Phase 3. Customers can arrange local, airport and outstation transportation."
},
{
name: "Office cab service in Hinjewadi",
description: "Office cab service in Hinjewadi provides private transportation for employees and corporate visitors travelling to and from workplaces. It can support scheduled office transfers, meetings, airport travel and intercity business requirements."
},
{
name: "IT Park cab service Hinjewadi",
description: "IT Park cab service Hinjewadi provides convenient transportation for professionals and visitors travelling to technology campuses and business offices. Private cabs can be arranged for daily commuting, meetings, airport transfers and outstation travel."
}
],
tableData: [
["Hinjewadi Cab Service"],
["Taxi Service in Hinjewadi"],
["Hinjewadi Cab Booking"],
["Cab Service Near Me Hinjewadi"],
["Outstation Cab Service in Hinjewadi"],
["Hinjewadi to Pune Airport Cab"],
["Affordable Cab Service in Hinjewadi"],
["Hinjewadi Taxi Service 24/7"],
["Corporate Cab Service in Hinjewadi"],
["Innova Crysta Cab in Hinjewadi"],
["Sedan cab in Hinjewadi"],
["SUV cab service Hinjewadi"],
["Ertiga cab service Hinjewadi"],
["Hinjewadi to Mumbai cab"],
["Hinjewadi Phase 1 cab service"],
["Hinjewadi Phase 2 cab service"],
["Hinjewadi Phase 3 cab service"],
["Office cab service in Hinjewadi"],
["IT Park cab service Hinjewadi"]
],
whychoose: [
{
WhyChooseheading: "Coverage Across Hinjewadi Phases",
WhyChoosedescription: "Citysky Cabs supports transportation requirements across Hinjewadi Phase 1, Phase 2 and Phase 3, making it convenient for employees, residents and visitors to arrange local and intercity travel."
},
{
WhyChooseheading: "Corporate Travel Support",
WhyChoosedescription: "Businesses located in the Hinjewadi IT corridor can arrange cab transportation for employees, clients and visiting professionals. Office transfers, meetings and airport journeys can be planned around business schedules."
},
{
WhyChooseheading: "Airport Transfer Convenience",
WhyChoosedescription: "Passengers travelling from Hinjewadi to Pune Airport can arrange direct private transportation from their office, residence or hotel. This is particularly useful for travellers with scheduled flights and luggage."
},
{
WhyChooseheading: "Local and Outstation Options",
WhyChoosedescription: "The service covers both local Pune transportation and longer journeys outside the city. Customers can use the same cab service for daily travel, airport transfers, weekend trips and intercity requirements."
},
{
WhyChooseheading: "Multiple Vehicle Categories",
WhyChoosedescription: "Sedan, Ertiga, SUV and Innova Crysta options provide flexibility for different passenger groups. Vehicle selection can be based on seating capacity, luggage and the expected duration of travel."
},
{
WhyChooseheading: "24/7 Travel Requirements",
WhyChoosedescription: "Round-the-clock cab availability is useful for IT professionals working different shifts, passengers travelling to airports at unusual hours and customers with early or late intercity journeys."
},
{
WhyChooseheading: "Convenient Mumbai Travel",
WhyChoosedescription: "Hinjewadi to Mumbai travel can be arranged as a direct private journey for business meetings, family visits and airport connections. Pickup and drop-off locations can be planned according to the passenger's requirements."
},
{
WhyChooseheading: "Suitable for Daily Commuters",
WhyChoosedescription: "Private cab transportation can support regular travel between Hinjewadi offices, residential communities and nearby Pune areas. This makes the service useful for employees, business visitors and residents with frequent travel needs."
}
]
};








const faqData = [
{
question: "How can I arrange a Hinjewadi Cab Service with Citysky Cabs?",
answer: "Passengers can enquire about Hinjewadi cab service by sharing their pickup location, destination, travel date, preferred timing, and number of passengers. Citysky Cabs can assist with local travel, office transportation, airport transfers, railway station trips, and other scheduled cab requirements around Hinjewadi."
},
{
question: "Can I book a cab from Hinjewadi to Pune city areas?",
answer: "Travellers staying or working in Hinjewadi can arrange cabs for different parts of Pune according to their travel needs. The pickup and drop locations can be shared in advance so the journey can be planned for residential areas, business locations, shopping destinations, railway stations, or other required places."
},
{
question: "Is Hinjewadi Cab Service suitable for IT professionals?",
answer: "Employees working in Hinjewadi's IT and business areas can enquire about cab transportation for office commuting, meetings, client visits, and scheduled work-related travel. A dedicated cab can be arranged according to the required pickup location, office destination, passenger count, and travel timing."
},
{
question: "Can I book a Hinjewadi cab for Pune Airport?",
answer: "Passengers travelling between Hinjewadi and Pune Airport can enquire about a dedicated airport transfer. Sharing the flight timing, pickup address, passenger count, and luggage details helps Citysky Cabs understand the airport transportation requirement and plan the journey accordingly."
},
{
question: "Can I get a cab from Hinjewadi to Pune Railway Station?",
answer: "Travellers needing transportation between Hinjewadi and Pune Railway Station can arrange a private cab based on their train schedule. Providing the pickup point, train departure or arrival timing, number of passengers, and luggage details can help coordinate the journey around the required travel time."
},
{
question: "Does Hinjewadi Cab Service cover nearby areas?",
answer: "Cab requirements can be discussed for Hinjewadi and nearby Pune areas, including residential communities, commercial locations, educational institutions, business parks, and other destinations. The exact pickup and drop points should be provided while making the enquiry so the requested route can be planned."
},
{
question: "Can companies arrange regular cab transportation in Hinjewadi?",
answer: "Businesses can enquire about cab arrangements for employee transportation, client meetings, corporate events, office transfers, and other work-related travel. Regular or scheduled requirements can be discussed by sharing employee pickup points, office locations, travel timings, and the expected number of passengers."
},
{
question: "Can families hire a cab service in Hinjewadi?",
answer: "Families staying in or around Hinjewadi can use cab transportation for local trips, shopping, medical visits, railway station transfers, airport travel, functions, and nearby outings. Citysky Cabs can discuss the journey based on the pickup location, destination, passenger count, and preferred timing."
},
{
question: "Is Hinjewadi Cab Service available for outstation travel?",
answer: "Passengers based in Hinjewadi can enquire about outstation cab travel to destinations outside Pune. One-way, round-trip, and multi-day journeys can be discussed according to the destination, travel dates, passenger requirements, luggage, and planned itinerary."
},
{
question: "What details are required to book a Hinjewadi Cab Service?",
answer: "For a cab enquiry, provide your Hinjewadi pickup location, destination, travel date, preferred departure time, number of passengers, luggage details, and type of journey. For airport, railway station, corporate, or outstation travel, sharing the relevant schedule and additional requirements can help organize the transportation."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Pranav Kulkarni",
feedback:
"I regularly travel between Hinjewadi and different parts of Pune for work, and I needed a cab for an early morning meeting. I shared the pickup and drop details with Citysky Cabs and arranged the trip around my schedule. The direct transportation was convenient and saved me the hassle of arranging multiple rides.",
rating: 5
},
{
id: 2,
name: "Miss. Snehal Patil",
feedback:
"My parents were visiting me in Hinjewadi and needed a cab to Pune Airport for their return flight. I provided the flight timing, luggage details, and pickup location to Citysky Cabs. The airport transfer was easy to coordinate, and having a dedicated cab was particularly useful with their luggage.",
rating: 5
}
];























































    const Images = [

    { place: "/images/keyword/1.jpg", text: "Innova Crysta Cab in Pune", link: "innova-crysta-cab-in-pune" },

    { place: "/images/keyword/2.jpg", text: "Innova Crysta On Rent in Pune", link: "innova-crysta-on-rent-in-pune" },

    { place: "/images/keyword/3.jpg", text: "Innova Crysta Cabs / Taxi Booking in Pune", link: "innova-crysta-cabs-taxi-booking-in-pune" },

    { place: "/images/keyword/4.jpg", text: "Pune to Mahabaleshwar Innova Crysta Cab", link: "pune-to-mahabaleshwar-innova-crysta-cab" },

    { place: "/images/keyword/5.jpg", text: "Book Innova Crysta for Outstation From Pune", link: "book-innova-crysta-for-outstation-from-pune" },

    { place: "/images/keyword/6.jpg", text: "Innova Crysta Cabs for Pune Airport", link: "innova-crysta-cabs-for-pune-airport" },

    { place: "/images/keyword/7.jpg", text: "Pune to Mumbai Airport Innova Crysta", link: "pune-to-mumbai-airport-innova-crysta" },

    { place: "/images/keyword/8.jpg", text: "Innova Crysta Cab for Corporate Office", link: "innova-crysta-cab-for-corporate-office" },

    { place: "/images/keyword/9.jpg", text: "Mumbai Airport to Pune Innova Crysta Cabs", link: "mumbai-airport-to-pune-innova-crysta-cabs" },

    { place: "/images/keyword/10.jpg", text: "Pune to Shirdi Innova Crysta", link: "pune-to-shirdi-innova-crysta" },

    { place: "/images/keyword/11.jpg", text: "Pune Aurangabad Innova Crysta Cab Service", link: "pune-aurangabad-innova-crysta-cab-service" },

    { place: "/images/keyword/12.jpg", text: "Pune to Goa Innova Crysta Cab", link: "pune-to-goa-innova-crysta-cab" },

    { place: "/images/keyword/13.jpg", text: "Pune to Bangalore Innova Crysta Cab", link: "pune-to-bangalore-innova-crysta-cab" },

    { place: "/images/keyword/14.jpg", text: "Pune to Hyderabad Innova Crysta Rental Cab", link: "pune-to-hyderabad-innova-crysta-rental-cab" },

    { place: "/images/keyword/15.jpg", text: "Innova Crysta on Rent in Pune", link: "innova-crysta-on-rent-in-pune-2" },

    { place: "/images/keyword/16.jpg", text: "Pune to Lavasa Innova Crysta Cab Booking", link: "pune-to-lavasa-innova-crysta-cab-booking" },

    { place: "/images/keyword/17.jpg", text: "Pune Darshan Innova Crysta Cabs", link: "pune-darshan-innova-crysta-cabs" },

    { place: "/images/keyword/18.jpg", text: "Innova Crysta Cabs in Pune", link: "innova-crysta-cabs-in-pune" },

    { place: "/images/keyword/19.jpg", text: "Innova Car Rental In Pune", link: "innova-car-rental-in-pune" },

    { place: "/images/keyword/20.jpg", text: "Innova Taxi Service in Pune", link: "innova-taxi-service-in-pune" },

    { place: "/images/keyword/21.jpg", text: "Book Innova for Outstation Pune", link: "book-innova-for-outstation-pune" },

    { place: "/images/keyword/22.jpg", text: "Innova Crysta On Rent In Pune", link: "innova-crysta-on-rent-in-pune-3" },

    { place: "/images/keyword/23.jpg", text: "Pune to Mahabaleshwar Panchgani Innova Crysta Cabs", link: "pune-to-mahabaleshwar-panchgani-innova-crysta-cabs" },

    { place: "/images/keyword/24.jpg", text: "Pune to Outstation Innova Crysta Booking", link: "pune-to-outstation-innova-crysta-booking" },

    { place: "/images/keyword/25.jpg", text: "Innova Crysta on Rent in Pune", link: "innova-crysta-on-rent-in-pune-4" },


];














const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hinjewadi Cab Service",
  "image": "https://www.cityskycab.in/assets/images/hinjewadi-cab-service.webp",
  "description": "Hinjewadi Cab Service from Citysky Cabs provides private taxi and cab options for local travel, Pune Airport transfers, corporate journeys and outstation trips from Hinjewadi. The service covers Taxi Service in Hinjewadi, Hinjewadi Cab Booking, Cab Service Near Me Hinjewadi, Outstation Cab Service in Hinjewadi, Hinjewadi to Pune Airport Cab and Affordable Cab Service in Hinjewadi requirements. Travellers can choose sedan, Ertiga or Innova Crysta vehicles according to passenger count, luggage and trip requirements. Cab pickup and drop services can be arranged across Hinjewadi Phase 1, Phase 2, Phase 3 and nearby areas. Citysky Cabs also supports 24/7 taxi requirements for airport transfers, office travel, family trips and one-way or round-trip outstation journeys.",
  "brand": {
    "@type": "Brand",
    "name": "Citysky Cabs"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8517"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.cityskycab.in/hinjewadi-cab-service"
  }
};


    return (
        <div>

<Helmet>
  <title>
    Hinjewadi Cab Service | Airport & Outstation Taxi | +91 8554819191
  </title>

  <meta
    name="description"
    content="Hinjewadi Cab Service by Citysky Cabs for local, airport and outstation trips. Book sedan, Ertiga or Innova Crysta for private taxi travel in Hinjewadi."
  />

  <meta
    name="keywords"
    content="Hinjewadi Cab Service, Taxi Service in Hinjewadi, Hinjewadi Cab Booking, Cab Service Near Me Hinjewadi, Outstation Cab Service in Hinjewadi, Hinjewadi to Pune Airport Cab, Affordable Cab Service in Hinjewadi, Hinjewadi Taxi Service 24/7, Hinjewadi taxi service, cab service in Hinjewadi, cab booking Hinjewadi, taxi booking Hinjewadi, online cab booking Hinjewadi, local cab service Hinjewadi, local taxi service Hinjewadi, Hinjewadi local cab, Hinjewadi city taxi, Hinjewadi airport cab service, Hinjewadi airport taxi service, Hinjewadi to Pune Airport taxi, Pune Airport to Hinjewadi cab, Pune Airport to Hinjewadi taxi, Hinjewadi Pune Airport cab fare, Hinjewadi Pune Airport taxi fare, Hinjewadi outstation cab, Hinjewadi outstation taxi, Hinjewadi one way cab, Hinjewadi round trip cab, Hinjewadi intercity cab, Hinjewadi car rental, car rental in Hinjewadi, private cab service Hinjewadi, reliable cab service Hinjewadi, best cab service Hinjewadi, cheap cab service Hinjewadi, 24 hour cab service Hinjewadi, 24x7 cab service Hinjewadi, Hinjewadi sedan cab, Hinjewadi Ertiga cab, Hinjewadi Innova cab, Hinjewadi Innova Crysta cab, Hinjewadi AC cab, corporate cab service Hinjewadi, office cab service Hinjewadi, employee cab service Hinjewadi, Hinjewadi Phase 1 cab service, Hinjewadi Phase 2 cab service, Hinjewadi Phase 3 cab service, Hinjawadi cab service, Hinjawadi taxi service, Hinjawadi cab booking, Hinjawadi to Pune Airport cab"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>




            <div className="sisf-banner sis-br-radius mt-3 position-relative">
                <div className="banner-img">
                    <figure>
                      {/* <img
                            src="/images/page-banner.jpg"
                            alt="Mauliwala Travels Urbania and Mini Bus Rental Pune"
                        /> */}
                    </figure>
                </div>

                <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
                    <div className="sisf-m-inner container">
                        <div className="sisf-m-content sisf-content-grid">
                            <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                                {cardData.keyword}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>














            <section>
                <div className="container-fluid p-0" >
                    <div className="row container-fluid px-md-2">
                        <div className="col-12 col-md-7 bg-foootr">
                            <img src='/images/keywords/32.jpg' alt='img' className='img-fluid' />
                            <h3 className="py-1"
                                style={{
                                    color: '#183765', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >Citysky Cabs: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>

                            <div className="topPlaces">

                                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                                {cardData.topPlaces.map((place, index) => (
                                    <article key={index} className="placeCard borderr" tabIndex="0">
                                        <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                                        <div className="placeBody">
                                            <h4 className="placeTitle">{place.title}</h4>
                                            <p className="placeDesc">{place.description}</p>

                                        </div>

                                        <span className="placeArrow" aria-hidden>›</span>
                                    </article>
                                ))}
                            </div>





                            <div className="services-section">
                                {cardData.services.map((service, index) => (
                                    <div className="service-card" key={index}>
                                        <div className="service-content">
                                            <h4>{service.name}</h4>
                                            <span className="line"></span>
                                            <p>{service.description}</p>
                                        </div>

                                        <div className="service-icon">
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="keyword-grid">
                                {cardData.tableData.flat().map((keyword, index) => (
                                    <div key={index} className="keyword-item">
                                        <span className="keyword-bullet">-</span>
                                        {keyword}
                                    </div>
                                ))}
                            </div>



                            <div id="why-choose-section" className="why-choose-section">

                                <h2 className="section-title text-dark">
                                    Why Choose <span>Citysky Cabs</span>
                                </h2>

                                <div className="bento-grid">
                                    {cardData.whychoose.map((item, index) => (
                                        <div className="bento-card" key={index}>

                                            <div className="bento-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                            <h4>{item.WhyChooseheading}</h4>

                                            <p>{item.WhyChoosedescription}</p>

                                        </div>
                                    ))}
                                </div>

                            </div>



                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Citysky Cabs</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">

                                                <FaqSection
                                                    title=""
                                                    subtitle=""
                                                    items={faqData}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <TestimonialSectionKeyword
                                testimonials={testimonials}
                            />


                            <ContactShowcase keyword={cardData.keyword} />
                        </div>

                        <div className='col-12 col-md-4' >
                            <div className="routeList">
                                {Images.map((e, i) => {
                                    const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                                    const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                                    return (
                                        <a
                                            key={e.link || i}
                                            href={href}
                                            className="routeItem"
                                            aria-label={e.text}
                                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            <div className="routeThumb">
                                                <img src={e.place} alt="" loading="lazy" />
                                            </div>

                                            <div className="routeMeta">
                                                <h6 className="routeTitle">{e.text}</h6>
                                                <span className="routeUnderline" />
                                            </div>

                                            <span className="routeArrow" aria-hidden>›</span>
                                        </a>
                                    );
                                })}
                            </div>




                            <div>
                                <FleetHighway />
                            </div>
                            <div className="pc-contact">
                                <h4 className="pc-title">Contact Information</h4>

                                <div className="pc-grid">
                                    {/* Phones */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fas fa-phone-alt"></i>
                                            <span>Phone Numbers</span>
                                        </header>

                                        <div className="pc-list">
                                            <a href="tel:+918554819191" className="pc-call">+91 8554819191 </a>
                                        </div>

                                        <div className="pc-list">
                                            <a href="tel:+918459883515" className="pc-call">+91 8459883515 </a>
                                        </div>
                                        <div className="pc-cta">
                                            <a
                                                href="https://wa.me/918459883515
"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pc-whats"
                                            >
                                                <i className="bi bi-whatsapp"></i> WhatsApp
                                            </a>
                                            <a href="tel:+918459883515" className="pc-primary">
                                                Call Now
                                            </a>
                                        </div>
                                    </section>

                                    {/* Email */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-envelope"></i>
                                            <span>Email</span>
                                        </header>

                                        <a href="mailto:booking@cityskycab.in" className="pc-email">
                                            booking@cityskycab.in
                                        </a>
                                    </section>

                                    {/* Address */}
                                    <section className="pc-tile">
                                        <header className="pc-tile-head">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Address</span>
                                        </header>

                                        <address className="pc-address">
                                            <strong>Citysky Cabs</strong><br />

                                            Office No,307,3rd Floor,
                                            52, Sinhgad Rd, Wadgaon Budruk,
                                            Narhe, Pune, Maharashtra,India- 411041.






                                        </address>
                                    </section>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Hinjewadicabservice;