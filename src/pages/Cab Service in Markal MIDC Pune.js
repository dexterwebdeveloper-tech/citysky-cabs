import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceinmarkal() {

const cardData = {
keyword: "Cab Service in Markal MIDC Pune",
headingDescription: "Citysky Cabs provides reliable cab services in Markal MIDC Pune for industrial employees, factory staff, corporate teams, executives, business travelers, families, and local passengers. Transportation can be arranged for daily office pickup and drop, employee commuting, factory shifts, corporate meetings, airport transfers, railway station travel, local journeys, and outstation trips. Cab services can connect Markal MIDC with Alandi, Moshi, Chakan, Bhosari, Charholi, Yerwada, Pune Airport, Pune city, and other important industrial and commercial destinations through convenient driver-based transportation.",
topPlaces: [
{
title: "Markal MIDC",
description: "Markal MIDC is an industrial destination serving manufacturing, engineering, warehousing, logistics, and supporting businesses. Cab services can help employees, factory staff, executives, vendors, and business visitors travel between workplaces, residential areas, transport hubs, and nearby commercial locations."
},
{
title: "Markal",
description: "Markal is a growing local area with industrial, residential, and commercial activity around the MIDC corridor. Taxi transportation can support daily employee commuting, factory travel, business visits, personal appointments, and connections with nearby towns and transport points."
},
{
title: "Alandi",
description: "Alandi is an important nearby town with residential, commercial, and religious significance. Cab services from Markal can provide convenient transportation for employees, families, business travelers, and visitors travelling between Alandi and industrial workplaces."
},
{
title: "Charholi Budruk",
description: "Charholi Budruk is a developing residential and commercial area near the Markal-Alandi region. Cab transportation can connect passengers with Markal MIDC for office commuting, industrial work, business appointments, and daily travel requirements."
},
{
title: "Moshi",
description: "Moshi is a rapidly developing residential and commercial locality with connectivity toward major industrial areas. Cab services can support employees and business travelers travelling between Moshi and Markal MIDC for workplace commuting, meetings, and scheduled industrial visits."
},
{
title: "Chakan MIDC",
description: "Chakan MIDC is a major manufacturing and industrial hub in the Pune region. Cab services can connect Markal employees, executives, suppliers, and business visitors with Chakan factories and offices for industrial visits, meetings, employee travel, and professional requirements."
},
{
title: "Bhosari MIDC",
description: "Bhosari MIDC is an established industrial area with manufacturing, engineering, automotive, and commercial businesses. Transportation from Markal can support employees, executives, vendors, and business visitors travelling for office work, factory visits, and corporate meetings."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important travel point for corporate executives, employees, clients, and families. Airport cab services from Markal MIDC can be scheduled according to flight timings for convenient pickup and drop transportation."
},
{
title: "Yerwada",
description: "Yerwada is a well-connected Pune locality with commercial, residential, and institutional activity and access toward the airport corridor. Cab services can support Markal passengers travelling for business meetings, airport transfers, office visits, and other scheduled journeys."
},
{
title: "Pune",
description: "Pune is a major technology, business, education, and commercial center connected with Markal through important road routes. Private and corporate cabs can support employees, executives, families, and business travelers travelling between Markal MIDC and central Pune."
}
],
services: [
{
name: "Cab Service Markal MIDC Pune",
description: "Cab Service Markal MIDC Pune provides transportation for industrial employees, factory staff, corporate professionals, families, and local passengers. Vehicles can be arranged for office commuting, factory visits, airport transfers, railway station travel, local journeys, and outstation routes."
},
{
name: "Taxi Service Markal MIDC Pune",
description: "Taxi Service Markal MIDC Pune supports passengers travelling between Markal, nearby towns, industrial areas, commercial destinations, and transport hubs. Taxis can be used for business travel, employee commuting, personal journeys, railway transfers, and scheduled regional trips."
},
{
name: "Cab Booking Markal MIDC",
description: "Cab Booking Markal MIDC allows passengers and businesses to arrange transportation according to their preferred pickup location, destination, date, time, and vehicle requirement. Advance bookings can support employees, executives, factory visitors, and families."
},
{
name: "Cab Rental Markal MIDC",
description: "Cab Rental Markal MIDC provides flexible transportation for local travel, industrial visits, business meetings, family journeys, sightseeing, and longer trips. Rental requirements can be planned according to journey duration, passenger count, route, and travel schedule."
},
{
name: "Corporate Cab Markal MIDC",
description: "Corporate Cab Markal MIDC supports companies requiring transportation for employees, executives, clients, vendors, and business guests. Cabs can be scheduled for office commuting, factory visits, meetings, airport transfers, and corporate outstation travel."
},
{
name: "Corporate Taxi Markal Pune",
description: "Corporate Taxi Markal Pune provides professional transportation for businesses operating around Markal and nearby industrial areas. Services can cover employee movement, executive travel, client transfers, business meetings, airport journeys, and scheduled corporate transportation."
},
{
name: "Employee Transportation Markal MIDC",
description: "Employee Transportation Markal MIDC helps industrial and commercial businesses organize regular staff commuting between residential areas and workplaces. Routes can be planned according to employee locations, office timings, factory shifts, and recurring transportation schedules."
},
{
name: "Office Pickup Drop Markal",
description: "Office Pickup Drop Markal provides scheduled transportation between employee residences and office locations. Pickup points and routes can be coordinated around working hours, staff locations, shift schedules, and the operational requirements of individual companies."
},
{
name: "Industrial Employee Cab Markal",
description: "Industrial Employee Cab Markal is suitable for manufacturing units, engineering companies, warehouses, processing facilities, and other industrial businesses. Regular employee routes can be organized around staff residential locations and factory operating schedules."
},
{
name: "Factory Staff Cab Markal MIDC",
description: "Factory Staff Cab Markal MIDC helps industrial businesses arrange transportation for workers and staff travelling to and from workplaces. Pickup and drop schedules can be coordinated around factory shifts, reporting times, employee locations, and operational requirements."
},
{
name: "Monthly Cab Service Markal",
description: "Monthly Cab Service Markal is suitable for businesses, employees, families, and individuals requiring recurring transportation throughout the month. Plans can support office commuting, factory travel, local journeys, business requirements, and regular personal transportation."
},
{
name: "Daily Office Cab Markal",
description: "Daily Office Cab Markal provides recurring transportation for employees travelling between their homes and workplaces. Daily routes can be organized according to office timings, employee pickup points, shift schedules, and regular commuting requirements."
},
{
name: "Airport Cab Markal MIDC",
description: "Airport Cab Markal MIDC provides scheduled transportation between Markal and Pune International Airport for employees, executives, families, and business travelers. Pickup and drop journeys can be coordinated according to flight schedules and passenger requirements."
},
{
name: "Outstation Cab Markal Pune",
description: "Outstation Cab Markal Pune is suitable for passengers travelling to Pune, Mumbai, Nashik, Ahmednagar, Aurangabad, Satara, Kolhapur, Lonavala, and other destinations. One-way and round-trip journeys can be arranged according to the passenger's itinerary."
},
{
name: "AC Cab Service Markal",
description: "AC Cab Service Markal provides comfortable air-conditioned transportation for local and longer journeys. It is suitable for employees, families, executives, business travelers, airport passengers, and visitors requiring private driver-based travel."
},
{
name: "Affordable Cab Service Markal MIDC",
description: "Affordable Cab Service Markal MIDC provides practical transportation options for office commuting, employee travel, airport transfers, family journeys, local trips, and outstation routes. Vehicle arrangements can be selected according to passenger count and journey requirements."
},
{
name: "Cab Service Near Me Markal",
description: "Cab Service Near Me Markal helps passengers looking for convenient transportation around Markal and nearby areas. Services can be used for local transfers, employee commuting, railway station travel, airport journeys, business appointments, and private trips."
},
{
name: "Cab with Driver Markal MIDC",
description: "Cab with Driver Markal MIDC provides convenient driver-based transportation for employees, executives, families, business travelers, and visitors. It can be arranged for office travel, industrial visits, airport transfers, local journeys, and outstation transportation."
},
{
name: "Business Travel Cab Markal",
description: "Business Travel Cab Markal supports professionals travelling for meetings, factory inspections, client appointments, industrial visits, conferences, and other work-related activities. Cabs can be scheduled for local business travel as well as longer intercity journeys."
},
{
name: "Corporate Car Rental Markal",
description: "Corporate Car Rental Markal provides flexible transportation for businesses requiring vehicles for employees, executives, clients, guests, meetings, airport transfers, and industrial visits. Rental arrangements can be planned according to passenger capacity and journey duration."
},
{
name: "Employee Pickup Drop Markal MIDC",
description: "Employee Pickup Drop Markal MIDC provides organized transportation between staff residences and workplaces in and around the industrial area. Companies can establish recurring pickup points and schedules based on employee locations, office hours, factory shifts, and operational needs."
},
{
name: "Industrial Staff Transportation Markal",
description: "Industrial Staff Transportation Markal helps factories and industrial companies coordinate regular employee movement. Routes can be structured around staff residential locations, factory reporting times, shift changes, and recurring workplace transportation requirements."
},
{
name: "Private Cab Service Markal",
description: "Private Cab Service Markal provides dedicated transportation for individuals, families, employees, executives, and small groups. Private cabs can be used for local journeys, railway station transfers, airport travel, sightseeing, business trips, and outstation transportation."
},
{
name: "Local Taxi Service Markal Pune",
description: "Local Taxi Service Markal Pune is suitable for everyday transportation around Markal and nearby destinations. Passengers can use local taxis for shopping, appointments, railway station transfers, residential travel, business visits, industrial movement, and short-distance journeys."
},
{
name: "Markal MIDC Corporate Cab Service",
description: "Markal MIDC Corporate Cab Service is designed for companies requiring organized transportation for employees, executives, clients, and business guests. Services can cover daily commuting, factory shifts, airport transfers, meetings, industrial visits, and corporate outstation travel."
}
],
tableData: [
["Cab Service Markal MIDC Pune"],
["Taxi Service Markal MIDC Pune"],
["Cab Booking Markal MIDC"],
["Cab Rental Markal MIDC"],
["Corporate Cab Markal MIDC"],
["Corporate Taxi Markal Pune"],
["Employee Transportation Markal MIDC"],
["Office Pickup Drop Markal"],
["Industrial Employee Cab Markal"],
["Factory Staff Cab Markal MIDC"],
["Monthly Cab Service Markal"],
["Daily Office Cab Markal"],
["Airport Cab Markal MIDC"],
["Outstation Cab Markal Pune"],
["AC Cab Service Markal"],
["Affordable Cab Service Markal MIDC"],
["Cab Service Near Me Markal"],
["Cab with Driver Markal MIDC"],
["Business Travel Cab Markal"],
["Corporate Car Rental Markal"],
["Employee Pickup Drop Markal MIDC"],
["Industrial Staff Transportation Markal"],
["Private Cab Service Markal"],
["Local Taxi Service Markal Pune"],
["Markal MIDC Corporate Cab Service"]
],
whychoose: [
{
WhyChooseheading: "Industrial Area Transportation",
WhyChoosedescription: "Markal MIDC has manufacturing, warehousing, engineering, and supporting industrial activities that create regular transportation requirements for employees and staff. Cab services can be planned around workplace locations, residential areas, and operating schedules."
},
{
WhyChooseheading: "Employee Shift Pickup and Drop",
WhyChoosedescription: "Companies operating different shifts can arrange employee transportation according to reporting and departure timings. Pickup points and routes can be coordinated around staff residences, factory schedules, office hours, and workplace requirements."
},
{
WhyChooseheading: "Daily and Monthly Cab Plans",
WhyChoosedescription: "Transportation can be arranged for individual journeys, recurring daily commuting, or longer monthly requirements. Businesses and passengers can plan services according to travel frequency, route distance, passenger needs, and duration."
},
{
WhyChooseheading: "Airport Transfer Support",
WhyChoosedescription: "Employees, executives, clients, and families travelling through Pune International Airport can arrange scheduled airport transportation from Markal MIDC. Pickup and drop journeys can be coordinated around flight timings and passenger requirements."
},
{
WhyChooseheading: "Corporate and Business Travel",
WhyChoosedescription: "Corporate cabs can support business meetings, industrial inspections, client visits, executive travel, and professional appointments. Driver-based transportation can be arranged for local business journeys as well as longer intercity trips."
},
{
WhyChooseheading: "Comfortable Private Cab Options",
WhyChoosedescription: "Private and air-conditioned cabs provide a convenient option for families, employees, executives, and individual passengers. Vehicle arrangements can be selected according to passenger count, destination, journey duration, and travel requirements."
},
{
WhyChooseheading: "Local and Industrial Connectivity",
WhyChoosedescription: "Markal is connected with Alandi, Charholi, Moshi, Chakan, Bhosari, Yerwada, Pune Airport, and Pune city. Cab services can support employees and passengers travelling between industrial workplaces, residential areas, transport hubs, and commercial destinations."
},
{
WhyChooseheading: "Outstation Travel Assistance",
WhyChoosedescription: "Passengers travelling beyond Markal can arrange cabs for destinations across Maharashtra and nearby regions. One-way and round-trip transportation can support business travel, family journeys, industrial visits, airport connections, and personal trips."
}
]
};










const faqData = [
{
question: "How can I arrange Cab Service in Markal MIDC Pune with Citysky Cabs?",
answer: "Employees, business travellers, industrial visitors, and local passengers can enquire about cab transportation to or from Markal MIDC by sharing their pickup location, destination, travel date, passenger count, and preferred timing. Citysky Cabs can discuss the journey according to the specific travel requirement."
},
{
question: "Can Citysky Cabs provide employee transportation to Markal MIDC Pune?",
answer: "Companies operating in Markal MIDC can enquire about regular transportation for employees travelling from Pune and nearby residential areas. Pickup points, shift timings, workplace addresses, employee count, and service frequency can be shared to help plan the daily commute around the company's schedule."
},
{
question: "Can I book a cab from Pune to Markal MIDC?",
answer: "Employees and professionals travelling from Pune to Markal MIDC can enquire about point-to-point cab transportation. The preferred pickup area, office or industrial unit address, reporting time, passenger count, and return requirement can be provided to Citysky Cabs when discussing the journey."
},
{
question: "Is Cab Service in Markal MIDC suitable for industrial visits?",
answer: "Businesses can arrange cab transportation for clients, suppliers, consultants, technicians, auditors, and other visitors travelling to industrial units in Markal MIDC. The visitor pickup location, facility address, meeting time, passenger count, and return schedule can be shared for planning the trip."
},
{
question: "Can I get a cab from Markal MIDC to Pune Airport?",
answer: "Employees, executives, and corporate visitors travelling through Pune Airport can enquire about airport transfers from Markal MIDC. Providing the pickup address, flight details, passenger count, luggage information, and required airport reporting time helps Citysky Cabs understand the airport travel requirement."
},
{
question: "Can companies arrange cabs for clients and suppliers visiting Markal MIDC?",
answer: "Organizations can arrange transportation for clients, suppliers, vendors, consultants, and visiting executives travelling to Markal MIDC. Depending on the itinerary, the service can be discussed for Pune pickup, hotel transfers, industrial visits, business meetings, and return travel."
},
{
question: "Can Cab Service in Markal MIDC support employees working in different shifts?",
answer: "Organizations with morning, evening, night, or rotating shifts can discuss employee transportation according to their working schedules. Sharing residential pickup locations, shift timings, employee numbers, and Markal MIDC workplace details allows Citysky Cabs to understand the requirements for different employee groups."
},
{
question: "Can I hire a cab from Markal MIDC for an outstation trip?",
answer: "Travellers based around Markal MIDC can enquire about longer journeys to Pune, Mumbai, Nashik, Ahmednagar, Shirdi, Mahabaleshwar, Kolhapur, and other destinations. One-way or round-trip requirements can be discussed by providing the destination, travel date, passenger count, and preferred schedule."
},
{
question: "Can Citysky Cabs arrange cab transportation for business meetings from Markal MIDC?",
answer: "Professionals travelling from Markal MIDC to Pune offices, client locations, supplier facilities, conferences, and other business destinations can enquire about dedicated cab transportation. The pickup address, meeting venue, reporting time, passenger count, and return schedule can be shared while planning the journey."
},
{
question: "What details are required to book a Cab Service in Markal MIDC Pune?",
answer: "Passengers or companies can provide the pickup address, destination, travel date, pickup time, passenger count, preferred vehicle category, and expected trip duration. Additional information about airport transfers, multiple stops, employee transportation, industrial visits, or return travel can also be included when required."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Tejas Pawar",
feedback:
"Our production staff travels to Markal MIDC from different parts of Pune, and the early shift timing made arranging daily transport a priority for our team. We provided the pickup points and work schedule to Citysky Cabs, and the cab arrangement helped us coordinate employee travel more systematically.",
rating: 5
},
{
id: 2,
name: "Miss. Rutuja Shinde",
feedback:
"A technical consultant had to visit our Markal MIDC facility for an inspection, and we needed transportation from Pune along with a return journey after the visit. Citysky Cabs arranged the cab according to the schedule we shared, making the consultant's travel easier to coordinate with the day's program.",
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
  "name": "Cab Service in Markal MIDC Pune",
  "image": "https://www.cityskycab.in/assets/images/cab-service-in-markal-midc-pune.webp",
  "description": "Cab Service in Markal MIDC Pune from Citysky Cabs is suitable for employees, industrial workers, companies, factories, business travellers and local passengers who need convenient transportation around Markal MIDC and nearby Pune areas. The service covers Cab Service Markal MIDC Pune, Taxi Service Markal MIDC Pune, Cab Booking Markal MIDC and Cab Rental Markal MIDC for local travel, workplace commuting and planned journeys. Corporate Cab Markal MIDC and Corporate Taxi Markal Pune can support business travel and company transportation, while Employee Transportation Markal MIDC and Office Pickup Drop Markal are useful for regular staff commuting. Industrial Employee Cab Markal and Factory Staff Cab Markal MIDC can be arranged according to factory locations, employee pickup points and shift timings. Monthly Cab Service Markal and Daily Office Cab Markal provide flexible options for recurring transportation needs. Airport Cab Markal MIDC and Outstation Cab Markal Pune are suitable for airport transfers, intercity business travel and longer journeys. AC Cab Service Markal, Affordable Cab Markal MIDC and Cab with Driver Markal can also be arranged for comfortable and practical transportation according to passenger requirements.",
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
    "url": "https://www.cityskycab.in/cab-service-in-markal-midc-pune"
  }
};




    return (
        <div>


<Helmet>
  <title>
    Cab Service in Markal MIDC Pune | Industrial Employee Transport & Corporate Taxi | +91 8554819191
  </title>

  <meta
    name="description"
    content="Cab Service in Markal MIDC Pune by Citysky Cabs for employee transportation, factory staff pickup and drop, corporate taxi, daily office travel, airport transfers and outstation cab service."
  />

  <meta
    name="keywords"
    content="Cab Service in Markal MIDC Pune, Cab Service Markal MIDC Pune, Taxi Service Markal MIDC Pune, Cab Booking Markal MIDC, Cab Rental Markal MIDC, Corporate Cab Markal MIDC, Corporate Taxi Markal Pune, Employee Transportation Markal MIDC, Office Pickup Drop Markal, Industrial Employee Cab Markal, Factory Staff Cab Markal MIDC, Monthly Cab Service Markal, Daily Office Cab Markal, Airport Cab Markal MIDC, Outstation Cab Markal Pune, AC Cab Service Markal, Affordable Cab Markal MIDC, Cab with Driver Markal, Company Employee Transport Markal, Business Travel Cab Markal, Markal MIDC taxi service, Markal MIDC corporate cab service, Markal MIDC employee transportation, Markal MIDC staff transport, Markal MIDC office cab service, Markal MIDC industrial cab service, Markal MIDC factory employee cab, Markal MIDC employee pickup drop, Markal MIDC daily office taxi, Markal MIDC monthly cab rental, Markal MIDC airport taxi, Markal MIDC outstation taxi, Markal MIDC AC taxi, Markal MIDC affordable cab, Markal corporate taxi, Markal business travel cab, Markal employee cab service, Markal factory staff transportation, Markal company cab service, Markal MIDC corporate travel service, Pune Markal cab service, Pune Markal corporate taxi"
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
                            <img src='/images/keywords/148.jpg' alt='img' className='img-fluid' />
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

export default Cabserviceinmarkal;