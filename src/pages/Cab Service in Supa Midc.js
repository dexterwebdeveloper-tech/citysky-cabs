import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Cabserviceinsupamidc() {

const cardData = {
keyword: "Cab Service in Supa MIDC",
headingDescription: "Citysky Cabs provides dependable cab services in Supa MIDC for industrial employees, factory staff, corporate teams, business travelers, families, and local passengers. Transportation can be arranged for daily office pickup and drop, employee commuting, factory shifts, corporate meetings, airport transfers, railway station travel, local journeys, and outstation trips. Cab services can connect Supa MIDC with Ahmednagar, Shirur, Ranjangaon, Pune, Daund, Shikrapur, Pune Airport, railway stations, industrial areas, and nearby residential locations with flexible travel arrangements based on individual and corporate requirements.",
topPlaces: [
{
title: "Supa MIDC",
description: "Supa MIDC is a developing industrial destination with manufacturing, engineering, logistics, and supporting business activities. Cab services can help employees, factory staff, executives, vendors, and business visitors travel between workplaces, residences, railway stations, and nearby commercial areas."
},
{
title: "Supa",
description: "Supa is an important local destination serving the surrounding industrial and residential communities. Taxi and cab transportation can support daily commuting, business visits, personal travel, employee movement, and connections with nearby towns and transport points."
},
{
title: "Ahmednagar",
description: "Ahmednagar is a major commercial, industrial, and residential center in the region. Cab services from Supa can support employees, executives, families, and business travelers travelling between Supa MIDC and Ahmednagar for meetings, industrial work, shopping, appointments, and other requirements."
},
{
title: "Shirur",
description: "Shirur is an established commercial and industrial destination along the Pune-Ahmednagar corridor. Cab transportation from Supa can be used for business travel, employee commuting, industrial visits, family journeys, and connections with surrounding localities."
},
{
title: "Ranjangaon MIDC",
description: "Ranjangaon MIDC is a significant industrial hub with manufacturing and corporate activity. Cab services can connect Supa passengers with factories, offices, business facilities, and employee residential areas for scheduled industrial and corporate transportation."
},
{
title: "Shikrapur",
description: "Shikrapur is an important locality on the Pune-Ahmednagar route with commercial and industrial activity. Cab services can provide transportation between Supa and Shikrapur for employees, business professionals, families, and passengers travelling for scheduled appointments."
},
{
title: "Pune International Airport",
description: "Pune International Airport is an important destination for corporate executives, employees, clients, and families travelling by air. Airport cab services from Supa MIDC can be scheduled according to flight timings for convenient pickup and drop transportation."
},
{
title: "Pune",
description: "Pune is a major technology, business, education, and industrial center connected with the Supa region through important road routes. Private and corporate cabs can support employees, business travelers, families, and industrial visitors travelling between the two locations."
},
{
title: "Daund",
description: "Daund is an important railway and commercial center with strong regional connectivity. Cab transportation from Supa can help passengers reach Daund for railway travel, business activities, employee commuting, family journeys, and connections toward surrounding destinations."
},
{
title: "Kedgaon",
description: "Kedgaon is a useful regional destination along the Pune-Daund corridor with residential and commercial activity. Cab services can connect Supa passengers with Kedgaon for work travel, railway access, personal appointments, business visits, and local transportation requirements."
}
],
services: [
{
name: "Cab Service Supa MIDC",
description: "Cab Service Supa MIDC provides transportation for industrial employees, factory staff, corporate professionals, families, and local passengers. Vehicles can be arranged for office commuting, factory visits, airport transfers, railway station travel, local journeys, and outstation routes."
},
{
name: "Taxi Service Supa MIDC",
description: "Taxi Service Supa MIDC supports passengers travelling between Supa, nearby towns, industrial areas, commercial locations, and transport hubs. Taxis can be used for business travel, employee commuting, personal journeys, railway transfers, and scheduled regional trips."
},
{
name: "Cab Booking Supa MIDC",
description: "Cab Booking Supa MIDC allows passengers and businesses to arrange transportation according to their preferred pickup location, destination, date, time, and vehicle requirement. Advance booking can support employees, executives, factory visitors, and families."
},
{
name: "Cab Rental Supa MIDC",
description: "Cab Rental Supa MIDC provides flexible transportation for local travel, industrial visits, business meetings, family journeys, sightseeing, and longer trips. Rental requirements can be planned according to journey duration, passenger count, route, and travel schedule."
},
{
name: "Corporate Cab Supa MIDC",
description: "Corporate Cab Supa MIDC supports companies requiring transportation for employees, executives, clients, vendors, and business guests. Services can be scheduled for office commuting, factory visits, meetings, airport transfers, and corporate outstation travel."
},
{
name: "Corporate Taxi Supa MIDC",
description: "Corporate Taxi Supa MIDC provides professional transportation for businesses operating around Supa and surrounding industrial areas. Cabs can be arranged for employee travel, executive movement, client transfers, business meetings, airport journeys, and scheduled corporate requirements."
},
{
name: "Employee Transportation Supa MIDC",
description: "Employee Transportation Supa MIDC helps industrial and commercial businesses organize regular staff commuting between residential areas and workplaces. Routes can be planned according to employee locations, office timings, factory shifts, and recurring transportation schedules."
},
{
name: "Office Pickup Drop Supa MIDC",
description: "Office Pickup Drop Supa MIDC provides scheduled transportation between employee residences and office locations. Pickup points and routes can be coordinated around working hours, staff locations, shift schedules, and the operating requirements of individual companies."
},
{
name: "Industrial Employee Cab Supa",
description: "Industrial Employee Cab Supa is suitable for manufacturing units, engineering companies, warehouses, processing facilities, and other industrial businesses. Regular employee routes can be organized around staff residential locations and factory operating schedules."
},
{
name: "Factory Staff Cab Supa MIDC",
description: "Factory Staff Cab Supa MIDC helps industrial businesses arrange transportation for workers and staff travelling to and from workplaces. Pickup and drop schedules can be coordinated around factory shifts, reporting times, employee locations, and operational requirements."
},
{
name: "Monthly Cab Service Supa",
description: "Monthly Cab Service Supa is suitable for businesses, employees, families, and individuals requiring recurring transportation throughout the month. Plans can support office commuting, factory travel, local journeys, business requirements, and regular personal transportation."
},
{
name: "Daily Office Cab Supa",
description: "Daily Office Cab Supa provides recurring transportation for employees travelling between their homes and workplaces. Daily routes can be organized according to office timings, employee pickup points, shift schedules, and regular commuting requirements."
},
{
name: "Airport Cab Supa MIDC",
description: "Airport Cab Supa MIDC provides scheduled transportation between Supa and Pune International Airport for employees, executives, families, and business travelers. Pickup and drop journeys can be coordinated according to flight schedules and passenger requirements."
},
{
name: "Outstation Cab Supa MIDC",
description: "Outstation Cab Supa MIDC is suitable for passengers travelling to Pune, Ahmednagar, Nashik, Mumbai, Aurangabad, Solapur, Satara, and other destinations. One-way and round-trip journeys can be arranged according to the passenger's itinerary."
},
{
name: "AC Cab Service Supa",
description: "AC Cab Service Supa provides comfortable air-conditioned transportation for local and longer journeys. It is suitable for employees, families, executives, business travelers, airport passengers, and visitors requiring private driver-based travel."
},
{
name: "Affordable Cab Service Supa MIDC",
description: "Affordable Cab Service Supa MIDC provides practical transportation options for office commuting, employee travel, airport transfers, family journeys, local trips, and outstation routes. Vehicle arrangements can be selected according to passenger count and journey requirements."
},
{
name: "Cab Service Near Me Supa",
description: "Cab Service Near Me Supa helps passengers looking for convenient transportation around Supa and nearby areas. Services can be used for local transfers, employee commuting, railway station travel, airport journeys, business appointments, and private trips."
},
{
name: "Cab with Driver Supa MIDC",
description: "Cab with Driver Supa MIDC provides convenient driver-based transportation for employees, executives, families, business travelers, and visitors. It can be arranged for office travel, industrial visits, airport transfers, local journeys, and outstation transportation."
},
{
name: "Business Travel Cab Supa",
description: "Business Travel Cab Supa supports professionals travelling for meetings, factory inspections, client appointments, industrial visits, conferences, and other work-related activities. Cabs can be scheduled for local business travel as well as longer intercity journeys."
},
{
name: "Corporate Car Rental Supa MIDC",
description: "Corporate Car Rental Supa MIDC provides flexible transportation for businesses requiring vehicles for employees, executives, clients, guests, meetings, airport transfers, and industrial visits. Rental arrangements can be planned according to passenger capacity and journey duration."
},
{
name: "Employee Pickup Drop Supa",
description: "Employee Pickup Drop Supa provides organized transportation between staff residences and workplaces in and around the industrial area. Companies can establish recurring pickup points and schedules based on employee locations, office hours, factory shifts, and operational needs."
},
{
name: "Industrial Staff Transportation Supa",
description: "Industrial Staff Transportation Supa helps factories and industrial companies coordinate regular employee movement. Routes can be structured around staff residential locations, factory reporting times, shift changes, and recurring workplace transportation requirements."
},
{
name: "Private Cab Service Supa",
description: "Private Cab Service Supa provides dedicated transportation for individuals, families, employees, executives, and small groups. Private cabs can be used for local journeys, railway station transfers, airport travel, sightseeing, business trips, and outstation transportation."
},
{
name: "Local Taxi Service Supa",
description: "Local Taxi Service Supa is suitable for everyday transportation around Supa and nearby destinations. Passengers can use local taxis for shopping, appointments, railway station transfers, residential travel, business visits, industrial movement, and short-distance journeys."
},
{
name: "Supa MIDC Corporate Cab Service",
description: "Supa MIDC Corporate Cab Service is designed for companies requiring organized transportation for employees, executives, clients, and business guests. Services can cover daily commuting, factory shifts, airport transfers, meetings, industrial visits, and corporate outstation travel."
}
],
tableData: [
["Cab Service Supa MIDC"],
["Taxi Service Supa MIDC"],
["Cab Booking Supa MIDC"],
["Cab Rental Supa MIDC"],
["Corporate Cab Supa MIDC"],
["Corporate Taxi Supa MIDC"],
["Employee Transportation Supa MIDC"],
["Office Pickup Drop Supa MIDC"],
["Industrial Employee Cab Supa"],
["Factory Staff Cab Supa MIDC"],
["Monthly Cab Service Supa"],
["Daily Office Cab Supa"],
["Airport Cab Supa MIDC"],
["Outstation Cab Supa MIDC"],
["AC Cab Service Supa"],
["Affordable Cab Service Supa MIDC"],
["Cab Service Near Me Supa"],
["Cab with Driver Supa MIDC"],
["Business Travel Cab Supa"],
["Corporate Car Rental Supa MIDC"],
["Employee Pickup Drop Supa"],
["Industrial Staff Transportation Supa"],
["Private Cab Service Supa"],
["Local Taxi Service Supa"],
["Supa MIDC Corporate Cab Service"]
],
whychoose: [
{
WhyChooseheading: "Industrial Area Transportation",
WhyChoosedescription: "Supa MIDC has growing industrial and commercial activity, creating regular transportation requirements for factory employees, office staff, technical teams, and business visitors. Cab services can be planned around workplace locations and operating schedules."
},
{
WhyChooseheading: "Factory Shift Pickup and Drop",
WhyChoosedescription: "Businesses operating different shifts can arrange employee transportation according to reporting and departure timings. Pickup points and routes can be organized around employee residences, factory schedules, and workplace requirements."
},
{
WhyChooseheading: "Daily and Monthly Travel Plans",
WhyChoosedescription: "Transportation can be arranged for individual journeys, recurring daily commuting, or longer monthly requirements. Businesses and passengers can plan services according to travel frequency, route distance, passenger needs, and duration."
},
{
WhyChooseheading: "Connectivity with Ahmednagar",
WhyChoosedescription: "Ahmednagar is an important commercial and industrial center connected with Supa. Cab services can support employees, executives, families, and business visitors travelling between Supa MIDC and Ahmednagar for meetings, industrial work, appointments, and personal travel."
},
{
WhyChooseheading: "Airport Transfer Assistance",
WhyChoosedescription: "Employees, executives, clients, and families travelling through Pune International Airport can arrange scheduled airport transportation from Supa. Pickup and drop journeys can be coordinated around flight timings and passenger requirements."
},
{
WhyChooseheading: "Corporate and Business Travel",
WhyChoosedescription: "Corporate cabs can support business meetings, industrial inspections, client visits, executive travel, and vendor transportation. Driver-based vehicles can be arranged for local professional journeys as well as longer intercity business trips."
},
{
WhyChooseheading: "Private AC Cab Options",
WhyChoosedescription: "Private and air-conditioned cabs provide a convenient option for families, employees, executives, and individual passengers. Vehicle arrangements can be selected according to passenger count, destination, journey duration, and preferred travel requirements."
},
{
WhyChooseheading: "Regional Outstation Connectivity",
WhyChoosedescription: "Supa has road connectivity toward Ahmednagar, Pune, Shirur, Ranjangaon, Daund, and other regional destinations. Outstation cabs can support one-way and round-trip journeys for business travel, family trips, industrial visits, and personal transportation."
}
]
};









const faqData = [
{
question: "How can I arrange Cab Service in Supa MIDC with Citysky Cabs?",
answer: "Employees, companies, industrial visitors, and other travellers can enquire about cab transportation in Supa MIDC by providing their pickup location, destination, travel date, passenger count, and preferred timing. Citysky Cabs can discuss the required arrangement for office commuting, industrial visits, local travel, airport transfers, and business journeys."
},
{
question: "Can Citysky Cabs provide employee transportation to Supa MIDC?",
answer: "Businesses operating in Supa MIDC can enquire about regular cab transportation for employees travelling from Pune, Ahmednagar, and nearby residential areas. Employee pickup points, shift timings, workplace addresses, passenger numbers, and travel frequency can be shared to help plan transportation around the company's working schedule."
},
{
question: "Can I book a cab from Pune to Supa MIDC?",
answer: "Employees and business travellers travelling from Pune to Supa MIDC can enquire about point-to-point cab transportation. The preferred pickup area, workplace location, reporting time, passenger count, and return requirement can be shared with Citysky Cabs while planning the journey."
},
{
question: "Is Cab Service in Supa MIDC available for industrial visits?",
answer: "Companies can arrange transportation for clients, suppliers, consultants, auditors, technicians, and other visitors travelling to industrial facilities in Supa MIDC. Sharing the visitor's pickup location, facility address, meeting time, passenger count, and return schedule helps define the required cab service."
},
{
question: "Can I get a cab from Supa MIDC to Pune Airport?",
answer: "Corporate employees and business visitors travelling through Pune Airport can enquire about airport transportation from Supa MIDC. Flight details, pickup address, passenger count, luggage requirements, and required airport reporting time can be provided to Citysky Cabs when discussing the airport transfer."
},
{
question: "Can companies arrange cabs for clients visiting Supa MIDC?",
answer: "Organizations can arrange transportation for clients, suppliers, vendors, executives, and other business guests visiting Supa MIDC. Depending on the itinerary, the cab journey can include pickup from Pune or nearby locations, hotel transfers, industrial visits, meetings, and return transportation."
},
{
question: "Can Cab Service in Supa MIDC be used for employees working in different shifts?",
answer: "Companies with morning, evening, night, or rotating shifts can discuss employee cab transportation according to their work schedules. Providing residential pickup points, shift timings, employee numbers, and the Supa MIDC workplace address allows Citysky Cabs to understand the requirement for different employee groups."
},
{
question: "Can I hire a cab from Supa MIDC for an outstation journey?",
answer: "Travellers based around Supa MIDC can enquire about outstation cab journeys to Pune, Ahmednagar, Nashik, Aurangabad, Mumbai, Shirdi, Mahabaleshwar, and other destinations. One-way or round-trip travel can be discussed based on the destination, travel date, passenger count, and planned itinerary."
},
{
question: "Can Citysky Cabs provide cab transportation for business meetings from Supa MIDC?",
answer: "Professionals travelling from Supa MIDC to client offices, supplier locations, conferences, corporate offices, and other business destinations can enquire about dedicated cab transportation. The meeting venue, reporting time, passenger count, pickup address, and return schedule can be shared for planning the journey."
},
{
question: "What details are required to book a Cab Service in Supa MIDC?",
answer: "To discuss a cab requirement in Supa MIDC, passengers or companies can provide the pickup location, destination, travel date, pickup time, passenger count, preferred vehicle type, and expected journey duration. Additional details about airport transfers, multiple stops, employee travel, industrial visits, or return trips can also be provided."
}
];

const testimonials = [
{
id: 1,
name: "Mr. Akash Wagh",
feedback:
"Our employees were travelling to the Supa MIDC facility from different parts of Pune, and the early reporting time made regular transportation difficult to coordinate. We shared the pickup locations and shift schedule with Citysky Cabs, and the cab arrangement helped us manage the daily commute more smoothly.",
rating: 5
},
{
id: 2,
name: "Miss. Manasi Gaikwad",
feedback:
"We had a client visiting our Supa MIDC unit for a full-day discussion and needed transportation from Pune and back. Citysky Cabs arranged the cab around the meeting schedule we provided. Having the same transportation planned for the complete visit made the day's coordination much easier.",
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
  "name": "Cab Service in Supa MIDC",
  "image": "https://www.cityskycab.in/assets/images/cab-service-in-supa-midc.webp",
  "description": "Cab Service in Supa MIDC from Citysky Cabs is suitable for employees, industrial workers, companies, factories, business travellers and local passengers who need convenient transportation around Supa MIDC and nearby areas. The service covers Cab Service Supa MIDC, Taxi Service Supa MIDC, Cab Booking Supa MIDC and Cab Rental Supa MIDC for local travel, workplace commuting and planned journeys. Corporate Cab Supa MIDC and Corporate Taxi Supa MIDC can support company travel, employee movement and business visits, while Employee Transportation Supa MIDC and Office Pickup Drop Supa MIDC are useful for regular staff commuting. Industrial Employee Cab Supa and Factory Staff Cab Supa MIDC can be arranged according to factory locations, shift timings and employee pickup points. Monthly Cab Service Supa and Daily Office Cab Supa provide flexible options for recurring transportation requirements. Airport Cab Supa MIDC and Outstation Cab Supa MIDC can also be arranged for airport transfers, intercity journeys and longer business trips. AC Cab Service Supa, Affordable Cab Supa MIDC and Cab with Driver Supa provide additional travel choices for companies, employees and passengers looking for comfortable and convenient transportation.",
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
    "url": "https://www.cityskycab.in/cab-service-in-supa-midc"
  }
};

    return (
        <div>

<Helmet>
  <title>
    Cab Service in Supa MIDC | Industrial Employee Transport & Corporate Taxi | +91 8554819191
  </title>

  <meta
    name="description"
    content="Cab Service in Supa MIDC by Citysky Cabs for corporate travel, employee transportation, factory staff pickup and drop, daily office cabs, airport transfers and outstation taxi service."
  />

  <meta
    name="keywords"
    content="Cab Service in Supa MIDC, Cab Service Supa MIDC, Taxi Service Supa MIDC, Cab Booking Supa MIDC, Cab Rental Supa MIDC, Corporate Cab Supa MIDC, Corporate Taxi Supa MIDC, Employee Transportation Supa MIDC, Office Pickup Drop Supa MIDC, Industrial Employee Cab Supa, Factory Staff Cab Supa MIDC, Monthly Cab Service Supa, Daily Office Cab Supa, Airport Cab Supa MIDC, Outstation Cab Supa MIDC, AC Cab Service Supa, Affordable Cab Supa MIDC, Cab with Driver Supa, Company Employee Transport Supa, Business Travel Cab Supa, Supa MIDC taxi service, Supa MIDC corporate cab service, Supa MIDC employee transportation, Supa MIDC staff transport, Supa MIDC office cab service, Supa MIDC industrial cab service, Supa MIDC factory employee cab, Supa MIDC employee pickup drop, Supa MIDC daily office taxi, Supa MIDC monthly cab rental, Supa MIDC airport taxi, Supa MIDC outstation taxi, Supa MIDC AC taxi, Supa MIDC affordable cab, Supa corporate taxi, Supa business travel cab, Supa employee cab service, Supa factory staff transportation, Supa industrial employee transportation, Supa MIDC company cab service, Supa MIDC corporate travel service, Pune Supa cab service"
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
                            <img src='/images/keywords/145.jpg' alt='img' className='img-fluid' />
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

export default Cabserviceinsupamidc;