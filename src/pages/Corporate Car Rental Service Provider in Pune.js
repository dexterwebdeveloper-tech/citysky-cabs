import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Corporatecarrentalserviceprovider() {

const cardData = {
keyword: "Corporate Car Rental Service Provider in Pune",
headingDescription: "Citysky Cabs provides corporate car rental services in Pune for companies requiring dependable transportation for executives, employees, clients, business guests, airport transfers, meetings, corporate events, and outstation travel. Corporate rental arrangements can be planned for daily, monthly, short-term, and long-distance requirements, with suitable cars and driver-supported options based on passenger needs and business schedules. Services can connect major corporate and commercial locations such as Hinjewadi, Kharadi, Magarpatta City, Baner, Viman Nagar, Hadapsar, Pimpri Chinchwad, Pune International Airport, Koregaon Park, and other important business corridors across Pune.",
topPlaces: [
{
title: "Hinjewadi IT Park",
description: "Hinjewadi IT Park is one of Pune's largest technology and corporate employment corridors. Corporate car rentals can support executives, employees, clients, and visiting professionals travelling between offices, hotels, residential areas, airports, and business meeting locations."
},
{
title: "Kharadi EON IT Park",
description: "Kharadi EON IT Park is a major corporate destination in eastern Pune with numerous technology and business organizations. Rental cars can be arranged for executive travel, employee movement, client visits, airport transfers, meetings, and regular corporate transportation."
},
{
title: "Magarpatta City",
description: "Magarpatta City is an established business and residential destination with offices and a large professional workforce. Corporate car rental services can support office travel, executive transportation, client pickups, business meetings, airport journeys, and scheduled corporate events."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important travel hub for corporate executives, employees, clients, and business visitors. Corporate rental cars can be scheduled for airport pickup and drop, hotel transfers, office travel, and onward business journeys."
},
{
title: "Baner",
description: "Baner is a prominent commercial and corporate corridor with offices, hospitality facilities, and business destinations. Corporate car rentals can provide transportation for executives, employees, clients, meetings, conferences, airport transfers, and local business travel."
},
{
title: "Pimpri Chinchwad",
description: "Pimpri Chinchwad includes major industrial, manufacturing, commercial, and corporate areas. Companies can use rental cars for employee movement, factory visits, executive travel, client transportation, business meetings, and travel between industrial locations."
},
{
title: "Viman Nagar",
description: "Viman Nagar is a well-connected corporate and commercial locality close to Pune Airport. Corporate car hire can support executives, employees, clients, and business guests travelling between offices, hotels, airport terminals, and meeting destinations."
},
{
title: "Koregaon Park",
description: "Koregaon Park is an important hospitality, commercial, and residential destination frequently used by business visitors and corporate guests. Rental cars can support hotel transfers, client movement, executive travel, airport transportation, and business meetings."
},
{
title: "Hadapsar",
description: "Hadapsar is a major employment and commercial corridor containing IT campuses, business areas, and industrial locations. Corporate car rental services can support employee transportation, executive travel, client visits, airport transfers, and recurring business mobility."
},
{
title: "Shivajinagar",
description: "Shivajinagar is a central Pune business and transportation hub with offices, commercial establishments, railway connectivity, and important city destinations. Corporate rental cars can be used for business meetings, executive movement, station transfers, client travel, and local corporate journeys."
}
],
services: [
{
name: "Corporate Car Rental Pune",
description: "Corporate Car Rental Pune provides dedicated rental vehicles for businesses, executives, employees, clients, and professional visitors. Cars can be arranged for office travel, meetings, airport transfers, corporate events, and local or outstation business journeys."
},
{
name: "Corporate Car Hire Pune",
description: "Corporate Car Hire Pune offers vehicle arrangements for companies requiring convenient transportation for executives, employees, clients, and guests. Rental cars can support meetings, office movement, airport travel, conferences, and scheduled business trips."
},
{
name: "Corporate Car Booking Pune",
description: "Corporate Car Booking Pune helps organizations arrange rental vehicles for planned professional journeys. Cars can be booked for executives, clients, airport transfers, business meetings, employee travel, corporate events, and outstation assignments."
},
{
name: "Corporate Car Rental Service Pune",
description: "Corporate Car Rental Service Pune supports businesses with recurring and short-term vehicle requirements. Services can cover office transportation, executive movement, client pickups, airport transfers, corporate events, and intercity business travel."
},
{
name: "Corporate Car Rental Provider Pune",
description: "Corporate Car Rental Provider Pune offers structured rental transportation for companies managing regular business travel. Vehicle requirements can be planned according to passenger capacity, journey duration, destination, travel schedule, and corporate usage."
},
{
name: "Corporate Car Hire Service Provider Pune",
description: "Corporate Car Hire Service Provider Pune supports companies requiring professional vehicle arrangements for employees, executives, clients, and business guests. Cars can be scheduled for meetings, airport transfers, office travel, events, and outstation requirements."
},
{
name: "Corporate Taxi Rental Pune",
description: "Corporate Taxi Rental Pune provides taxi-based transportation for organizations and business professionals. Rental arrangements can support employee travel, executive movement, client visits, airport journeys, meetings, and scheduled corporate transportation."
},
{
name: "Corporate Cab Rental Pune",
description: "Corporate Cab Rental Pune provides flexible cab arrangements for companies requiring transportation for employees, executives, clients, and guests. Vehicles can be scheduled for office commuting, airport transfers, business travel, meetings, and corporate events."
},
{
name: "Company Car Rental Pune",
description: "Company Car Rental Pune helps businesses arrange vehicles for regular professional transportation. Cars can be used by executives, employees, client-facing teams, and visiting professionals for office travel, meetings, airport transfers, and business journeys."
},
{
name: "Corporate Car with Driver Pune",
description: "Corporate Car with Driver Pune provides a convenient option for businesses that require vehicle and driver support together. It can be useful for executives, clients, corporate guests, airport travel, meetings, events, and extended business schedules."
},
{
name: "Office Car Rental Pune",
description: "Office Car Rental Pune provides rental vehicles for employees, managers, executives, and business teams travelling for regular office requirements. Cars can support office transfers, meetings, client visits, airport journeys, and scheduled professional travel."
},
{
name: "Business Car Rental Pune",
description: "Business Car Rental Pune supports professionals and companies requiring transportation for meetings, client appointments, conferences, site visits, and business trips. Rental cars can be arranged according to travel schedules and passenger requirements."
},
{
name: "Corporate Travel Car Rental Pune",
description: "Corporate Travel Car Rental Pune provides transportation for business trips, conferences, meetings, client visits, airport transfers, and corporate events. Rental arrangements can cover both local Pune travel and longer intercity journeys."
},
{
name: "Corporate Employee Car Rental Pune",
description: "Corporate Employee Car Rental Pune helps companies arrange vehicles for employees travelling between offices, business locations, training centers, and other destinations. Rental services can support scheduled employee movement and professional travel."
},
{
name: "Corporate Airport Car Rental Pune",
description: "Corporate Airport Car Rental Pune provides rental vehicles for business passengers travelling to and from Pune International Airport. Cars can be scheduled for executives, employees, clients, and guests according to flight and business itineraries."
},
{
name: "Corporate Outstation Car Rental Pune",
description: "Corporate Outstation Car Rental Pune supports companies requiring vehicles for business travel beyond Pune. Cars can be arranged for meetings, factory visits, client travel, conferences, training programs, and other intercity corporate requirements."
},
{
name: "Monthly Corporate Car Rental Pune",
description: "Monthly Corporate Car Rental Pune provides extended vehicle arrangements for companies with ongoing transportation needs. Monthly rentals can support executives, employees, office travel, client movement, airport transfers, and regular business mobility."
},
{
name: "Daily Corporate Car Rental Pune",
description: "Daily Corporate Car Rental Pune offers vehicles for businesses requiring transportation on a daily basis. Cars can be used for office travel, meetings, client visits, airport transfers, site inspections, and scheduled corporate activities."
},
{
name: "AC Corporate Car Rental Pune",
description: "AC Corporate Car Rental Pune provides air-conditioned vehicles for comfortable business transportation. Rental cars can support executives, employees, clients, guests, airport transfers, meetings, corporate events, and longer professional journeys."
},
{
name: "Luxury Corporate Car Rental Pune",
description: "Luxury Corporate Car Rental Pune provides premium vehicle options for executive travel, important client visits, corporate events, conferences, and special business occasions. Cars can be arranged according to passenger requirements and travel schedules."
},
{
name: "Affordable Corporate Car Rental Pune",
description: "Affordable Corporate Car Rental Pune provides practical rental options for organizations managing regular business transportation. Companies can arrange suitable vehicles for employees, executives, meetings, airport travel, client movement, and corporate journeys."
},
{
name: "Corporate Car Rental Near Me Pune",
description: "Corporate Car Rental Near Me Pune helps businesses arrange rental vehicles around Pune's major office, commercial, industrial, and technology corridors. Services can support executive travel, employee movement, airport transfers, client visits, and business meetings."
},
{
name: "Corporate Car for Business Travel Pune",
description: "Corporate Car for Business Travel Pune provides dedicated transportation for professionals travelling to meetings, client locations, conferences, industrial sites, and other business destinations. Cars can be arranged for local and intercity corporate journeys."
},
{
name: "Corporate Guest Car Rental Pune",
description: "Corporate Guest Car Rental Pune helps organizations arrange comfortable transportation for visiting clients, consultants, vendors, executives, and business partners. Rental cars can connect airports, hotels, offices, meeting venues, and event locations."
},
{
name: "Corporate Fleet Car Rental Pune",
description: "Corporate Fleet Car Rental Pune supports organizations requiring multiple vehicles for recurring business transportation. Fleet requirements can be planned for employees, executives, clients, airport transfers, office operations, corporate events, and outstation travel."
}
],
tableData: [
["Corporate Car Rental Pune"],
["Corporate Car Hire Pune"],
["Corporate Car Booking Pune"],
["Corporate Car Rental Service Pune"],
["Corporate Car Rental Provider Pune"],
["Corporate Car Hire Service Provider Pune"],
["Corporate Taxi Rental Pune"],
["Corporate Cab Rental Pune"],
["Company Car Rental Pune"],
["Corporate Car with Driver Pune"],
["Office Car Rental Pune"],
["Business Car Rental Pune"],
["Corporate Travel Car Rental Pune"],
["Corporate Employee Car Rental Pune"],
["Corporate Airport Car Rental Pune"],
["Corporate Outstation Car Rental Pune"],
["Monthly Corporate Car Rental Pune"],
["Daily Corporate Car Rental Pune"],
["AC Corporate Car Rental Pune"],
["Luxury Corporate Car Rental Pune"],
["Affordable Corporate Car Rental Pune"],
["Corporate Car Rental Near Me Pune"],
["Corporate Car for Business Travel Pune"],
["Corporate Guest Car Rental Pune"],
["Corporate Fleet Car Rental Pune"]
],
whychoose: [
{
WhyChooseheading: "Dedicated Corporate Transportation",
WhyChoosedescription: "Corporate car rental arrangements provide businesses with dedicated transportation for employees, executives, clients, and professional visitors. Vehicles can be scheduled around meetings, office timings, airport journeys, events, and other business requirements."
},
{
WhyChooseheading: "Driver-Supported Car Options",
WhyChoosedescription: "Companies can choose cars with driver support when employees or executives prefer convenient transportation without self-driving responsibilities. This option can be useful for long business schedules, client travel, airport transfers, and executive movement."
},
{
WhyChooseheading: "Flexible Rental Periods",
WhyChoosedescription: "Corporate transportation requirements can vary from a single business meeting to recurring monthly travel. Rental arrangements can therefore be planned for daily, monthly, short-term, event-based, and longer outstation requirements."
},
{
WhyChooseheading: "Airport and Guest Transfers",
WhyChoosedescription: "Corporate rental cars can support visiting clients, executives, employees, and business guests travelling through Pune International Airport. Vehicles can be scheduled between airports, hotels, offices, meeting venues, and other business destinations."
},
{
WhyChooseheading: "Support for Business Travel",
WhyChoosedescription: "Rental cars can help professionals travel between offices, client locations, industrial sites, conference venues, and other business destinations. Local Pune journeys and longer intercity corporate trips can both be accommodated."
},
{
WhyChooseheading: "Corporate Fleet Requirements",
WhyChoosedescription: "Organizations with multiple transportation requirements can arrange several rental vehicles for employees, executives, clients, events, and business operations. Fleet-based arrangements can be structured around passenger capacity, routes, schedules, and usage requirements."
},
{
WhyChooseheading: "Comfortable AC Vehicle Options",
WhyChoosedescription: "Air-conditioned rental cars can provide comfortable transportation for employees, executives, clients, and visiting professionals. Vehicle selection can be based on passenger numbers, luggage, journey duration, and the nature of the corporate trip."
},
{
WhyChooseheading: "Local and Outstation Corporate Travel",
WhyChoosedescription: "Corporate car rental can cover regular Pune travel as well as journeys to destinations outside the city. Cars can support client visits, factory inspections, conferences, business meetings, training programs, and other professional travel requirements."
}
]
};












const faqData = [
{
question: "How can companies arrange corporate car rental in Pune with Citysky Cabs?",
answer: "Businesses can enquire about corporate car rental by sharing employee or executive travel requirements, pickup locations, destinations, travel dates, passenger count, and expected usage duration. Citysky Cabs can discuss suitable vehicle arrangements for office travel, client visits, meetings, airport transfers, and other corporate transportation needs."
},
{
question: "Can Citysky Cabs provide cars for regular corporate transportation in Pune?",
answer: "Companies requiring recurring transportation for employees or executives can discuss regular car rental arrangements. Office addresses, employee pickup locations, reporting times, passenger numbers, travel frequency, and expected service duration can be provided to help plan transportation around the organization's schedule."
},
{
question: "What types of corporate travel can be covered by car rental services in Pune?",
answer: "Corporate car rental can be used for employee travel, executive transportation, client meetings, airport transfers, conferences, training programs, industrial visits, hotel transfers, and business events. Citysky Cabs can review the itinerary and vehicle requirement according to the nature of the corporate journey."
},
{
question: "Can companies rent cars for senior executives and visiting clients in Pune?",
answer: "Businesses can enquire about dedicated cars for senior executives, visiting management teams, clients, consultants, and other professional guests. The itinerary may include airport pickup, hotel transfers, office meetings, conferences, and multiple business locations depending on the visitor's schedule."
},
{
question: "Can corporate car rental include Pune Airport transfers?",
answer: "Companies can arrange cars for employee and executive airport pickups or drops between Pune Airport, offices, hotels, and residences. Flight details, passenger count, luggage requirements, pickup address, and required airport reporting time can be shared with Citysky Cabs when planning the transfer."
},
{
question: "Can I rent a car for corporate meetings across different locations in Pune?",
answer: "Professionals attending meetings at multiple offices, client locations, hotels, or business venues can enquire about a dedicated rental car. The day's itinerary, starting point, destinations, passenger count, and expected duration can be provided so Citysky Cabs can understand the required corporate travel schedule."
},
{
question: "Can Citysky Cabs arrange corporate car rentals for outstation business trips from Pune?",
answer: "Companies can enquire about vehicles for business travel from Pune to destinations such as Mumbai, Nashik, Kolhapur, Satara, Aurangabad, Bangalore, Hyderabad, Gujarat, and other locations. One-way, round-trip, and multi-day travel requirements can be discussed according to the business itinerary."
},
{
question: "Can corporate car rental services be used for conferences and business events?",
answer: "Organizations conducting conferences, seminars, exhibitions, workshops, training programs, and corporate gatherings can discuss transportation for employees and guests. Event venue, pickup points, participant count, reporting time, and return schedule can be shared to plan the required car rental arrangement."
},
{
question: "Can companies arrange cars for industrial visits around Pune?",
answer: "Businesses can enquire about dedicated cars for factory inspections, supplier meetings, audits, plant visits, technical discussions, and other industrial activities around Pune. The facility address, pickup location, passenger count, meeting schedule, and return requirements can be provided while planning the journey."
},
{
question: "What details are required for corporate car rental in Pune?",
answer: "Companies can provide the pickup address, destination, travel date, passenger count, required vehicle category, rental duration, and expected travel schedule. Details about multiple stops, airport transfers, executive travel, client transportation, or outstation business journeys can also be included when discussing the requirement."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Harish Mahajan",
feedback:
"Our company needed a dedicated car for an executive who had several meetings across Pune followed by an airport transfer. We shared the complete itinerary with Citysky Cabs, and the rental arrangement allowed us to coordinate the different business locations without arranging separate vehicles for each journey.",
rating: 5
},
{
id: 2,
name: "Miss. Shreya Patil",
feedback:
"We had a visiting client coming to Pune for two days of meetings, including office visits and a factory discussion outside the city. Citysky Cabs arranged the corporate car according to the schedule we provided. Having one planned transportation arrangement made the visitor's travel much easier for our team to manage.",
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
  "name": "Corporate Car Rental Service Provider in Pune",
  "image": "https://www.cityskycab.in/assets/images/corporate-car-rental-service-provider-in-pune.webp",
  "description": "Corporate Car Rental Service Provider in Pune from Citysky Cabs is designed for companies, offices, executives and business teams that require comfortable and organized transportation for regular or occasional corporate travel. Corporate Car Rental Pune, Corporate Car Hire Pune, Corporate Car Booking Pune and Corporate Car Rental Service Pune can be arranged for office commuting, meetings, client visits, events and business journeys. Corporate Car Rental Provider Pune and Corporate Car Hire Service Provider Pune support companies looking for chauffeur-driven vehicles and flexible travel arrangements. Corporate Taxi Rental Pune and Corporate Cab Rental Pune are suitable for employee movement, executive travel and scheduled corporate transportation, while Company Car Rental Pune can support businesses with recurring vehicle requirements. Corporate Car with Driver Pune, Office Car Rental Pune and Business Car Rental Pune provide convenient options for employees, managers, executives and visiting guests. Corporate Travel Car Rental Pune and Corporate Employee Car Rental Pune can be organized around office schedules and travel plans, while Corporate Airport Car Rental Pune and Corporate Outstation Car Rental Pune are suitable for airport transfers and intercity business trips. Monthly Corporate Car Rental Pune can also be arranged for companies requiring recurring transportation with suitable vehicles and professional drivers.",
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
    "url": "https://www.cityskycab.in/corporate-car-rental-service-provider-in-pune"
  }
};








    return (
        <div>

<Helmet>
  <title>
    Corporate Car Rental Service Provider in Pune | Chauffeur-Driven Business Car Hire | +91 8554819191
  </title>

  <meta
    name="description"
    content="Corporate Car Rental Service Provider in Pune by Citysky Cabs for company car rental, chauffeur-driven corporate travel, employee transportation, airport transfers, office travel and outstation business journeys."
  />

  <meta
    name="keywords"
    content="Corporate Car Rental Service Provider in Pune, Corporate Car Rental Pune, Corporate Car Hire Pune, Corporate Car Booking Pune, Corporate Car Rental Service Pune, Corporate Car Rental Provider Pune, Corporate Car Hire Service Provider Pune, Corporate Taxi Rental Pune, Corporate Cab Rental Pune, Company Car Rental Pune, Corporate Car with Driver Pune, Office Car Rental Pune, Business Car Rental Pune, Corporate Travel Car Rental Pune, Corporate Employee Car Rental Pune, Corporate Airport Car Rental Pune, Corporate Outstation Car Rental Pune, Monthly Corporate Car Rental Pune, Corporate chauffeur car rental Pune, Corporate chauffeur car hire Pune, Pune corporate car rental service, Pune corporate car hire service, Pune company car rental, Pune business car rental, Pune office car rental with driver, Pune executive car rental, Pune corporate taxi rental, Pune corporate cab rental, Pune employee car rental, Pune corporate travel car hire, Pune airport corporate car rental, Pune corporate airport transfer car, Pune corporate outstation car rental, Pune monthly car rental with driver, Pune long term corporate car rental, Pune corporate transportation car service, Pune business travel car service, Pune executive chauffeur service, Pune company transportation service, Pune corporate vehicle rental, Pune corporate car service provider"
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
                            <img src='/images/keywords/152.jpg' alt='img' className='img-fluid' />
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

export default Corporatecarrentalserviceprovider;